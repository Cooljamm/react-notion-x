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
exports.__esModule = true;
exports.CollectionCard = void 0;
var React = __importStar(require("react"));
var property_1 = require("./property");
var utils_1 = require("../utils");
var context_1 = require("../context");
var lazy_image_1 = require("./lazy-image");
exports.CollectionCard = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var collection = _a.collection, block = _a.block, cover = _a.cover, coverSize = _a.coverSize, coverAspect = _a.coverAspect, properties = _a.properties, className = _a.className, rest = __rest(_a, ["collection", "block", "cover", "coverSize", "coverAspect", "properties", "className"]);
    var ctx = context_1.useNotionContext();
    var components = ctx.components, recordMap = ctx.recordMap, mapPageUrl = ctx.mapPageUrl, mapImageUrl = ctx.mapImageUrl;
    var coverContent = null;
    var _q = (block.format || {}).page_cover_position, page_cover_position = _q === void 0 ? 0.5 : _q;
    var coverPosition = (1 - page_cover_position) * 100;
    if ((cover === null || cover === void 0 ? void 0 : cover.type) === 'page_content') {
        var contentBlockId = (_b = block.content) === null || _b === void 0 ? void 0 : _b.find(function (blockId) {
            var _a;
            var block = (_a = recordMap.block[blockId]) === null || _a === void 0 ? void 0 : _a.value;
            if ((block === null || block === void 0 ? void 0 : block.type) === 'image') {
                return true;
            }
        });
        if (contentBlockId) {
            var contentBlock = (_c = recordMap.block[contentBlockId]) === null || _c === void 0 ? void 0 : _c.value;
            var source = (_g = (_f = (_e = (_d = contentBlock.properties) === null || _d === void 0 ? void 0 : _d.source) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f[0]) !== null && _g !== void 0 ? _g : (_h = contentBlock.format) === null || _h === void 0 ? void 0 : _h.display_source;
            if (source) {
                var src = mapImageUrl(source, contentBlock);
                var caption = (_l = (_k = (_j = contentBlock.properties) === null || _j === void 0 ? void 0 : _j.caption) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l[0];
                coverContent = (React.createElement(lazy_image_1.LazyImage, { src: src, alt: caption || 'notion image', style: {
                        objectFit: coverAspect
                    } }));
            }
        }
        if (!coverContent) {
            coverContent = React.createElement("div", { className: 'notion-collection-card-cover-empty' });
        }
    }
    else if ((cover === null || cover === void 0 ? void 0 : cover.type) === 'page_cover') {
        var page_cover = (block.format || {}).page_cover;
        if (page_cover) {
            var coverPosition_1 = (1 - page_cover_position) * 100;
            coverContent = (React.createElement(lazy_image_1.LazyImage, { src: mapImageUrl(page_cover, block), alt: utils_1.getTextContent((_m = block.properties) === null || _m === void 0 ? void 0 : _m.title), style: {
                    objectFit: coverAspect,
                    objectPosition: "center " + coverPosition_1 + "%"
                } }));
        }
    }
    else if ((cover === null || cover === void 0 ? void 0 : cover.type) === 'property') {
        var property = cover.property;
        var schema = collection.schema[property];
        var data = (_o = block.properties) === null || _o === void 0 ? void 0 : _o[property];
        if (schema) {
            if (schema.type === 'file') {
                var files = data
                    .filter(function (v) { return v.length === 2; })
                    .map(function (f) { return f.flat().flat(); });
                var file = files[0];
                if (file) {
                    coverContent = (React.createElement("span", { className: "notion-property-" + schema.type },
                        React.createElement(lazy_image_1.LazyImage, { alt: file[0], src: mapImageUrl(file[2], block), style: {
                                objectFit: coverAspect,
                                objectPosition: "center " + coverPosition + "%"
                            } })));
                }
            }
            else {
                coverContent = React.createElement(property_1.Property, { schema: schema, data: data });
            }
        }
    }
    return (React.createElement(context_1.NotionContextProvider, __assign({}, ctx, { components: __assign(__assign({}, ctx.components), { 
            // Disable <a> tabs in all child components so we don't create invalid DOM
            // trees with stacked <a> tags.
            link: context_1.dummyLink, pageLink: context_1.dummyLink }) }),
        React.createElement(components.pageLink, __assign({ className: utils_1.cs('notion-collection-card', "notion-collection-card-size-" + coverSize, className), href: mapPageUrl(block.id) }, rest),
            (coverContent || (cover === null || cover === void 0 ? void 0 : cover.type) !== 'none') && (React.createElement("div", { className: 'notion-collection-card-cover' }, coverContent)),
            React.createElement("div", { className: 'notion-collection-card-body' },
                React.createElement("div", { className: 'notion-collection-card-property' },
                    React.createElement(property_1.Property, { schema: collection.schema.title, data: (_p = block === null || block === void 0 ? void 0 : block.properties) === null || _p === void 0 ? void 0 : _p.title, block: block, collection: collection })), properties === null || properties === void 0 ? void 0 :
                properties.filter(function (p) {
                    return p.visible &&
                        p.property !== 'title' &&
                        collection.schema[p.property];
                }).map(function (p) {
                    var schema = collection.schema[p.property];
                    var data = block.properties[p.property];
                    return (React.createElement("div", { className: 'notion-collection-card-property', key: p.property },
                        React.createElement(property_1.Property, { schema: schema, data: data, block: block, collection: collection, inline: true })));
                })))));
};
//# sourceMappingURL=collection-card.js.map