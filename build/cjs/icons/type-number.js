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
function SvgTypeNumber(props) {
    return (React.createElement("svg", __assign({ viewBox: '0 0 14 14' }, props),
        React.createElement("path", { d: 'M4.462 0c-.595 0-1.078.482-1.078 1.078v2.306H1.078a1.078 1.078 0 100 2.155h2.306v2.922H1.078a1.078 1.078 0 100 2.155h2.306v2.306a1.078 1.078 0 002.155 0v-2.306H8.46v2.306a1.078 1.078 0 002.156 0v-2.306h2.306a1.078 1.078 0 100-2.155h-2.306V5.539h2.306a1.078 1.078 0 100-2.155h-2.306V1.078a1.078 1.078 0 00-2.156 0v2.306H5.54V1.078C5.54.482 5.056 0 4.461 0zm1.077 8.46V5.54H8.46v2.92H5.54z' })));
}
exports["default"] = SvgTypeNumber;
//# sourceMappingURL=type-number.js.map