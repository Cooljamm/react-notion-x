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
exports.Property = void 0;
var React = __importStar(require("react"));
var format_number_1 = __importDefault(require("format-number"));
var date_fns_1 = require("date-fns");
var utils_1 = require("../utils");
var checkbox_1 = require("./checkbox");
var context_1 = require("../context");
var text_1 = require("./text");
var eval_formula_1 = require("../eval-formula");
var page_title_1 = require("./page-title");
var graceful_image_1 = require("./graceful-image");
/**
 * Renders a single value of structured Notion data according to its schema.
 *
 * This corresponds to rendering the content of a single cell in a table.
 * Property rendering is re-used across all the different types of collection views.
 */
exports.Property = function (_a) {
    var schema = _a.schema, data = _a.data, block = _a.block, collection = _a.collection, _b = _a.inline, inline = _b === void 0 ? false : _b;
    var _c = context_1.useNotionContext(), components = _c.components, mapImageUrl = _c.mapImageUrl;
    if (schema) {
        var content = null;
        if (data ||
            schema.type === 'checkbox' ||
            schema.type === 'title' ||
            schema.type === 'formula' ||
            schema.type === 'created_by' ||
            schema.type === 'last_edited_by' ||
            schema.type === 'created_time' ||
            schema.type === 'last_edited_time') {
            switch (schema.type) {
                case 'relation':
                    // console.log('relation', schema, data)
                    content = React.createElement(text_1.Text, { value: data, block: block });
                    break;
                case 'formula':
                    // TODO
                    // console.log('formula', schema.formula, {
                    //   schema: collection?.schema,
                    //   properties: block?.properties
                    // })
                    try {
                        content = eval_formula_1.evalFormula(schema.formula, {
                            schema: collection === null || collection === void 0 ? void 0 : collection.schema,
                            properties: block === null || block === void 0 ? void 0 : block.properties
                        });
                        if (isNaN(content)) {
                            console.log('NaN', schema.formula);
                        }
                        if (content instanceof Date) {
                            content = date_fns_1.format(content, 'MMM d, YYY hh:mm aa');
                        }
                    }
                    catch (err) {
                        // console.log('error evaluating formula', schema.formula, err)
                        content = null;
                    }
                    break;
                case 'title':
                    if (block) {
                        content = React.createElement(page_title_1.PageTitle, { block: block });
                    }
                    else {
                        content = React.createElement(text_1.Text, { value: data, block: block });
                    }
                    break;
                case 'select':
                // intentional fallthrough
                case 'multi_select':
                    var values = (data[0][0] || '').split(',');
                    content = values.map(function (value, index) {
                        var option = schema.options.find(function (option) { return value === option.value; });
                        var color = option === null || option === void 0 ? void 0 : option.color;
                        return (React.createElement("div", { key: index, className: utils_1.cs("notion-property-" + schema.type + "-item", color && "notion-item-" + color) }, value));
                    });
                    break;
                case 'person':
                    // console.log('person', schema, data)
                    content = React.createElement(text_1.Text, { value: data, block: block });
                    break;
                case 'file':
                    // TODO: assets should be previewable via image-zoom
                    var files = data
                        .filter(function (v) { return v.length === 2; })
                        .map(function (f) { return f.flat().flat(); });
                    content = files.map(function (file, i) { return (React.createElement(components.link, { key: i, className: 'notion-property-file', href: mapImageUrl(file[2], block), target: '_blank', rel: 'noreferrer noopener' },
                        React.createElement(graceful_image_1.GracefulImage, { alt: file[0], src: mapImageUrl(file[2], block), loading: 'lazy' }))); });
                    break;
                case 'checkbox':
                    var isChecked = data && data[0][0] === 'Yes';
                    return React.createElement(checkbox_1.Checkbox, { isChecked: isChecked });
                case 'url':
                    // TODO: refactor to less hackyh solution
                    var d = JSON.parse(JSON.stringify(data));
                    if (inline) {
                        try {
                            var url = new URL(d[0][0]);
                            d[0][0] = url.hostname.replace(/^www\./, '');
                        }
                        catch (err) {
                            // ignore invalid urls
                        }
                    }
                    content = (React.createElement(text_1.Text, { value: d, block: block, inline: inline, linkProps: {
                            target: '_blank',
                            rel: 'noreferrer noopener'
                        } }));
                    break;
                case 'email':
                    content = React.createElement(text_1.Text, { value: data, linkProtocol: 'mailto', block: block });
                    break;
                case 'phone_number':
                    content = React.createElement(text_1.Text, { value: data, linkProtocol: 'tel', block: block });
                    break;
                case 'number':
                    var value = parseFloat(data[0][0] || '0');
                    var breakEarly = false;
                    var output = '';
                    if (isNaN(value)) {
                        content = React.createElement(text_1.Text, { value: data, block: block });
                    }
                    else {
                        switch (schema.number_format) {
                            case 'number_with_commas':
                                output = format_number_1["default"]()(value);
                                break;
                            case 'percent':
                                output = format_number_1["default"]({ suffix: '%' })(value * 100);
                                break;
                            case 'dollar':
                                output = format_number_1["default"]({ prefix: '$', round: 2, padRight: 2 })(value);
                                break;
                            case 'euro':
                                output = format_number_1["default"]({ prefix: '€', round: 2, padRight: 2 })(value);
                                break;
                            case 'pound':
                                output = format_number_1["default"]({ prefix: '£', round: 2, padRight: 2 })(value);
                                break;
                            case 'yen':
                                output = format_number_1["default"]({ prefix: '¥', round: 0 })(value);
                                break;
                            case 'rupee':
                                output = format_number_1["default"]({ prefix: '₹', round: 2, padRight: 2 })(value);
                                break;
                            case 'won':
                                output = format_number_1["default"]({ prefix: '₩', round: 0 })(value);
                                break;
                            case 'yuan':
                                output = format_number_1["default"]({ prefix: 'CN¥', round: 2, padRight: 2 })(value);
                                break;
                            default:
                                content = React.createElement(text_1.Text, { value: data, block: block });
                                breakEarly = true;
                                break;
                        }
                        if (!breakEarly) {
                            content = React.createElement(text_1.Text, { value: [[output]], block: block });
                        }
                    }
                    break;
                case 'created_time':
                    content = date_fns_1.format(new Date(block.created_time), 'MMM d, YYY hh:mm aa');
                    break;
                case 'last_edited_time':
                    content = date_fns_1.format(new Date(block.last_edited_time), 'MMM d, YYY hh:mm aa');
                    break;
                case 'created_by':
                    console.log('created_by', schema, data);
                    break;
                case 'last_edited_by':
                    console.log('last_edited_by', schema, data);
                    break;
                default:
                    content = React.createElement(text_1.Text, { value: data, block: block });
                    break;
            }
        }
        return (React.createElement("span", { className: "notion-property notion-property-" + schema.type }, content));
    }
    return null;
};
//# sourceMappingURL=property.js.map