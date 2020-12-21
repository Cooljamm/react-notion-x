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
exports.__esModule = true;
exports.GoogleDrive = void 0;
var React = __importStar(require("react"));
var date_fns_1 = require("date-fns");
var context_1 = require("../context");
var graceful_image_1 = require("./graceful-image");
exports.GoogleDrive = function (_a) {
    var _b;
    var block = _a.block;
    var _c = context_1.useNotionContext(), components = _c.components, mapImageUrl = _c.mapImageUrl;
    var properties = (_b = block.format) === null || _b === void 0 ? void 0 : _b.drive_properties;
    if (!properties)
        return null;
    var domain;
    try {
        var url = new URL(properties.url);
        domain = url.hostname;
    }
    catch (err) {
        // ignore invalid urls for robustness
    }
    return (React.createElement("div", { className: 'notion-google-drive' },
        React.createElement(components.link, { className: 'notion-google-drive-link', href: properties.url, target: '_blank', rel: 'noopener noreferrer' },
            React.createElement("div", { className: 'notion-google-drive-preview' },
                React.createElement(graceful_image_1.GracefulImage, { src: mapImageUrl(properties.thumbnail, block), alt: properties.title || 'Google Drive Document', loading: 'lazy' })),
            React.createElement("div", { className: 'notion-google-drive-body' },
                properties.title && (React.createElement("div", { className: 'notion-google-drive-body-title' }, properties.title)),
                properties.modified_time && (React.createElement("div", { className: 'notion-google-drive-body-modified-time' },
                    "Last modified",
                    ' ',
                    properties.user_name ? "by " + properties.user_name + " " : '',
                    date_fns_1.formatDistance(new Date(properties.modified_time), new Date()),
                    ' ',
                    "ago")),
                properties.icon && domain && (React.createElement("div", { className: 'notion-google-drive-body-source' },
                    properties.icon && (React.createElement("div", { className: 'notion-google-drive-body-source-icon', style: {
                            backgroundImage: "url(" + properties.icon + ")"
                        } })),
                    domain && (React.createElement("div", { className: 'notion-google-drive-body-source-domain' }, domain))))))));
};
//# sourceMappingURL=google-drive.js.map