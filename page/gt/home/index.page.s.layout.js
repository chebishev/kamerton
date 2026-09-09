import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const BACKGROUND = {
  src: "kamerton.png",
  x: 0,
  y: 0,
};

export const INFO_ICON = {
  src: "info.png",
  x: DEVICE_WIDTH - 20,
  y: px(20),
};