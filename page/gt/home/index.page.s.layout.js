import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();
const infoPosition = DEVICE_HEIGHT - 20;

export const BACKGROUND = {
  src: "kamerton.png",
  x: px(0),
  y: px(0),
};

export const INFO_ICON = {
  src: "info.png",
  x: px(infoPosition),
  y: px(20),
};