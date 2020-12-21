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
exports.Text = void 0;
var React = __importStar(require("react"));
var context_1 = require("../context");
var utils_1 = require("../utils");
var equation_1 = require("./equation");
var page_title_1 = require("./page-title");
var graceful_image_1 = require("./graceful-image");
/**
 * Renders a single piece of Notion text, including basic rich text formatting.
 *
 * These represent the innermost leaf nodes of a Notion subtree.
 *
 * TODO: I think this implementation would be more correct if the reduce just added
 * attributes to the final element's style.
 */
exports.Text = function (_a) {
    var value = _a.value, block = _a.block, linkProps = _a.linkProps, linkProtocol = _a.linkProtocol;
    var _b = context_1.useNotionContext(), components = _b.components, recordMap = _b.recordMap, mapPageUrl = _b.mapPageUrl, mapImageUrl = _b.mapImageUrl;
    return (React.createElement(React.Fragment, null, value === null || value === void 0 ? void 0 : value.map(function (_a, index) {
        // TODO: sometimes notion shows a max of N items to prevent overflow
        // if (trim && index > 18) {
        //   return null
        // }
        var text = _a[0], decorations = _a[1];
        if (!decorations) {
            if (text === ',') {
                return React.createElement("span", { key: index, style: { padding: '0.5em' } });
            }
            else {
                return React.createElement(React.Fragment, { key: index }, text);
            }
        }
        var formatted = decorations.reduce(function (element, decorator) {
            var _a, _b, _c, _d;
            switch (decorator[0]) {
                case 'p': {
                    // link to an internal block (within the current workspace)
                    var blockId = decorator[1];
                    var linkedBlock = (_a = recordMap.block[blockId]) === null || _a === void 0 ? void 0 : _a.value;
                    if (!linkedBlock) {
                        console.log('"p" missing block', blockId);
                        return null;
                    }
                    return (React.createElement(components.pageLink, { className: 'notion-link', href: mapPageUrl(blockId) },
                        React.createElement(page_title_1.PageTitle, { block: linkedBlock })));
                }
                case '‣': {
                    // link to an external block (outside of the current workspace)
                    var linkType = decorator[1][0];
                    var id = decorator[1][1];
                    console.log('text', linkType, id);
                    switch (linkType) {
                        case 'u':
                            var user_1 = (_b = recordMap.notion_user[id]) === null || _b === void 0 ? void 0 : _b.value;
                            if (!user_1) {
                                console.log('"‣" missing user', id);
                                return null;
                            }
                            var name_1 = [user_1.given_name, user_1.family_name]
                                .filter(Boolean)
                                .join(' ');
                            return (React.createElement(graceful_image_1.GracefulImage, { className: 'notion-user', src: mapImageUrl(user_1.profile_photo, block), alt: name_1 }));
                        default: {
                            var linkedBlock = (_c = recordMap.block[id]) === null || _c === void 0 ? void 0 : _c.value;
                            if (!linkedBlock) {
                                console.log('"‣" missing block', linkType, id);
                                return null;
                            }
                            return (React.createElement(components.pageLink, __assign({ className: 'notion-link', href: mapPageUrl(id) }, linkProps, { target: '_blank', rel: 'noopener noreferrer' }),
                                React.createElement(page_title_1.PageTitle, { block: linkedBlock })));
                        }
                    }
                }
                case 'h':
                    return React.createElement("span", { className: "notion-" + decorator[1] }, element);
                case 'c':
                    return React.createElement("code", { className: 'notion-inline-code' }, element);
                case 'b':
                    return React.createElement("b", null, element);
                case 'i':
                    return React.createElement("em", null, element);
                case 's':
                    return React.createElement("s", null, element);
                case '_':
                    return React.createElement("span", { className: 'notion-inline-underscore' }, element);
                case 'e':
                    return React.createElement(equation_1.Equation, { math: decorator[1] });
                case 'a':
                    return (React.createElement(components.link, __assign({ className: 'notion-link', href: linkProtocol
                            ? linkProtocol + ":" + decorator[1]
                            : decorator[1] }, linkProps), element));
                case 'd':
                    var value_1 = decorator[1];
                    var type = value_1.type;
                    if (type === 'date') {
                        // Example: Jul 31, 2010
                        var startDate = value_1.start_date;
                        return utils_1.formatDate(startDate);
                    }
                    else if (type === 'daterange') {
                        // Example: Jul 31, 2010 → Jul 31, 2020
                        var startDate = value_1.start_date;
                        var endDate = value_1.end_date;
                        return utils_1.formatDate(startDate) + " \u2192 " + utils_1.formatDate(endDate);
                    }
                    else {
                        return element;
                    }
                case 'u':
                    var userId = decorator[1];
                    var user = (_d = recordMap.notion_user[userId]) === null || _d === void 0 ? void 0 : _d.value;
                    if (!user) {
                        console.log('missing user', userId);
                        return null;
                    }
                    var name_2 = [user.given_name, user.family_name]
                        .filter(Boolean)
                        .join(' ');
                    return (React.createElement(graceful_image_1.GracefulImage, { className: 'notion-user', src: mapImageUrl(user.profile_photo, block), alt: name_2 }));
                default:
                    if (process.env.NODE_ENV !== 'production') {
                        console.log('unsupported text format', decorator);
                    }
                    return element;
            }
        }, React.createElement(React.Fragment, null, text));
        return React.createElement(React.Fragment, { key: index }, formatted);
    })));
};
//# sourceMappingURL=text.js.map