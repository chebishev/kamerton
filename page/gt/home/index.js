import { createWidget, deleteWidget, widget, event, prop } from "@zos/ui";
import { push } from "@zos/router";
import { create, id } from '@zos/media';
import { LocalStorage } from "@zos/storage";
import { log as Logger } from "@zos/utils";
import { BACKGROUND, BACKGROUND_PRESSED, INFO_ICON, VOLUME_UP_ICON, VOLUME_DOWN_ICON } from "zosLoader:./index.[pf].layout.js";

const logger = Logger.getLogger("kamerton");
const DEFAULT_VOLUME = 25;
const VOLUME_STEP = 10;
const VOLUME_KEY = "kamerton_volume";
const VOLUME_ANGLE_FACTOR = 3.6;
let player = null;

const localStorage = new LocalStorage();

Page({
  state: {
    previousVolume: null,
    kamertonVolume: DEFAULT_VOLUME,
    arcProgress: null,
  },
  changeVolume(step) {
    const volume = Math.max(
      0,
      Math.min(100, this.state.kamertonVolume + step)
    );

    this.state.kamertonVolume = volume;

    player.setVolume(volume);

    localStorage.setItem(VOLUME_KEY, volume);

    this.updateVolumeArc();
  },

  updateVolumeArc() {
  const angle = Math.max(
    0,
    Math.min(360, this.state.kamertonVolume * VOLUME_ANGLE_FACTOR)
  );

  // Remove the previous ARC widget
  if (this.state.arcProgress) {
    deleteWidget(this.state.arcProgress);
    this.state.arcProgress = null;
  }

  // Create a new ARC widget
  this.state.arcProgress = createWidget(widget.ARC_PROGRESS, {
    center_x: 480 / 2,
    center_y: 480 / 2,
    radius: 20,
    start_angle: 0,
    end_angle: angle,
    color: 0xffffff,
    line_width: 3,
    level: 100,
  });
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
    background.addEventListener(event.CLICK_DOWN, () => {
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
    // create and show clickable info image leading to about.js
    const volUp = createWidget(widget.IMG, VOLUME_UP_ICON);
    volUp.addEventListener(event.CLICK_UP, () => {
      this.changeVolume(VOLUME_STEP)
    })
    const volDown = createWidget(widget.IMG, VOLUME_DOWN_ICON);

    volDown.addEventListener(event.CLICK_UP, () => {
      this.changeVolume(-VOLUME_STEP);
    });
    
    this.updateVolumeArc();
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