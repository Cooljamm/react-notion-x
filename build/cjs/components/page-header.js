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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PageHeader = void 0;
var React = __importStar(require("react"));
var notion_utils_1 = require("notion-utils");
var context_1 = require("../context");
var page_icon_1 = require("./page-icon");
var search_icon_1 = require("../icons/search-icon");
var utils_1 = require("../utils");
var search_dialog_1 = require("./search-dialog");
exports.PageHeader = function () {
    var _a;
    var _b = context_1.useNotionContext(), components = _b.components, recordMap = _b.recordMap, rootPageId = _b.rootPageId, mapPageUrl = _b.mapPageUrl;
    var blockMap = recordMap.block;
    var blockIds = Object.keys(blockMap);
    var activePageId = blockIds[0];
    if (!activePageId) {
        return null;
    }
    var breadcrumbs = [];
    var currentPageId = activePageId;
    do {
        var block = (_a = blockMap[currentPageId]) === null || _a === void 0 ? void 0 : _a.value;
        if (!block) {
            break;
        }
        var title = notion_utils_1.getBlockTitle(block, recordMap);
        var icon = notion_utils_1.getBlockIcon(block, recordMap);
        if (!(title || icon)) {
            break;
        }
        breadcrumbs.push({
            block: block,
            active: currentPageId === activePageId,
            pageId: currentPageId,
            title: title,
            icon: icon
        });
        var parentBlock = notion_utils_1.getBlockParentPage(block, recordMap);
        var parentId = parentBlock === null || parentBlock === void 0 ? void 0 : parentBlock.id;
        if (!parentId) {
            break;
        }
        currentPageId = parentId;
    } while (true);
    breadcrumbs.reverse();
    var _c = React.useState(false), isSearchOpen = _c[0], setIsSearchOpen = _c[1];
    var onOpenSearch = React.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setIsSearchOpen(true);
            return [2 /*return*/];
        });
    }); }, []);
    var onCloseSearch = React.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setIsSearchOpen(false);
            return [2 /*return*/];
        });
    }); }, []);
    return (React.createElement("header", { className: 'notion-header' },
        isSearchOpen && (React.createElement(search_dialog_1.SearchDialog, { isOpen: isSearchOpen, rootBlockId: rootPageId || activePageId, onClose: onCloseSearch })),
        React.createElement("div", { className: 'nav-header' },
            React.createElement("div", { className: 'breadcrumbs' }, breadcrumbs.map(function (breadcrumb, index) {
                var pageLinkProps = {};
                var componentMap = {
                    pageLink: components.pageLink
                };
                if (breadcrumb.active) {
                    componentMap.pageLink = function (props) { return React.createElement("div", __assign({}, props)); };
                }
                else {
                    pageLinkProps.href = mapPageUrl(breadcrumb.pageId);
                }
                return (React.createElement(React.Fragment, { key: breadcrumb.pageId },
                    React.createElement(componentMap.pageLink, __assign({ className: utils_1.cs('breadcrumb', breadcrumb.active && 'active') }, pageLinkProps),
                        breadcrumb.icon && (React.createElement(page_icon_1.PageIcon, { className: 'icon', block: breadcrumb.block })),
                        breadcrumb.title && (React.createElement("span", { className: 'title' }, breadcrumb.title))),
                    index < breadcrumbs.length - 1 && (React.createElement("span", { className: 'spacer' }, "/"))));
            })),
            React.createElement("div", { className: 'rhs' },
                React.createElement("div", { role: 'button', className: utils_1.cs('breadcrumb', 'button'), onClick: onOpenSearch },
                    React.createElement(search_icon_1.SearchIcon, { className: 'searchIcon' }),
                    React.createElement("span", { className: 'title' }, "Search"))))));
};
//# sourceMappingURL=page-header.js.map