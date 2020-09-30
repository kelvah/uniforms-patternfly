"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_core_1 = require("@patternfly/react-core");
var es5_1 = require("uniforms/es5");
var wrapField_1 = tslib_1.__importDefault(require("./wrapField"));
var Text = function (props) {
    var _a, _b;
    return wrapField_1["default"](props, react_1["default"].createElement(react_core_1.TextInput, tslib_1.__assign({ id: props.id, name: props.name, isDisabled: props.disabled, validated: props.error ? "error" : "default", 
        // @ts-ignore
        onChange: function (value, event) { return props.onChange(event.target.value); }, placeholder: props.placeholder, ref: props.inputRef, type: (_a = props.type) !== null && _a !== void 0 ? _a : 'text', value: (_b = props.value) !== null && _b !== void 0 ? _b : '' }, es5_1.filterDOMProps(props))));
};
exports["default"] = es5_1.connectField(Text);
