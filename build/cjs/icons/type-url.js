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
function SvgTypeUrl(props) {
    return (React.createElement("svg", __assign({ viewBox: '0 0 14 14' }, props),
        React.createElement("path", { d: 'M3.733 3.867h3.734c1.03 0 1.866.837 1.866 1.866 0 1.03-.837 1.867-1.866 1.867h-.934a.934.934 0 000 1.867h.934a3.734 3.734 0 000-7.467H3.733A3.73 3.73 0 001.89 8.977a4.637 4.637 0 01.314-2.18 1.854 1.854 0 01-.336-1.064c0-1.03.837-1.866 1.866-1.866zm8.377 1.422a4.6 4.6 0 01-.316 2.176c.212.303.34.67.34 1.068 0 1.03-.838 1.867-1.867 1.867H6.533a1.869 1.869 0 01-1.866-1.867c0-1.03.837-1.866 1.866-1.866h.934a.934.934 0 000-1.867h-.934a3.733 3.733 0 000 7.467h3.734a3.73 3.73 0 001.843-6.978z' })));
}
exports["default"] = SvgTypeUrl;
//# sourceMappingURL=type-url.js.map