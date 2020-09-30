"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_core_1 = require("@patternfly/react-core");
var es5_1 = require("uniforms/es5");
var Bool = function (_a) {
    var disabled = _a.disabled, id = _a.id, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, value = _a.value, toggle = _a.toggle, props = tslib_1.__rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "value", "toggle"]);
    var Component = (props.appearance === 'switch') ? react_core_1.Switch : react_core_1.Checkbox;
    return (react_1["default"].createElement("div", tslib_1.__assign({}, es5_1.filterDOMProps(props)),
        react_1["default"].createElement(Component, { isChecked: !!value, isDisabled: disabled, id: id, name: name, onChange: function () { return disabled || onChange(!value); }, ref: inputRef, label: label })));
};
Bool.defaultProps = {
    appearance: 'checkbox'
};
exports["default"] = es5_1.connectField(Bool);
