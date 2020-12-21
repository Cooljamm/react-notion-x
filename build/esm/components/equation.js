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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import dynamic from 'next/dynamic';
import { cs } from '../utils';
var DynamicTex = dynamic(function () { return import('@matejmazur/react-katex'); });
var katexSettings = {
    throwOnError: false,
    strict: false
};
export var Equation = function (_a) {
    var math = _a.math, rest = __rest(_a, ["math"]);
    return (React.createElement("span", { role: 'button', tabIndex: 0, className: cs('notion-equation', rest.block ? 'notion-equation-block' : 'notion-equation-inline') },
        React.createElement(DynamicTex, __assign({ math: math, settings: katexSettings }, rest))));
};
//# sourceMappingURL=equation.js.map