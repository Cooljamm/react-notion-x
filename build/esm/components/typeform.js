import * as React from 'react';
import * as typeformEmbed from '@typeform/embed';
var Typeform = function (_a) {
    var _b;
    var block = _a.block;
    var source = (_b = block.format) === null || _b === void 0 ? void 0 : _b.display_source;
    var typeformRef = React.useRef(null);
    React.useEffect(function () {
        typeformEmbed.makeWidget(typeformRef.current, source, {
            hideFooter: true,
            hideHeaders: true
            // opacity: 50,
        });
    }, [typeformRef]);
    if (!source)
        return null;
    return (React.createElement("div", { style: { border: 0, outline: 0, width: '100%', height: '500px' }, ref: typeformRef }));
};
export default Typeform;
//# sourceMappingURL=typeform.js.map