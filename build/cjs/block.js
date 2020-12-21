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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Block = void 0;
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var asset_1 = require("./components/asset");
var checkbox_1 = require("./components/checkbox");
var page_icon_1 = require("./components/page-icon");
var page_title_1 = require("./components/page-title");
var link_icon_1 = require("./icons/link-icon");
var page_header_1 = require("./components/page-header");
var google_drive_1 = require("./components/google-drive");
var audio_1 = require("./components/audio");
var file_1 = require("./components/file");
var equation_1 = require("./components/equation");
var graceful_image_1 = require("./components/graceful-image");
var lazy_image_1 = require("./components/lazy-image");
var context_1 = require("./context");
var utils_1 = require("./utils");
var text_1 = require("./components/text");
var typeform_1 = require("./components/typeform");
// load heavier components asynchronously
var Code = dynamic_1["default"](function () { return Promise.resolve().then(function () { return __importStar(require('./components/code')); }); });
var Collection = dynamic_1["default"](function () { return Promise.resolve().then(function () { return __importStar(require('./components/collection')); }); });
var CollectionRow = dynamic_1["default"](function () { return Promise.resolve().then(function () { return __importStar(require('./components/collection-row')); }); });
exports.Block = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    var _4 = context_1.useNotionContext(), components = _4.components, fullPage = _4.fullPage, darkMode = _4.darkMode, recordMap = _4.recordMap, mapPageUrl = _4.mapPageUrl, mapImageUrl = _4.mapImageUrl;
    var block = props.block, children = props.children, level = props.level, className = props.className, bodyClassName = props.bodyClassName, footer = props.footer;
    if (!block) {
        return null;
    }
    // ugly hack to make viewing raw collection views work properly
    // e.g., 6d886ca87ab94c21a16e3b82b43a57fb
    if (level === 0 && block.type === 'collection_view') {
        ;
        block.type = 'collection_view_page';
    }
    switch (block.type) {
        case 'collection_view_page':
        // fallthrough
        case 'page':
            if (level === 0) {
                var _5 = block.format || {}, page_icon = _5.page_icon, page_cover = _5.page_cover, page_cover_position = _5.page_cover_position, page_full_width = _5.page_full_width, page_small_text = _5.page_small_text;
                if (fullPage) {
                    var properties = block.type === 'page'
                        ? block.properties
                        : {
                            title: (_b = (_a = recordMap.collection[block.collection_id]) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.name
                        };
                    var coverPosition = (1 - (page_cover_position || 0.5)) * 100;
                    return (React.createElement("div", { className: utils_1.cs('notion', 'notion-app', darkMode && 'notion-dark', className) },
                        React.createElement("div", { className: 'notion-cursor-listener' },
                            React.createElement("div", { className: 'notion-frame' },
                                React.createElement(page_header_1.PageHeader, null),
                                React.createElement("div", { className: 'notion-page-scroller' },
                                    page_cover && (React.createElement(lazy_image_1.LazyImage, { src: mapImageUrl(page_cover, block), alt: utils_1.getTextContent(properties === null || properties === void 0 ? void 0 : properties.title), className: 'notion-page-cover', style: {
                                            objectPosition: "center " + coverPosition + "%"
                                        } })),
                                    React.createElement("main", { className: utils_1.cs('notion-page', !page_cover && 'notion-page-offset', 'notion-full-page', page_full_width && 'notion-full-width', page_small_text && 'notion-small-text', bodyClassName) },
                                        page_icon && (React.createElement(page_icon_1.PageIcon, { className: page_cover ? 'notion-page-icon-offset' : undefined, block: block, large: true })),
                                        React.createElement("div", { className: 'notion-title' },
                                            React.createElement(text_1.Text, { value: properties === null || properties === void 0 ? void 0 : properties.title, block: block })),
                                        block.type === 'page' &&
                                            block.parent_table === 'collection' && (React.createElement(CollectionRow, { block: block })),
                                        block.type === 'collection_view_page' && (React.createElement(Collection, { block: block })),
                                        children),
                                    footer)))));
                }
                else {
                    return (React.createElement("main", { className: utils_1.cs('notion', darkMode && 'notion-dark', 'notion-page', page_full_width && 'notion-full-width', page_small_text && 'notion-small-text', className, bodyClassName) },
                        block.type === 'page' && block.parent_table === 'collection' && (React.createElement(CollectionRow, { block: block })),
                        block.type === 'collection_view_page' && (React.createElement(Collection, { block: block })),
                        children));
                }
            }
            else {
                var blockColor_1 = (_c = block.format) === null || _c === void 0 ? void 0 : _c.block_color;
                return (React.createElement(components.pageLink, { className: utils_1.cs('notion-page-link', blockColor_1 && "notion-" + blockColor_1), href: mapPageUrl(block.id) },
                    React.createElement(page_title_1.PageTitle, { block: block })));
            }
        case 'header':
        // fallthrough
        case 'sub_header':
        // fallthrough
        case 'sub_sub_header': {
            if (!block.properties)
                return null;
            var blockColor_2 = (_d = block.format) === null || _d === void 0 ? void 0 : _d.block_color;
            var id = utils_1.uuidToId(block.id);
            var title_1 = utils_1.getTextContent(block.properties.title) || "Notion Header " + id;
            return (React.createElement("h3", { className: utils_1.cs(block.type === 'header' && 'notion-h1', block.type === 'sub_header' && 'notion-h2', block.type === 'sub_sub_header' && 'notion-h3', blockColor_2 && "notion-" + blockColor_2), id: id },
                React.createElement(components.link, { className: 'notion-hash-link', href: "#" + id, title: title_1 },
                    React.createElement(link_icon_1.LinkIcon, null)),
                React.createElement(text_1.Text, { value: block.properties.title, block: block })));
        }
        case 'divider':
            return React.createElement("hr", { className: 'notion-hr' });
        case 'text':
            if (!block.properties) {
                return React.createElement("div", { className: 'notion-blank' }, "\u00A0");
            }
            var blockColor = (_e = block.format) === null || _e === void 0 ? void 0 : _e.block_color;
            return (React.createElement("div", { className: utils_1.cs('notion-text', blockColor && "notion-" + blockColor) },
                React.createElement(text_1.Text, { value: block.properties.title, block: block }),
                children && React.createElement("div", { className: 'notion-text-children' }, children)));
        case 'bulleted_list':
        // fallthrough
        case 'numbered_list':
            var wrapList = function (content, start) {
                return block.type === 'bulleted_list' ? (React.createElement("ul", { className: 'notion-list notion-list-disc' }, content)) : (React.createElement("ol", { start: start, className: 'notion-list notion-list-numbered' }, content));
            };
            var output = null;
            if (block.content) {
                output = (React.createElement(React.Fragment, null,
                    block.properties && (React.createElement("li", null,
                        React.createElement(text_1.Text, { value: block.properties.title, block: block }))),
                    wrapList(children)));
            }
            else {
                output = block.properties ? (React.createElement("li", null,
                    React.createElement(text_1.Text, { value: block.properties.title, block: block }))) : null;
            }
            var isTopLevel = block.type !== ((_g = (_f = recordMap.block[block.parent_id]) === null || _f === void 0 ? void 0 : _f.value) === null || _g === void 0 ? void 0 : _g.type);
            var start = utils_1.getListNumber(block.id, recordMap.block);
            return isTopLevel ? wrapList(output, start) : output;
        case 'tweet':
        // fallthrough
        case 'maps':
        // fallthrough
        case 'pdf':
        // fallthrough
        case 'figma':
        // fallthrough
        case 'image':
        // fallthrough
        case 'embed':
        // fallthrough
        case 'video':
            var value = block;
            return (React.createElement("figure", { className: utils_1.cs('notion-asset-wrapper', "notion-asset-wrapper-" + block.type, ((_h = block === null || block === void 0 ? void 0 : block.format) === null || _h === void 0 ? void 0 : _h.block_full_width) && 'notion-asset-wrapper-full') },
                React.createElement(asset_1.Asset, { block: block }),
                value.properties.caption && (React.createElement("figcaption", { className: 'notion-asset-caption' },
                    React.createElement(text_1.Text, { value: block.properties.caption, block: block })))));
        case 'drive':
            return React.createElement(google_drive_1.GoogleDrive, { block: block });
        case 'audio':
            return React.createElement(audio_1.Audio, { block: block });
        case 'file':
            return React.createElement(file_1.File, { block: block });
        case 'equation':
            var math = block.properties.title[0][0];
            if (!math)
                return null;
            return React.createElement(equation_1.Equation, { math: math, block: true });
        case 'code': {
            if (block.properties.title) {
                var content = block.properties.title[0][0];
                var language = block.properties.language[0][0];
                return React.createElement(Code, { key: block.id, language: language || '', code: content });
            }
            break;
        }
        case 'column_list':
            return React.createElement("div", { className: 'notion-row' }, children);
        case 'column':
            var spacerMaxWidth = 46;
            var spacerWidth = "min(" + spacerMaxWidth + "px, 4vw)";
            var ratio = ((_j = block.format) === null || _j === void 0 ? void 0 : _j.column_ratio) || 0.5;
            var columns = Math.max(2, Math.ceil(1.0 / ratio));
            var width = "calc((100% - (" + (columns - 1) + " * " + spacerWidth + "px)) * " + ratio + ")";
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: 'notion-column', style: { width: width } }, children),
                React.createElement("div", { className: 'notion-spacer' })));
        case 'quote': {
            if (!block.properties)
                return null;
            var blockColor_3 = (_k = block.format) === null || _k === void 0 ? void 0 : _k.block_color;
            return (React.createElement("blockquote", { className: utils_1.cs('notion-quote', blockColor_3 && "notion-" + blockColor_3) },
                React.createElement(text_1.Text, { value: block.properties.title, block: block })));
        }
        case 'collection_view':
            return React.createElement(Collection, { block: block });
        case 'callout':
            return (React.createElement("div", { className: utils_1.cs('notion-callout', ((_l = block.format) === null || _l === void 0 ? void 0 : _l.block_color) &&
                    "notion-" + ((_m = block.format) === null || _m === void 0 ? void 0 : _m.block_color) + "_co") },
                React.createElement(page_icon_1.PageIcon, { block: block }),
                React.createElement("div", { className: 'notion-callout-text' },
                    React.createElement(text_1.Text, { value: (_o = block.properties) === null || _o === void 0 ? void 0 : _o.title, block: block }))));
        case 'bookmark':
            var title = utils_1.getTextContent((_p = block.properties) === null || _p === void 0 ? void 0 : _p.title);
            if (!title) {
                title = utils_1.getTextContent((_q = block.properties) === null || _q === void 0 ? void 0 : _q.link);
            }
            if (title) {
                if (title.startsWith('http')) {
                    try {
                        var url = new URL(title);
                        title = url.hostname;
                    }
                    catch (err) {
                        // ignore invalid links
                    }
                }
            }
            return (React.createElement("div", { className: 'notion-row' },
                React.createElement(components.link, { target: '_blank', rel: 'noopener noreferrer', className: utils_1.cs('notion-bookmark', ((_r = block.format) === null || _r === void 0 ? void 0 : _r.block_color) && "notion-" + block.format.block_color), href: block.properties.link[0][0] },
                    React.createElement("div", null,
                        title && (React.createElement("div", { className: 'notion-bookmark-title' },
                            React.createElement(text_1.Text, { value: [[title]], block: block }))),
                        ((_s = block.properties) === null || _s === void 0 ? void 0 : _s.description) && (React.createElement("div", { className: 'notion-bookmark-description' },
                            React.createElement(text_1.Text, { value: (_t = block.properties) === null || _t === void 0 ? void 0 : _t.description, block: block }))),
                        React.createElement("div", { className: 'notion-bookmark-link' },
                            ((_u = block.format) === null || _u === void 0 ? void 0 : _u.bookmark_icon) && (React.createElement(graceful_image_1.GracefulImage, { src: (_v = block.format) === null || _v === void 0 ? void 0 : _v.bookmark_icon, alt: title, loading: 'lazy' })),
                            React.createElement("div", null,
                                React.createElement(text_1.Text, { value: (_w = block.properties) === null || _w === void 0 ? void 0 : _w.link, block: block })))),
                    ((_x = block.format) === null || _x === void 0 ? void 0 : _x.bookmark_cover) && (React.createElement("div", { className: 'notion-bookmark-image' },
                        React.createElement(graceful_image_1.GracefulImage, { src: (_y = block.format) === null || _y === void 0 ? void 0 : _y.bookmark_cover, alt: utils_1.getTextContent(block.properties.title), loading: 'lazy' }))))));
        case 'toggle':
            return (React.createElement("details", { className: 'notion-toggle' },
                React.createElement("summary", null,
                    React.createElement(text_1.Text, { value: block.properties.title, block: block })),
                React.createElement("div", null, children)));
        case 'table_of_contents': {
            var page = utils_1.getBlockParentPage(block, recordMap);
            if (!page)
                return null;
            var toc = utils_1.getPageTableOfContents(page, recordMap);
            var blockColor_4 = (_z = block.format) === null || _z === void 0 ? void 0 : _z.block_color;
            return (React.createElement("div", { className: utils_1.cs('notion-table-of-contents', blockColor_4 && "notion-" + blockColor_4) }, toc.map(function (tocItem) { return (React.createElement("a", { key: tocItem.id, href: "#" + utils_1.uuidToId(tocItem.id), className: 'notion-table-of-contents-item' },
                React.createElement("span", { className: 'notion-table-of-contents-item-body', style: {
                        display: 'inline-block',
                        marginLeft: tocItem.indentLevel * 24
                    } }, tocItem.text))); })));
        }
        case 'to_do':
            var isChecked = ((_2 = (_1 = (_0 = block.properties) === null || _0 === void 0 ? void 0 : _0.checked) === null || _1 === void 0 ? void 0 : _1[0]) === null || _2 === void 0 ? void 0 : _2[0]) === 'Yes';
            return (React.createElement("div", { className: 'notion-to-do' },
                React.createElement(checkbox_1.Checkbox, { isChecked: isChecked }),
                React.createElement("div", { className: utils_1.cs('notion-to-do-body', isChecked && "notion-to-do-checked") },
                    React.createElement(text_1.Text, { value: (_3 = block.properties) === null || _3 === void 0 ? void 0 : _3.title, block: block }))));
        case 'typeform':
            return React.createElement(typeform_1.Typeform, { block: block });
        default:
            if (process.env.NODE_ENV !== 'production') {
                console.log('Unsupported type ' + block.type, JSON.stringify(block, null, 2));
            }
            return React.createElement("div", null);
    }
    return null;
};
//# sourceMappingURL=block.js.map