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
exports.CollectionViewGallery = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var context_1 = require("../context");
var collection_card_1 = require("./collection-card");
exports.CollectionViewGallery = function (_a) {
    var collection = _a.collection, collectionView = _a.collectionView, collectionData = _a.collectionData;
    var recordMap = context_1.useNotionContext().recordMap;
    var _b = collectionView.format || {}, _c = _b.gallery_cover, gallery_cover = _c === void 0 ? { type: 'none' } : _c, _d = _b.gallery_cover_size, gallery_cover_size = _d === void 0 ? 'medium' : _d, _e = _b.gallery_cover_aspect, gallery_cover_aspect = _e === void 0 ? 'cover' : _e;
    console.log('gallery', { collection: collection, collectionView: collectionView, collectionData: collectionData });
    return (React.createElement("div", { className: 'notion-gallery' },
        React.createElement("div", { className: 'notion-gallery-view' },
            React.createElement("div", { className: utils_1.cs('notion-gallery-grid', "notion-gallery-grid-size-" + gallery_cover_size) }, collectionData.blockIds.map(function (blockId) {
                var _a, _b;
                var block = (_a = recordMap.block[blockId]) === null || _a === void 0 ? void 0 : _a.value;
                if (!block)
                    return null;
                return (React.createElement(collection_card_1.CollectionCard, { collection: collection, block: block, cover: gallery_cover, coverSize: gallery_cover_size, coverAspect: gallery_cover_aspect, properties: (_b = collectionView.format) === null || _b === void 0 ? void 0 : _b.gallery_properties, key: blockId }));
            })))));
};
//# sourceMappingURL=collection-view-gallery.js.map