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
function SvgTypeFile(props) {
    return (React.createElement("svg", __assign({ viewBox: '0 0 14 14' }, props),
        React.createElement("path", { d: 'M5.946 14a4.975 4.975 0 01-3.497-1.415A4.731 4.731 0 011 9.174c0-1.288.515-2.5 1.449-3.41L7.456.986c1.345-1.313 3.722-1.318 5.08.007a3.453 3.453 0 010 4.961L8.03 10.241c-.867.847-2.293.848-3.17-.006a2.158 2.158 0 010-3.102l1.744-1.701 1.272 1.24-1.744 1.701a.43.43 0 000 .621c.23.223.405.223.636 0l4.503-4.288a1.723 1.723 0 00-.007-2.473c-.68-.663-1.864-.663-2.543 0L3.713 7.011a3.006 3.006 0 00-.915 2.163c0 .82.328 1.591.922 2.17 1.19 1.162 3.262 1.162 4.451 0l2.248-2.192 1.272 1.24-2.248 2.193A4.978 4.978 0 015.946 14z' })));
}
exports["default"] = SvgTypeFile;
//# sourceMappingURL=type-file.js.map