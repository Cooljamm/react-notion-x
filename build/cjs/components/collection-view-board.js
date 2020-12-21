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
exports.CollectionViewBoard = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var collection_card_1 = require("./collection-card");
var empty_icon_1 = require("../icons/empty-icon");
var property_1 = require("./property");
var context_1 = require("../context");
exports.CollectionViewBoard = function (_a) {
    var collection = _a.collection, collectionView = _a.collectionView, collectionData = _a.collectionData, padding = _a.padding;
    var recordMap = context_1.useNotionContext().recordMap;
    var _b = collectionView.format || {}, _c = _b.board_cover, board_cover = _c === void 0 ? { type: 'none' } : _c, _d = _b.board_cover_size, board_cover_size = _d === void 0 ? 'medium' : _d, _e = _b.board_cover_aspect, board_cover_aspect = _e === void 0 ? 'cover' : _e;
    console.log('board', { collection: collection, collectionView: collectionView, collectionData: collectionData });
    return (React.createElement("div", { className: 'notion-board' },
        React.createElement("div", { className: utils_1.cs('notion-board-view', "notion-board-view-size-" + board_cover_size), style: {
                paddingLeft: padding
            } },
            React.createElement("div", { className: 'notion-board-header' },
                React.createElement("div", { className: 'notion-board-header-inner' }, collectionView.format.board_groups2.map(function (p, index) {
                    var _a, _b;
                    var group = collectionData.groupResults[index];
                    var schema = collection.schema[p.property];
                    if (!group || !schema || p.hidden) {
                        return null;
                    }
                    return (React.createElement("div", { className: 'notion-board-th', key: index },
                        React.createElement("div", { className: 'notion-board-th-body' },
                            ((_a = group.value) === null || _a === void 0 ? void 0 : _a.value) ? (React.createElement(property_1.Property, { schema: schema, data: [[(_b = group.value) === null || _b === void 0 ? void 0 : _b.value]], collection: collection })) : (React.createElement("span", null,
                                React.createElement(empty_icon_1.EmptyIcon, { className: 'notion-board-th-empty' }),
                                " No Select")),
                            React.createElement("span", { className: 'notion-board-th-count' }, group.total))));
                }))),
            React.createElement("div", { className: 'notion-board-header-placeholder' }),
            React.createElement("div", { className: 'notion-board-body' }, collectionView.format.board_groups2.map(function (p, index) {
                var group = collectionData.groupResults[index];
                var schema = collection.schema[p.property];
                if (!group || !schema || p.hidden) {
                    return null;
                }
                return (React.createElement("div", { className: 'notion-board-group', key: index }, group.blockIds.map(function (blockId) {
                    var _a, _b;
                    var block = (_a = recordMap.block[blockId]) === null || _a === void 0 ? void 0 : _a.value;
                    if (!block)
                        return null;
                    return (React.createElement(collection_card_1.CollectionCard, { className: 'notion-board-group-card', collection: collection, block: block, cover: board_cover, coverSize: board_cover_size, coverAspect: board_cover_aspect, properties: (_b = collectionView.format) === null || _b === void 0 ? void 0 : _b.board_properties, key: blockId }));
                })));
            })))));
};
//# sourceMappingURL=collection-view-board.js.map