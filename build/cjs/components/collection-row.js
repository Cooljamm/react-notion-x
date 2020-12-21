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
var React = __importStar(require("react"));
var collection_column_title_1 = require("./collection-column-title");
var property_1 = require("./property");
var context_1 = require("../context");
var CollectionRow = function (_a) {
    var _b, _c, _d;
    var block = _a.block;
    var recordMap = context_1.useNotionContext().recordMap;
    var collectionId = block.parent_id;
    var collection = (_b = recordMap.collection[collectionId]) === null || _b === void 0 ? void 0 : _b.value;
    var schemas = collection === null || collection === void 0 ? void 0 : collection.schema;
    if (!collection || !schemas) {
        return null;
    }
    var propertyIds = Object.keys(schemas).filter(function (id) { return id !== 'title'; });
    if ((_c = collection.format) === null || _c === void 0 ? void 0 : _c.collection_page_properties) {
        // sort properties based on collectino page order
        var idToIndex_1 = (_d = collection.format) === null || _d === void 0 ? void 0 : _d.collection_page_properties.reduce(function (acc, p, i) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[p.property] = i, _a)));
        }, {});
        propertyIds.sort(function (a, b) { return idToIndex_1[a] - idToIndex_1[b]; });
    }
    else {
        // default to sorting properties alphabetically based on name
        propertyIds.sort(function (a, b) { return schemas[a].name.localeCompare(schemas[b].name); });
    }
    return (React.createElement("div", { className: 'notion-collection-row' },
        React.createElement("div", { className: 'notion-collection-row-body' }, propertyIds.map(function (id) {
            var _a;
            var schema = schemas[id];
            return (React.createElement("div", { className: 'notion-collection-row-property', key: id },
                React.createElement(collection_column_title_1.CollectionColumnTitle, { schema: schema }),
                React.createElement("div", { className: 'notion-collection-row-value' },
                    React.createElement(property_1.Property, { schema: schema, data: (_a = block.properties) === null || _a === void 0 ? void 0 : _a[id], block: block, collection: collection }))));
        }))));
};
exports["default"] = CollectionRow;
//# sourceMappingURL=collection-row.js.map