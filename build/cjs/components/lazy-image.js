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
exports.LazyImage = void 0;
var React = __importStar(require("react"));
var react_lazy_images_1 = require("react-lazy-images");
var context_1 = require("../context");
var utils_1 = require("../utils");
/**
 * Progressive, lazy images modeled after Medium's LQIP technique.
 */
exports.LazyImage = function (_a) {
    var _b, _c;
    var src = _a.src, alt = _a.alt, className = _a.className, style = _a.style, _d = _a.zoomable, zoomable = _d === void 0 ? false : _d, height = _a.height, rest = __rest(_a, ["src", "alt", "className", "style", "zoomable", "height"]);
    var _e = context_1.useNotionContext(), recordMap = _e.recordMap, zoom = _e.zoom, previewImages = _e.previewImages;
    var zoomRef = React.useRef(zoom ? zoom.clone() : null);
    var previewImage = previewImages
        ? (_c = (_b = recordMap) === null || _b === void 0 ? void 0 : _b.preview_images) === null || _c === void 0 ? void 0 : _c[src] : null;
    function attachZoom(image) {
        if (zoomRef.current) {
            ;
            zoomRef.current.attach(image);
        }
    }
    var attachZoomRef = zoomable ? attachZoom : undefined;
    if (previewImage) {
        var aspectRatio_1 = previewImage.originalHeight / previewImage.originalWidth;
        return (React.createElement(react_lazy_images_1.LazyImageFull, __assign({ src: src }, rest), function (_a) {
            var imageState = _a.imageState, ref = _a.ref;
            var isLoaded = imageState === react_lazy_images_1.ImageState.LoadSuccess;
            var wrapperStyle = {
                width: '100%'
            };
            if (height) {
                wrapperStyle.height = height;
            }
            else {
                wrapperStyle.paddingBottom = aspectRatio_1 * 100 + "%";
            }
            return (React.createElement("div", { className: utils_1.cs('lazy-image-wrapper', isLoaded && 'lazy-image-loaded', className), style: wrapperStyle },
                React.createElement("img", { src: previewImage.dataURIBase64, alt: alt, ref: ref, className: 'lazy-image-preview', style: style, width: previewImage.originalWidth, height: previewImage.originalHeight, decoding: 'async' }),
                React.createElement("img", { src: src, alt: alt, ref: attachZoomRef, className: 'lazy-image-real', style: style, width: previewImage.originalWidth, height: previewImage.originalHeight, decoding: 'async' })));
        }));
    }
    else {
        // TODO: GracefulImage doesn't seem to support refs, but we'd like to prevent
        // invalid images from loading as error states
        return (React.createElement("img", __assign({ className: className, style: style, src: src, ref: attachZoomRef, loading: 'lazy', decoding: 'async' }, rest)));
    }
};
//# sourceMappingURL=lazy-image.js.map