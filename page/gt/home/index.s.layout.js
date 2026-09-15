import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";
import { setStatusBarVisible } from "@zos/ui";

// Hide the status bar
setStatusBarVisible(false)

export const { width: DEVICE_WIDTH } = getDeviceInfo();
// Get the center of the screen
const infoPosition = DEVICE_WIDTH - 20;

export const BACKGROUND_PRESSED = "pressed.png"
export const BACKGROUND = {
  src: "static.png",
  x: px(10),
  y: px(10),
};

export const INFO_ICON = {
  src: "info.png",
  x: px(infoPosition),
  y: px(6),
};