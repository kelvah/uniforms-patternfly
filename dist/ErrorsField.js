"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var es5_1 = require("uniforms/es5");
function ErrorsField(_a) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    var _b = es5_1.useForm(), error = _b.error, schema = _b.schema;
    return !error && !children ? null : (react_1["default"].createElement("div", tslib_1.__assign({}, es5_1.filterDOMProps(props)),
        children,
        react_1["default"].createElement("ul", null, schema.getErrorMessages(error).map(function (message, index) { return (react_1["default"].createElement("li", { key: index, style: { margin: '3px' } }, message)); }))));
}
ErrorsField.defaultProps = {
    style: {
        backgroundColor: 'rgba(255, 85, 0, 0.2)',
        border: '1px solid rgb(255, 85, 0)',
        borderRadius: '7px',
        margin: '20px 0px',
        padding: '10px'
    }
};
exports["default"] = ErrorsField;
