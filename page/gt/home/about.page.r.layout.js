import { getText } from "@zos/i18n"
import { align, text_style } from "@zos/ui"

export const APP_INFO = {
    x: 96,
    y: 120,
    w: 288,
    h: 46,
    color: 0xffffff,
    text_size: 22,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V,
    text_style: text_style.WRAP,
    text: `${getText("appName")}\n${getText("version")}`
};

export const CREATOR_INFO = {
    x: 96,
    y: 200,
    w: 288,
    h: 46,
    color: 0xffffff,
    text_size: 19,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V,
    text_style: text_style.WRAP,
    text: getText("creator")
};