"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var es5_1 = require("uniforms/es5");
var react_core_1 = require("@patternfly/react-core");
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
var Nest = function (_a) {
    var children = _a.children, error = _a.error, errorMessage = _a.errorMessage, fields = _a.fields, itemProps = _a.itemProps, label = _a.label, name = _a.name, showInlineError = _a.showInlineError, disabled = _a.disabled, props = tslib_1.__rest(_a, ["children", "error", "errorMessage", "fields", "itemProps", "label", "name", "showInlineError", "disabled"]);
    return (react_1["default"].createElement(react_core_1.Card, tslib_1.__assign({}, es5_1.filterDOMProps(props), { style: { marginBottom: '1.5rem' } }),
        react_1["default"].createElement(react_core_1.CardBody, { className: "pf-c-form" },
            label && react_1["default"].createElement("label", null,
                react_1["default"].createElement("b", null, label)),
            children ||
                fields.map(function (field) { return (react_1["default"].createElement(AutoField_1["default"], tslib_1.__assign({ key: field, disabled: disabled, name: field }, itemProps))); }))));
};
exports["default"] = es5_1.connectField(Nest);
