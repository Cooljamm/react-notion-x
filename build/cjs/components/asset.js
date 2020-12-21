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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Asset = void 0;
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var utils_1 = require("../utils");
var context_1 = require("../context");
var lazy_image_1 = require("./lazy-image");
var isServer = typeof window === 'undefined';
var DynamicTweet = dynamic_1["default"](function () {
    return Promise.resolve().then(function () { return __importStar(require('react-tweet-embed')); }).then(function (res) {
        // console.log('DynamicTweet', res)
        return res["default"];
    });
});
var DynamicPdfDocument = dynamic_1["default"](function () {
    return Promise.resolve().then(function () { return __importStar(require('react-pdf')); }).then(function (pdf) { return pdf.Document; });
});
var DynamicPdfPage = dynamic_1["default"](function () {
    return Promise.resolve().then(function () { return __importStar(require('react-pdf')); }).then(function (pdf) { return pdf.Page; });
});
var types = ['video', 'image', 'embed', 'figma', 'maps', 'tweet', 'pdf'];
exports.Asset = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var block = _a.block;
    var _j = context_1.useNotionContext(), recordMap = _j.recordMap, mapImageUrl = _j.mapImageUrl;
    if (!block || !types.includes(block.type)) {
        return null;
    }
    var style = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        maxWidth: '100%'
    };
    var assetStyle = {};
    if (block.format) {
        var _k = block.format, block_aspect_ratio = _k.block_aspect_ratio, block_height = _k.block_height, block_width = _k.block_width, block_full_width = _k.block_full_width, block_page_width = _k.block_page_width, block_preserve_scale = _k.block_preserve_scale;
        if (block_full_width || block_page_width) {
            if (block_full_width) {
                style.width = '100vw';
            }
            else {
                style.width = '100%';
            }
            if (block_aspect_ratio && block.type !== 'image') {
                style.paddingBottom = block_aspect_ratio * 100 + "%";
            }
            else if (block_height) {
                style.height = block_height;
            }
        }
        else {
            if (block_width) {
                style.width = block_width;
            }
            if (!block_preserve_scale) {
                if (block_height) {
                    style.height = block_height;
                }
            }
        }
        if (block_preserve_scale || block.type === 'image') {
            assetStyle.objectFit = 'cover';
        }
    }
    var source = (_d = (_c = (_b = block.properties) === null || _b === void 0 ? void 0 : _b.source) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d[0];
    var content = null;
    if (block.type === 'tweet') {
        var src = source;
        if (!src)
            return null;
        var id = src.split('?')[0].split('/').pop();
        if (!id)
            return null;
        content = (React.createElement("div", { style: __assign(__assign({}, assetStyle), { maxWidth: 420, width: '100%', marginLeft: 'auto', marginRight: 'auto' }) },
            React.createElement(DynamicTweet, { id: id })));
    }
    else if (block.type === 'pdf') {
        style.overflow = 'auto';
        style.padding = '8px 16px';
        style.background = 'rgb(226, 226, 226)';
        if (!isServer) {
            var signedUrl = (_e = recordMap.signed_urls) === null || _e === void 0 ? void 0 : _e[block.id];
            if (!signedUrl)
                return null;
            console.log('pdf', block, signedUrl);
            content = (React.createElement(DynamicPdfDocument, { file: signedUrl },
                React.createElement(DynamicPdfPage, { pageNumber: 1 })));
        }
    }
    else if (block.type === 'embed' ||
        block.type === 'video' ||
        block.type === 'figma' ||
        block.type === 'maps') {
        var src = (_g = (_f = block.format) === null || _f === void 0 ? void 0 : _f.display_source) !== null && _g !== void 0 ? _g : source;
        if (src) {
            content = (React.createElement("iframe", { className: 'notion-asset-object-fit', style: assetStyle, src: src, title: "iframe " + block.type, frameBorder: '0', 
                // TODO: is this sandbox necessary?
                // sandbox='allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin'
                allowFullScreen: true, 
                // this is important for perf but react's TS definitions don't seem to like it
                loading: 'lazy' }));
        }
    }
    else if (block.type === 'image') {
        // console.log('image', block)
        var src = mapImageUrl(source, block);
        var caption = utils_1.getTextContent((_h = block.properties) === null || _h === void 0 ? void 0 : _h.caption);
        var alt = caption || 'notion image';
        content = (React.createElement(lazy_image_1.LazyImage, { src: src, alt: alt, style: assetStyle, zoomable: true, height: style.height }));
    }
    return React.createElement("div", { style: style }, content);
};
//# sourceMappingURL=asset.js.map