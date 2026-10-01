import { getDeviceInfo } from "@zos/device";
import { align } from "@zos/ui";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();
const CONTROL_COLOR = 0xffffff;
const VALUE_COLOR = 0xb7c3cf;

// get the center of the screen and half of the info icon width center it as well
const infoPosition = DEVICE_WIDTH / 2 - 20;
// automaticaly set equal x position for + and -
const volumeControlsX = px(100);
// reuse values for w and h
const W = 210;
const H = 76;

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

export const VOLUME_GROUP = {
  x: px(DEVICE_WIDTH / 2 - H / 2),
  y: px(DEVICE_HEIGHT / 1.4),
  w: px(W),
  h: px(H),
};

export const VOLUME_UP = {
  x: px(volumeControlsX),
  y: px(40),
  w: px(75),
  h: px(65),
  text: "+",
  text_size: px(44),
  color: CONTROL_COLOR,
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
};

export const VOLUME_VALUE = {
  x: px(0),
  y: px(72),
  w: px(75),
  h: px(55),
  text: "25%",
  text_size: px(24),
  color: VALUE_COLOR,
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
};

export const VOLUME_DOWN = {
  ...VOLUME_UP,
  x: px(-volumeControlsX),
  text: "−",
};