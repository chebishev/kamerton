import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH } = getDeviceInfo();

// get the center of the screen and half of the info icon width center it as well
const infoPosition = DEVICE_WIDTH / 2 - 20;

export const BACKGROUND_PRESSED = "pressed.png";

export const BACKGROUND = {
  src: "static.png",
  x: px(-24),
  y: px(-22),
};

export const INFO_ICON = {
  src: "info.png",
  x: px(infoPosition),
  y: px(6),
};

export const VOLUME_UP_ICON = {
  src: "vol_up.png",
  x: px(DEVICE_WIDTH / 1.4),
  y: px(DEVICE_WIDTH / 1.5)
}

export const VOLUME_DOWN_ICON = {
  src: "vol_down.png",
  x: px(DEVICE_WIDTH / 1.4),
  y: px(DEVICE_WIDTH / 1.3)
}