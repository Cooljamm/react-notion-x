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
exports.File = void 0;
var React = __importStar(require("react"));
var file_icon_1 = require("../icons/file-icon");
var context_1 = require("../context");
var text_1 = require("./text");
exports.File = function (_a) {
    var _b, _c;
    var block = _a.block;
    var _d = context_1.useNotionContext(), components = _d.components, recordMap = _d.recordMap;
    var signedUrl = recordMap.signed_urls[block.id];
    return (React.createElement("div", { className: 'notion-file' },
        React.createElement(components.link, { className: 'notion-file-link', href: signedUrl, target: '_blank', rel: 'noopener noreferrer' },
            React.createElement(file_icon_1.FileIcon, { className: 'notion-file-icon' }),
            React.createElement("div", { className: 'notion-file-info' },
                React.createElement("div", { className: 'notion-file-title' },
                    React.createElement(text_1.Text, { value: ((_b = block.properties) === null || _b === void 0 ? void 0 : _b.title) || [['File']], block: block })),
                ((_c = block.properties) === null || _c === void 0 ? void 0 : _c.size) && (React.createElement("div", { className: 'notion-file-size' },
                    React.createElement(text_1.Text, { value: block.properties.size, block: block })))))));
};
//# sourceMappingURL=file.js.map