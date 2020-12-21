"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SearchDialog = void 0;
var React = __importStar(require("react"));
var lodash_throttle_1 = __importDefault(require("lodash.throttle"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var search_icon_1 = require("../icons/search-icon");
var clear_icon_1 = require("../icons/clear-icon");
var loading_icon_1 = require("../icons/loading-icon");
var page_icon_1 = require("./page-icon");
var DynamicReactModal = dynamic_1["default"](function () {
    return Promise.resolve().then(function () { return __importStar(require('react-modal')); }).then(function (modal) {
        modal["default"].setAppElement('.notion-app');
        return modal;
    });
}, {
    ssr: false
});
var SearchDialog = /** @class */ (function (_super) {
    __extends(SearchDialog, _super);
    function SearchDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: false,
            query: '',
            searchResult: null,
            searchError: null
        };
        _this._onAfterOpen = function () {
            if (_this._inputRef.current) {
                _this._inputRef.current.focus();
            }
        };
        _this._onChangeQuery = function (e) {
            var query = e.target.value;
            _this.setState({ query: query });
            if (!query.trim()) {
                _this.setState({ isLoading: false, searchResult: null, searchError: null });
                return;
            }
            else {
                _this._search();
            }
        };
        _this._onClearQuery = function () {
            _this._onChangeQuery({ target: { value: '' } });
        };
        _this._searchImpl = function () { return __awaiter(_this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                query = this.state.query;
                if (!query.trim()) {
                    this.setState({ isLoading: false, searchResult: null, searchError: null });
                    return [2 /*return*/];
                }
                this.setState({ isLoading: true });
                return [2 /*return*/];
            });
        }); };
        _this._inputRef = React.createRef();
        return _this;
    }
    SearchDialog.prototype.componentDidMount = function () {
        this._search = lodash_throttle_1["default"](this._searchImpl.bind(this), 1000);
    };
    SearchDialog.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, onClose = _a.onClose;
        var _b = this.state, isLoading = _b.isLoading, query = _b.query, searchResult = _b.searchResult, searchError = _b.searchError;
        var hasQuery = !!query.trim();
        return (React.createElement(DynamicReactModal, { isOpen: isOpen, contentLabel: 'Search', className: 'notion-search', overlayClassName: 'notion-search-overlay', onRequestClose: onClose, onAfterOpen: this._onAfterOpen },
            React.createElement("div", { className: 'quickFindMenu' },
                React.createElement("div", { className: 'searchBar' },
                    React.createElement("div", { className: 'inlineIcon' }, isLoading ? (React.createElement(loading_icon_1.LoadingIcon, { className: 'loadingIcon' })) : (React.createElement(search_icon_1.SearchIcon, null))),
                    React.createElement("input", { className: 'searchInput', placeholder: 'Search', value: query, ref: this._inputRef, onChange: this._onChangeQuery }),
                    query && (React.createElement("div", { role: 'button', className: 'clearButton', onClick: this._onClearQuery },
                        React.createElement(clear_icon_1.ClearIcon, { className: 'clearIcon' })))),
                hasQuery && searchResult && (React.createElement(React.Fragment, null, searchResult.results.length ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: 'resultsPane' }, searchResult.results.map(function (result) { return (React.createElement("a", { key: result.id, className: 'result', href: "/" + result.id.replace(/-/g, '') },
                        React.createElement("div", { className: 'breadcrumb' },
                            React.createElement(page_icon_1.PageIcon, { className: 'icon', block: result.block }),
                            React.createElement("span", { className: 'title' }, result.title)))); })),
                    React.createElement("footer", { className: 'resultsFooter' },
                        React.createElement("div", null,
                            React.createElement("span", { className: 'resultsCount' }, searchResult.total),
                            searchResult.total === 1 ? ' result' : ' results')))) : (React.createElement("div", { className: 'noResultsPane' },
                    React.createElement("div", { className: 'noResults' }, "No results"),
                    React.createElement("div", { className: 'noResultsDetail' }, "Try different search terms"))))),
                hasQuery && !searchResult && searchError && (React.createElement("div", { className: 'noResultsPane' },
                    React.createElement("div", { className: 'noResults' }, "Search error"))))));
    };
    return SearchDialog;
}(React.Component));
exports.SearchDialog = SearchDialog;
//# sourceMappingURL=search-dialog.js.map