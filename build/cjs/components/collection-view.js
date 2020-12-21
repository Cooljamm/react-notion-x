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
exports.__esModule = true;
exports.CollectionView = void 0;
var React = __importStar(require("react"));
var collection_view_table_1 = require("./collection-view-table");
var collection_view_gallery_1 = require("./collection-view-gallery");
var collection_view_list_1 = require("./collection-view-list");
var collection_view_board_1 = require("./collection-view-board");
exports.CollectionView = function (props) {
    var collectionView = props.collectionView;
    switch (collectionView.type) {
        case 'table':
            return React.createElement(collection_view_table_1.CollectionViewTable, __assign({}, props));
        case 'gallery':
            return React.createElement(collection_view_gallery_1.CollectionViewGallery, __assign({}, props));
        case 'list':
            return React.createElement(collection_view_list_1.CollectionViewList, __assign({}, props));
        case 'board':
            return React.createElement(collection_view_board_1.CollectionViewBoard, __assign({}, props));
        default:
            console.warn('unsupported collection view', collectionView);
            return null;
    }
};
//# sourceMappingURL=collection-view.js.map