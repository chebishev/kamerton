import { createWidget, widget } from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { APP_INFO, CREATOR_INFO, QRCODE } from "zosLoader:./about.[pf].layout.js";

const logger = Logger.getLogger("kamerton");

Page({
  onInit() {
    logger.info("about page onInit invoked");
  },

  build() {
    // Show name and version
    createWidget(widget.TEXT, APP_INFO)
    // Show app author
    createWidget(widget.TEXT, CREATOR_INFO)
    // Show QR Code that leads to Author's portfolio
    createWidget(widget.QRCODE, QRCODE)
  },

  onDestroy() {
    logger.info("about page onDestroy invoked");
  },
});