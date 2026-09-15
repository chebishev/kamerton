import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH } = getDeviceInfo();
const infoPosition = DEVICE_WIDTH / 2 - 20

export const BACKGROUND_PRESSED = "pressed.png"
export const BACKGROUND = {
  src: "static.png",
  x: px(-24),
  y: px(-22),
};

export const INFO_ICON = {
  src: "info.png",
  x: px(infoPosition),
  y: px(6),
}