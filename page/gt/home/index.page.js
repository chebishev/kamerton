import { createWidget, widget, event } from "@zos/ui";
import { push } from "@zos/router";
import { create, id } from '@zos/media';
import { log as Logger } from "@zos/utils";
import { BACKGROUND, INFO_ICON } from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("kamerton");
// flag for start/stop the playing on tap
let soundPlaying = false;
let player = null;

Page({
  onInit() {
    logger.debug("page onInit invoked");
  },
  build() {
    
    logger.debug("page build invoked");
    // Show the background image
    const background = createWidget(widget.IMG, BACKGROUND);
    // Create audio player
    player = create(id.PLAYER);
    // Listen for prepare() function
    player.addEventListener(player.event.PREPARE, (result) => {
      if (result) {
        player.start();
      } else {
        soundPlaying = false;
        logger.error("failed to prepare audio");
      }
    });
    player.addEventListener(player.event.COMPLETE, () => {
      player.stop();
      soundPlaying = false;
    });
    // media file source (duration 1:20 min)
    player.setSource(player.source.FILE, { file: "assets://raw/media/A-440Hz.mp3" })

    // tap the background to start/stop sound playing
    background.addEventListener(event.CLICK_UP, () => {
      if (!soundPlaying) {
        player.prepare();
        soundPlaying = true;
        logger.info("playing sound....");
      } else {
        player.stop()
        soundPlaying = false;
        logger.info("sound stopped");
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
    logger.debug("page onDestroy invoked");
  },
});