import { setStatusBarVisible } from "@zos/ui";
import { px } from "@zos/utils";

import {
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
  BACKGROUND_PRESSED,
  BACKGROUND as BASE_BACKGROUND,
  INFO_ICON as BASE_INFO_ICON,
  VOLUME_GROUP as BASE_VOLUME_GROUP,
  VOLUME_UP as BASE_VOLUME_UP,
  VOLUME_VALUE as BASE_VOLUME_VALUE,
  VOLUME_DOWN as BASE_VOLUME_DOWN,
} from "./index.layout";

setStatusBarVisible(false);

export { BACKGROUND_PRESSED };

const volumeControlsX = px(200);

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
  x: DEVICE_WIDTH / 2.34,
  y: DEVICE_HEIGHT / 1.31
}
export const VOLUME_UP = {
  ...BASE_VOLUME_UP,
  x: px(volumeControlsX)
}

export const VOLUME_VALUE = {
  ...BASE_VOLUME_VALUE,
  y: px(44)
}

export const VOLUME_DOWN = {
  ...BASE_VOLUME_DOWN,
  x: px(-volumeControlsX)
}