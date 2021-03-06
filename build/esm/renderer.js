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
import React from 'react';
import mediumZoom from 'medium-zoom';
import { Block } from './block';
import { useNotionContext, NotionContextProvider } from './context';
export var NotionRenderer = function (_a) {
    var components = _a.components, recordMap = _a.recordMap, mapPageUrl = _a.mapPageUrl, mapImageUrl = _a.mapImageUrl, fullPage = _a.fullPage, rootPageId = _a.rootPageId, darkMode = _a.darkMode, previewImages = _a.previewImages, rest = __rest(_a, ["components", "recordMap", "mapPageUrl", "mapImageUrl", "fullPage", "rootPageId", "darkMode", "previewImages"]);
    var zoom = typeof window !== 'undefined' &&
        mediumZoom({
            container: '.notion',
            background: 'rgba(0, 0, 0, 0.8)',
            margin: getMediumZoomMargin()
        });
    return (React.createElement(NotionContextProvider, { components: components, recordMap: recordMap, mapPageUrl: mapPageUrl, mapImageUrl: mapImageUrl, fullPage: fullPage, rootPageId: rootPageId, darkMode: darkMode, previewImages: previewImages, zoom: zoom },
        React.createElement(NotionBlockRenderer, __assign({}, rest))));
};
var NotionBlockRenderer = function (_a) {
    var _b, _c;
    var _d = _a.level, level = _d === void 0 ? 0 : _d, blockId = _a.blockId, props = __rest(_a, ["level", "blockId"]);
    var recordMap = useNotionContext().recordMap;
    var id = blockId || Object.keys(recordMap.block)[0];
    var block = (_b = recordMap.block[id]) === null || _b === void 0 ? void 0 : _b.value;
    if (!block) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('missing block', blockId);
        }
        return null;
    }
    return (React.createElement(Block, __assign({ key: id, level: level, block: block }, props), (_c = block === null || block === void 0 ? void 0 : block.content) === null || _c === void 0 ? void 0 : _c.map(function (contentBlockId) { return (React.createElement(NotionBlockRenderer, __assign({ key: contentBlockId, blockId: contentBlockId, level: level + 1 }, props))); })));
};
function getMediumZoomMargin() {
    var width = window.innerWidth;
    if (width < 500) {
        return 8;
    }
    else if (width < 800) {
        return 20;
    }
    else if (width < 1280) {
        return 30;
    }
    else if (width < 1600) {
        return 40;
    }
    else if (width < 1920) {
        return 48;
    }
    else {
        return 72;
    }
}
//# sourceMappingURL=renderer.js.map