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
var React = __importStar(require("react"));
var prismjs_1 = require("prismjs");
require("prismjs/components/prism-jsx");
var Code = function (_a) {
    var code = _a.code, _b = _a.language, language = _b === void 0 ? 'javascript' : _b;
    var languageL = language.toLowerCase();
    var prismLanguage = prismjs_1.languages[languageL] || prismjs_1.languages.javascript;
    return (React.createElement("pre", { className: 'notion-code' },
        React.createElement("code", { className: "language-" + languageL, dangerouslySetInnerHTML: {
                __html: prismjs_1.highlight(code, prismLanguage, language)
            } })));
};
exports["default"] = Code;
//# sourceMappingURL=code.js.map