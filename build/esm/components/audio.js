import * as React from 'react';
import { useNotionContext } from '../context';
export var Audio = function (_a) {
    var block = _a.block;
    var recordMap = useNotionContext().recordMap;
    var signedUrl = recordMap.signed_urls[block.id];
    return (React.createElement("div", { className: 'notion-audio' },
        React.createElement("audio", { controls: true, preload: 'none', src: signedUrl })));
};
//# sourceMappingURL=audio.js.map