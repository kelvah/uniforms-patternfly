"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_core_1 = require("@patternfly/react-core");
var es5_1 = require("uniforms/es5");
es5_1.filterDOMProps.register('decimal', 'minCount', 'autoValue', 'isDisabled');
function wrapField(_a, children) {
    var id = _a.id, label = _a.label, type = _a.type, disabled = _a.disabled, error = _a.error, errorMessage = _a.errorMessage, showInlineError = _a.showInlineError, help = _a.help, required = _a.required, props = tslib_1.__rest(_a, ["id", "label", "type", "disabled", "error", "errorMessage", "showInlineError", "help", "required"]);
    return (react_1["default"].createElement(react_core_1.FormGroup, tslib_1.__assign({ fieldId: id, label: label, validated: error ? "error" : "default", type: type, helperText: help, helperTextInvalid: errorMessage }, es5_1.filterDOMProps(props)), children));
}
exports["default"] = wrapField;
