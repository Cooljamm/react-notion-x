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
exports.Typeform = void 0;
var React = __importStar(require("react"));
exports.Typeform = function (_a) {
    var _b;
    var block = _a.block;
    var source = (_b = block.format) === null || _b === void 0 ? void 0 : _b.display_source;
    if (!source)
        return null;
    return (React.createElement("div", { style: { border: 0, outline: 0, width: '100%' } },
        React.createElement("iframe", { src: source, style: { width: '100%', height: '500px', border: 0 } })));
};
//# sourceMappingURL=typeform.js.map