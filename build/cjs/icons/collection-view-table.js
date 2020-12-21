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
function SvgCollectionViewTable(props) {
    return (React.createElement("svg", __assign({ viewBox: '0 0 14 14' }, props),
        React.createElement("path", { d: 'M2 0h10a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm3.75 5.67v2.66h6.75V5.67H5.75zm0 4.17v2.66h5.75a1 1 0 001-1V9.84H5.75zM1.5 5.67v2.66h2.75V5.67H1.5zm0 4.17v1.66a1 1 0 001 1h1.75V9.84H1.5zm1-8.34a1 1 0 00-1 1v1.66h2.75V1.5H2.5zm3.25 0v2.66h6.75V2.5a1 1 0 00-1-1H5.75z' })));
}
exports["default"] = SvgCollectionViewTable;
//# sourceMappingURL=collection-view-table.js.map