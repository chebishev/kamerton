import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";
import { setStatusBarVisible } from "@zos/ui";

// Hide the status bar
setStatusBarVisible(false)

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();
// Get the center of the screen
const infoPosition = DEVICE_HEIGHT / 2 - 5;

export const BACKGROUND = {
  src: "kamerton524.png",
  x: px(-20),
  y: px(15),
};

export const INFO_ICON = {
  src: "info.png",
  x: px(infoPosition),
  y: px(40),
};