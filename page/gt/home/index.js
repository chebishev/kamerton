import { createWidget, widget, event, prop, } from "@zos/ui";
import { push } from "@zos/router";
import { create, id } from '@zos/media';
import { LocalStorage } from "@zos/storage";
import { log as Logger } from "@zos/utils";
import {
  BACKGROUND,
  BACKGROUND_PRESSED,
  INFO_ICON, VOLUME_UP,
  VOLUME_DOWN, VOLUME_VALUE, VOLUME_GROUP,
} from "zosLoader:./index.[pf].layout.js";

const logger = Logger.getLogger("kamerton");
const DEFAULT_VOLUME = 30;
const VOLUME_STEP = 10;
const VOLUME_KEY = "kamerton_volume";
let player = null;

const localStorage = new LocalStorage();

Page({
  state: {
    previousVolume: null,
    kamertonVolume: DEFAULT_VOLUME,
    volumeText: null,
  },
  changeVolume(step) {
    const volume = Math.max(
      0,
      Math.min(100, this.state.kamertonVolume + step)
    );

    this.state.kamertonVolume = volume;

    player.setVolume(volume);
    localStorage.setItem(VOLUME_KEY, volume);

    this.state.volumeText.setProperty(prop.TEXT, `${volume}%`);
  },
  onInit() {
  },
  build() {
    // Show the background image
    const background = createWidget(widget.IMG, BACKGROUND);
    // Create audio player
    player = create(id.PLAYER);
    // save current device volume
    this.state.previousVolume = player.getVolume();
    // restore preferred volume from local storage (if any)
    this.state.kamertonVolume = localStorage.getItem(
      VOLUME_KEY,
      DEFAULT_VOLUME
    );
    // Set the volume 1-100, default -1. It may be quieter on devices with one speaker
    player.setVolume(this.state.kamertonVolume);

    // Listen for prepare() function's status: boolean
    player.addEventListener(player.event.PREPARE, (result) => {
      if (result) {
        // start() method changes the status code to 2
        player.start();
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
        background.setProperty(prop.MORE, {
          src: BACKGROUND_PRESSED,
        });
      } else {
        player.stop();
        // reset the background to default
        background.setProperty(prop.MORE, {
          src: BACKGROUND.src,
        });
      }
    });

    const volumeGroup = createWidget(widget.GROUP, VOLUME_GROUP);

    const volUp = volumeGroup.createWidget(widget.TEXT, VOLUME_UP);
    volUp.addEventListener(event.CLICK_UP, () => {
      this.changeVolume(VOLUME_STEP);
    });

    this.state.volumeText = volumeGroup.createWidget(widget.TEXT, {
      ...VOLUME_VALUE,
      text: `${this.state.kamertonVolume}%`,
    });

    const volDown = volumeGroup.createWidget(widget.TEXT, VOLUME_DOWN);
    volDown.addEventListener(event.CLICK_UP, () => {
      this.changeVolume(-VOLUME_STEP);
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

      const previousVolume = this.state.previousVolume;

      if (
        previousVolume !== null &&
        previousVolume >= 0 &&
        previousVolume <= 100
      ) {
        player.setVolume(previousVolume);
      }
    }
  },
});