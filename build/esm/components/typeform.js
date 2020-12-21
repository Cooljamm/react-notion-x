import * as React from 'react';
export var Typeform = function (_a) {
    var _b;
    var block = _a.block;
    var source = (_b = block.format) === null || _b === void 0 ? void 0 : _b.display_source;
    if (!source)
        return null;
    return (React.createElement("div", { style: { border: 0, outline: 0, width: '100%' } },
        React.createElement("iframe", { src: source, style: { width: '100%', height: '500px', border: 0 } })));
};
//# sourceMappingURL=typeform.js.map