import { createWidget, widget, event } from "@zos/ui";
import { push } from "@zos/router";
import { create, id } from '@zos/media';
import { log as Logger } from "@zos/utils";
import { BACKGROUND, BACKGROUND_PRESSED, INFO_ICON } from "zosLoader:./index.[pf].layout.js";

const logger = Logger.getLogger("kamerton");
let player = null;

Page({
  onInit() {
  },
  build() {
    // Show the background image
    const background = createWidget(widget.IMG, BACKGROUND);
    // Create audio player
    player = create(id.PLAYER);
    // Set the volume 1-100, default -1. It may be quieter on devices with one speaker
    player.setVolume(25);
    // Listen for prepare() function's status: boolean
    player.addEventListener(player.event.PREPARE, (result) => {
      if (result) {
        // start() method changes the status code to 2
        player.start();
        // change the background to more active one
      } else {
        logger.error("failed to prepare audio");
      }
    });
    player.addEventListener(player.event.COMPLETE, () => {
      player.stop();
    });
    // media file source (duration 1:20 min)
    player.setSource(player.source.FILE, { file: "assets://raw/media/A-440Hz.mp3" })

    // tap the background to start/stop sound playing
    background.addEventListener(event.CLICK_UP, () => {
      if (player.getStatus() == 1) {
        // status code 1 means Stopped
        player.prepare();
        // change the background to more active one
        background.src = BACKGROUND_PRESSED;
      } else {
        player.stop();
        // reset the background to default
        background.src = BACKGROUND.src;
      }
    });
    // create and show clickable info image leading to about.js
    const info = createWidget(widget.IMG, INFO_ICON);
    info.addEventListener(event.CLICK_UP, () => {
      push({
        url: "page/gt/home/about",
      });
    });
  },
  onDestroy() {
    if (player) {
      player.stop();
    }
  },
});