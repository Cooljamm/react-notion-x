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
exports.CollectionViewList = void 0;
var React = __importStar(require("react"));
var property_1 = require("./property");
var context_1 = require("../context");
exports.CollectionViewList = function (_a) {
    var collection = _a.collection, collectionView = _a.collectionView, collectionData = _a.collectionData;
    var _b = context_1.useNotionContext(), components = _b.components, recordMap = _b.recordMap, mapPageUrl = _b.mapPageUrl;
    console.log('list', { collection: collection, collectionView: collectionView, collectionData: collectionData });
    return (React.createElement("div", { className: 'notion-list-collection' },
        React.createElement("div", { className: 'notion-list-view' },
            React.createElement("div", { className: 'notion-list-body' }, collectionData.blockIds.map(function (blockId) {
                var _a, _b, _c, _d;
                var block = (_a = recordMap.block[blockId]) === null || _a === void 0 ? void 0 : _a.value;
                var titleSchema = collection.schema.title;
                var titleData = (_b = block === null || block === void 0 ? void 0 : block.properties) === null || _b === void 0 ? void 0 : _b.title;
                return (React.createElement(components.pageLink, { className: 'notion-list-item notion-page-link', href: mapPageUrl(block.id), key: blockId },
                    React.createElement("div", { className: 'notion-list-item-title' },
                        React.createElement(property_1.Property, { schema: titleSchema, data: titleData, block: block, collection: collection })),
                    React.createElement("div", { className: 'notion-list-item-body' }, (_d = (_c = collectionView.format) === null || _c === void 0 ? void 0 : _c.list_properties) === null || _d === void 0 ? void 0 : _d.filter(function (p) { return p.visible; }).map(function (p) {
                        var _a;
                        var schema = collection.schema[p.property];
                        var data = block && ((_a = block.properties) === null || _a === void 0 ? void 0 : _a[p.property]);
                        // console.log('list item body', p, schema, data)
                        if (!schema) {
                            return null;
                        }
                        return (React.createElement("div", { className: 'notion-list-item-property', key: p.property },
                            React.createElement(property_1.Property, { schema: schema, data: data, block: block, collection: collection })));
                    }))));
            })))));
};
//# sourceMappingURL=collection-view-list.js.map