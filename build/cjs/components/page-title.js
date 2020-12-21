"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.PageTitle = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var context_1 = require("../context");
var text_1 = require("./text");
var page_icon_1 = require("./page-icon");
exports.PageTitle = function (_a) {
    var _b, _c, _d;
    var block = _a.block, className = _a.className, rest = __rest(_a, ["block", "className"]);
    var recordMap = context_1.useNotionContext().recordMap;
    if (!block)
        return null;
    // TODO: replace with getBlockTitle
    if (block.type === 'collection_view_page' ||
        block.type === 'collection_view') {
        var collection = (_b = recordMap.collection[block.collection_id]) === null || _b === void 0 ? void 0 : _b.value;
        if (collection) {
            block.properties = __assign(__assign({}, block.properties), { title: collection.name });
            block.format = __assign(__assign({}, block.format), { page_icon: collection.icon });
        }
    }
    if (!((_c = block.properties) === null || _c === void 0 ? void 0 : _c.title)) {
        return null;
    }
    return (React.createElement("span", __assign({ className: utils_1.cs('notion-page-title', className) }, rest),
        React.createElement(page_icon_1.PageIcon, { block: block, className: 'notion-page-title-icon' }),
        React.createElement("span", { className: 'notion-page-title-text' },
            React.createElement(text_1.Text, { value: (_d = block.properties) === null || _d === void 0 ? void 0 : _d.title, block: block }))));
};
//# sourceMappingURL=page-title.js.map