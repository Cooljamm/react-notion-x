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
exports.CollectionColumnTitle = void 0;
var React = __importStar(require("react"));
var property_icon_1 = require("../icons/property-icon");
exports.CollectionColumnTitle = function (_a) {
    var schema = _a.schema;
    return (React.createElement("div", { className: 'notion-collection-column-title' },
        React.createElement(property_icon_1.PropertyIcon, { className: 'notion-collection-column-title-icon', type: schema.type }),
        React.createElement("div", { className: 'notion-collection-column-title-body' }, schema.name)));
};
//# sourceMappingURL=collection-column-title.js.map