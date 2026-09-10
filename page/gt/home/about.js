import { createWidget, widget } from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { APP_INFO, CREATOR_INFO, QRCODE } from "zosLoader:./about.page.[pf].layout.js";

const logger = Logger.getLogger("kamerton");

Page({
  onInit() {
    logger.debug("page onInit invoked");
  },

  build() {
    createWidget(widget.TEXT, APP_INFO)
    createWidget(widget.TEXT, CREATOR_INFO)
    createWidget(widget.QRCODE, QRCODE)
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});