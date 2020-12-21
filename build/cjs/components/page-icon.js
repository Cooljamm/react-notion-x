"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PageIcon = void 0;
var React = __importStar(require("react"));
var is_url_superb_1 = __importDefault(require("is-url-superb"));
var notion_utils_1 = require("notion-utils");
var utils_1 = require("../utils");
var default_page_icon_1 = require("../icons/default-page-icon");
var context_1 = require("../context");
var graceful_image_1 = require("./graceful-image");
var isIconBlock = function (value) {
    return (value.type === 'page' ||
        value.type === 'callout' ||
        value.type === 'collection_view' ||
        value.type === 'collection_view_page');
};
exports.PageIcon = function (_a) {
    var block = _a.block, className = _a.className, _b = _a.large, large = _b === void 0 ? false : _b;
    var _c = context_1.useNotionContext(), mapImageUrl = _c.mapImageUrl, recordMap = _c.recordMap;
    if (!isIconBlock(block)) {
        return null;
    }
    var icon = notion_utils_1.getBlockIcon(block, recordMap);
    var title = notion_utils_1.getBlockTitle(block, recordMap);
    if (icon && is_url_superb_1["default"](icon)) {
        var url = mapImageUrl(icon, block);
        return (React.createElement(graceful_image_1.GracefulImage, { className: utils_1.cs(className, large ? 'notion-page-icon-cover' : 'notion-page-icon'), src: url, alt: title ? title : 'Icon', loading: 'lazy' }));
    }
    else {
        var iconValue = icon === null || icon === void 0 ? void 0 : icon.trim();
        if (!iconValue) {
            return (React.createElement(default_page_icon_1.DefaultPageIcon, { className: utils_1.cs(className, large ? 'notion-page-icon-cover' : 'notion-page-icon'), alt: title ? title : 'Page' }));
        }
        return (React.createElement("span", { className: utils_1.cs(className, large ? 'notion-page-icon-cover' : 'notion-page-icon'), role: 'img', "aria-label": icon }, iconValue));
    }
};
//# sourceMappingURL=page-icon.js.map