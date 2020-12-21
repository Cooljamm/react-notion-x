import * as React from 'react';
import isUrl from 'is-url-superb';
import { getBlockIcon, getBlockTitle } from 'notion-utils';
import { cs } from '../utils';
import { DefaultPageIcon } from '../icons/default-page-icon';
import { useNotionContext } from '../context';
import { GracefulImage } from './graceful-image';
var isIconBlock = function (value) {
    return (value.type === 'page' ||
        value.type === 'callout' ||
        value.type === 'collection_view' ||
        value.type === 'collection_view_page');
};
export var PageIcon = function (_a) {
    var block = _a.block, className = _a.className, _b = _a.large, large = _b === void 0 ? false : _b;
    var _c = useNotionContext(), mapImageUrl = _c.mapImageUrl, recordMap = _c.recordMap;
    if (!isIconBlock(block)) {
        return null;
    }
    var icon = getBlockIcon(block, recordMap);
    var title = getBlockTitle(block, recordMap);
    if (icon && isUrl(icon)) {
        var url = mapImageUrl(icon, block);
        return (React.createElement(GracefulImage, { className: cs(className, large ? 'notion-page-icon-cover' : 'notion-page-icon'), src: url, alt: title ? title : 'Icon', loading: 'lazy' }));
    }
    else {
        var iconValue = icon === null || icon === void 0 ? void 0 : icon.trim();
        if (!iconValue) {
            return (React.createElement(DefaultPageIcon, { className: cs(className, large ? 'notion-page-icon-cover' : 'notion-page-icon'), alt: title ? title : 'Page' }));
        }
        return (React.createElement("span", { className: cs(className, large ? 'notion-page-icon-cover' : 'notion-page-icon'), role: 'img', "aria-label": icon }, iconValue));
    }
};
//# sourceMappingURL=page-icon.js.map