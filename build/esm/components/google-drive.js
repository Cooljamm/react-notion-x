import * as React from 'react';
import { formatDistance } from 'date-fns';
import { useNotionContext } from '../context';
import { GracefulImage } from './graceful-image';
export var GoogleDrive = function (_a) {
    var _b;
    var block = _a.block;
    var _c = useNotionContext(), components = _c.components, mapImageUrl = _c.mapImageUrl;
    var properties = (_b = block.format) === null || _b === void 0 ? void 0 : _b.drive_properties;
    if (!properties)
        return null;
    var domain;
    try {
        var url = new URL(properties.url);
        domain = url.hostname;
    }
    catch (err) {
        // ignore invalid urls for robustness
    }
    return (React.createElement("div", { className: 'notion-google-drive' },
        React.createElement(components.link, { className: 'notion-google-drive-link', href: properties.url, target: '_blank', rel: 'noopener noreferrer' },
            React.createElement("div", { className: 'notion-google-drive-preview' },
                React.createElement(GracefulImage, { src: mapImageUrl(properties.thumbnail, block), alt: properties.title || 'Google Drive Document', loading: 'lazy' })),
            React.createElement("div", { className: 'notion-google-drive-body' },
                properties.title && (React.createElement("div", { className: 'notion-google-drive-body-title' }, properties.title)),
                properties.modified_time && (React.createElement("div", { className: 'notion-google-drive-body-modified-time' },
                    "Last modified",
                    ' ',
                    properties.user_name ? "by " + properties.user_name + " " : '',
                    formatDistance(new Date(properties.modified_time), new Date()),
                    ' ',
                    "ago")),
                properties.icon && domain && (React.createElement("div", { className: 'notion-google-drive-body-source' },
                    properties.icon && (React.createElement("div", { className: 'notion-google-drive-body-source-icon', style: {
                            backgroundImage: "url(" + properties.icon + ")"
                        } })),
                    domain && (React.createElement("div", { className: 'notion-google-drive-body-source-domain' }, domain))))))));
};
//# sourceMappingURL=google-drive.js.map