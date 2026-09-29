import { setStatusBarVisible } from "@zos/ui";
import { px } from "@zos/utils";

import {
  DEVICE_WIDTH,
  BACKGROUND_PRESSED,
  BACKGROUND as BASE_BACKGROUND,
  INFO_ICON as BASE_INFO_ICON,
} from "./index.layout";

setStatusBarVisible(false);

export { DEVICE_WIDTH, BACKGROUND_PRESSED };

export const BACKGROUND = {
  ...BASE_BACKGROUND,
  x: px(10),
  y: px(10),
};

export const INFO_ICON = {
  ...BASE_INFO_ICON,
  x: px(DEVICE_WIDTH - 40),
};