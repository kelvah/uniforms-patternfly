"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_core_1 = require("@patternfly/react-core");
var es5_1 = require("uniforms/es5");
var wrapField_1 = tslib_1.__importDefault(require("./wrapField"));
var Num = function (props) {
    var _a;
    var onChange = function (value, event) {
        var parse = props.decimal ? parseFloat : parseInt;
        var v = parse(event.target.value);
        // @ts-ignore
        props.onChange(isNaN(v) ? undefined : v);
    };
    return wrapField_1["default"](props, react_1["default"].createElement(react_core_1.TextInput, { name: props.name, isDisabled: props.disabled, id: props.id, max: props.max, min: props.min, onChange: onChange, placeholder: props.placeholder, ref: props.inputRef, step: props.decimal ? 0.01 : 1, type: "number", value: (_a = props.value) !== null && _a !== void 0 ? _a : '' }));
};
exports["default"] = es5_1.connectField(Num);
