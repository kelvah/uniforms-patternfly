"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_core_1 = require("@patternfly/react-core");
var es5_1 = require("uniforms/es5");
var Radio = function (props) {
    es5_1.filterDOMProps.register('checkboxes', 'decimal');
    return react_1["default"].createElement("div", tslib_1.__assign({}, es5_1.filterDOMProps(props)),
        props.label && react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", null, props.label)),
        props.allowedValues.map(function (item) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: item },
            react_1["default"].createElement(react_core_1.Radio, { isChecked: item === props.value, isDisabled: props.disabled, id: "" + props.id, name: props.name, label: props.transform ? props.transform(item) : item, "aria-label": props.name, onChange: function () { return props.onChange(item); } }))); }));
};
exports["default"] = es5_1.connectField(Radio);
