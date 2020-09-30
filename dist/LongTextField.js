"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_core_1 = require("@patternfly/react-core");
var es5_1 = require("uniforms/es5");
var LongText = function (_a) {
    var disabled = _a.disabled, id = _a.id, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, value = _a.value, props = tslib_1.__rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "value"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, es5_1.filterDOMProps(props)),
        label && react_1["default"].createElement("label", { htmlFor: id }, label),
        react_1["default"].createElement(react_core_1.TextArea, { id: id, disabled: disabled, name: name, "aria-label": name, 
            // @ts-ignore
            onChange: function (value, event) { return onChange(event.target.value); }, placeholder: placeholder, ref: inputRef, value: value !== null && value !== void 0 ? value : '' })));
};
exports["default"] = es5_1.connectField(LongText);
