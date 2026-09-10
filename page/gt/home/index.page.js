import { createWidget, widget, event } from "@zos/ui";
import { push } from "@zos/router";
import { log as Logger } from "@zos/utils";
import { BACKGROUND, INFO_ICON } from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("kamerton");
Page({
  onInit() {
    logger.debug("page onInit invoked");
  },
  build() {
    logger.debug("page build invoked");
    // Show the background image
    createWidget(widget.IMG, BACKGROUND);

    // create and show clickable info image leading to about.js
    const info = createWidget(widget.IMG, INFO_ICON);
    info.addEventListener(event.CLICK_UP, () => {
      push({
        url: "page/gt/home/about",
      });
    });
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
