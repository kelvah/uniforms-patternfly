"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_core_1 = require("@patternfly/react-core");
var es5_1 = require("uniforms/es5");
var wrapField_1 = tslib_1.__importDefault(require("./wrapField"));
var DateConstructor = (typeof global === 'object' ? global : window).Date;
var dateFormat = function (value) { return value && value.toISOString().slice(0, -8); };
var dateParse = function (timestamp, onChange) {
    var date = new DateConstructor(timestamp);
    if (date.getFullYear() < 10000) {
        onChange(date);
    }
    else if (isNaN(timestamp)) {
        onChange(undefined);
    }
};
function Date(props) {
    var _a;
    var onChange = function (value, event) {
        props.disabled || dateParse(event.target.valueAsNumber, props.onChange);
    };
    return wrapField_1["default"](props, react_1["default"].createElement(react_core_1.TextInput, { isDisabled: props.disabled, id: props.id, max: dateFormat(props.max), min: dateFormat(props.min), name: props.name, onChange: onChange, placeholder: props.placeholder, ref: props.inputRef, type: "datetime-local", value: (_a = dateFormat(props.value)) !== null && _a !== void 0 ? _a : '' }));
}
exports["default"] = es5_1.connectField(Date);
