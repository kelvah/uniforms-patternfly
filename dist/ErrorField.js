"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var es5_1 = require("uniforms/es5");
var Error = function (_a) {
    var children = _a.children, error = _a.error, errorMessage = _a.errorMessage, props = tslib_1.__rest(_a, ["children", "error", "errorMessage"]);
    return !error ? null : (react_1["default"].createElement("div", tslib_1.__assign({}, es5_1.filterDOMProps(props)), children ? (children) : (react_1["default"].createElement("div", { style: { margin: '3px' } }, errorMessage))));
};
Error.defaultProps = {
    style: {
        backgroundColor: 'rgba(255, 85, 0, 0.2)',
        border: '1px solid rgb(255, 85, 0)',
        borderRadius: '7px',
        margin: '20px 0px',
        padding: '10px'
    }
};
exports["default"] = es5_1.connectField(Error, { initialValue: false });
