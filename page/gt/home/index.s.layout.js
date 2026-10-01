import { setStatusBarVisible } from "@zos/ui";
import { px } from "@zos/utils";

import {
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
  BACKGROUND_PRESSED,
  BACKGROUND as BASE_BACKGROUND,
  INFO_ICON as BASE_INFO_ICON,
  VOLUME_GROUP as BASE_VOLUME_GROUP,
  VOLUME_UP, VOLUME_VALUE, VOLUME_DOWN
} from "./index.layout";

setStatusBarVisible(false);

export { DEVICE_WIDTH, BACKGROUND_PRESSED, VOLUME_UP, VOLUME_VALUE, VOLUME_DOWN };

export const BACKGROUND = {
  ...BASE_BACKGROUND,
  x: px(10),
  y: px(10),
};

export const INFO_ICON = {
  ...BASE_INFO_ICON,
  x: px(220),
};

export const VOLUME_GROUP = {
  ...BASE_VOLUME_GROUP,
  x: DEVICE_WIDTH / 2.3,
  y: DEVICE_HEIGHT / 1.28
}