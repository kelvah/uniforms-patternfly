"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_core_1 = require("@patternfly/react-core");
var es5_1 = require("uniforms/es5");
function SubmitField(_a) {
    var disabled = _a.disabled, inputRef = _a.inputRef, value = _a.value, props = tslib_1.__rest(_a, ["disabled", "inputRef", "value"]);
    var _b = es5_1.useForm(), error = _b.error, state = _b.state;
    return (
    // @ts-ignore
    react_1["default"].createElement("div", tslib_1.__assign({}, es5_1.filterDOMProps(props)),
        react_1["default"].createElement(react_core_1.Button, { isDisabled: disabled === undefined ? !!(error || state.disabled) : disabled, type: "submit", ref: inputRef, variant: "primary" }, value)));
}
SubmitField.defaultProps = { value: 'Submit' };
exports["default"] = SubmitField;
