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
import { defaultMapPageUrl, defaultMapImageUrl } from './utils';
var DefaultLink = function (props) { return (React.createElement("a", __assign({ target: '_blank', rel: 'noopener noreferrer' }, props))); };
var DefaultPageLink = function (props) { return React.createElement("a", __assign({}, props)); };
export var dummyLink = function (_a) {
    var href = _a.href, rel = _a.rel, target = _a.target, title = _a.title, rest = __rest(_a, ["href", "rel", "target", "title"]);
    return (React.createElement("span", __assign({}, rest)));
};
var defaultComponents = {
    link: DefaultLink,
    pageLink: DefaultPageLink
};
var defaultNotionContext = {
    recordMap: {
        block: {},
        collection: {},
        collection_view: {},
        collection_query: {},
        notion_user: {},
        signed_urls: {}
    },
    components: defaultComponents,
    mapPageUrl: defaultMapPageUrl(),
    mapImageUrl: defaultMapImageUrl,
    fullPage: false,
    darkMode: false,
    previewImages: false,
    zoom: null
};
var ctx = React.createContext(defaultNotionContext);
export var NotionContextProvider = function (_a) {
    var _b = _a.components, themeComponents = _b === void 0 ? {} : _b, children = _a.children, mapPageUrl = _a.mapPageUrl, mapImageUrl = _a.mapImageUrl, rootPageId = _a.rootPageId, rest = __rest(_a, ["components", "children", "mapPageUrl", "mapImageUrl", "rootPageId"]);
    return (React.createElement(ctx.Provider, { value: __assign(__assign(__assign({}, defaultNotionContext), rest), { rootPageId: rootPageId, mapPageUrl: mapPageUrl !== null && mapPageUrl !== void 0 ? mapPageUrl : defaultMapPageUrl(rootPageId), mapImageUrl: mapImageUrl !== null && mapImageUrl !== void 0 ? mapImageUrl : defaultMapImageUrl, components: __assign(__assign({}, defaultComponents), themeComponents) }) }, children));
};
export var useNotionContext = function () {
    return React.useContext(ctx);
};
//# sourceMappingURL=context.js.map