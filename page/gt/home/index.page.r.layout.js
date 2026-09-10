import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();
const infoPosition = DEVICE_WIDTH / 2 - 20

export const BACKGROUND = {
  src: "kamerton524.png",
  x: px(-21),
  y: px(-21),
};

export const INFO_ICON = {
  src: "info.png",
  x: px(infoPosition),
  y: px(10),
}