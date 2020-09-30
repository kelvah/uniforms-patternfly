"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = require("react");
var es5_1 = require("uniforms/es5");
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
function AutoFields(_a) {
    var autoField = _a.autoField, element = _a.element, fields = _a.fields, omitFields = _a.omitFields, props = tslib_1.__rest(_a, ["autoField", "element", "fields", "omitFields"]);
    var schema = es5_1.useForm().schema;
    return react_1.createElement(element, props, (fields !== null && fields !== void 0 ? fields : schema.getSubfields())
        .filter(function (field) { return !omitFields.includes(field); })
        .map(function (field) { return react_1.createElement(autoField, { key: field, name: field }); }));
}
exports["default"] = AutoFields;
AutoFields.defaultProps = {
    autoField: AutoField_1["default"],
    element: 'div',
    omitFields: []
};
