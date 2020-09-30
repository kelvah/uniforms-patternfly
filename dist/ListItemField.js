"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var es5_1 = require("uniforms/es5");
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
function ListItemField(props) {
    return (react_1["default"].createElement("div", { style: { marginBottom: '1rem' } }, props.children ? (react_1.Children.map(props.children, function (child) {
        return react_1["default"].cloneElement(child, {
            name: es5_1.joinName(props.name, child.props.name),
            label: null
        });
    })) : (react_1["default"].createElement(AutoField_1["default"], tslib_1.__assign({}, props)))));
}
exports["default"] = ListItemField;
