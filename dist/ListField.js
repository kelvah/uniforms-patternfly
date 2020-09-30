"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
var es5_1 = require("uniforms/es5");
var ListItemField_1 = tslib_1.__importDefault(require("./ListItemField"));
var ListAddField_1 = tslib_1.__importDefault(require("./ListAddField"));
var _1 = require(".");
es5_1.filterDOMProps.register('minCount', 'wrapperCol', 'labelCol');
function ListField(_a) {
    var _b = _a.children, children = _b === void 0 ? react_1["default"].createElement(ListItemField_1["default"], { name: "$" }) : _b, error = _a.error, errorMessage = _a.errorMessage, info = _a.info, initialCount = _a.initialCount, itemProps = _a.itemProps, label = _a.label, name = _a.name, value = _a.value, showInlineError = _a.showInlineError, props = tslib_1.__rest(_a, ["children", "error", "errorMessage", "info", "initialCount", "itemProps", "label", "name", "value", "showInlineError"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, es5_1.filterDOMProps(props)),
        react_1["default"].createElement(react_core_1.Split, { hasGutter: true },
            react_1["default"].createElement(react_core_1.SplitItem, null, label && (react_1["default"].createElement("label", null,
                label,
                !!info && (react_1["default"].createElement("span", null,
                    "\u00A0",
                    react_1["default"].createElement(react_core_1.Tooltip, { content: info },
                        react_1["default"].createElement(react_icons_1.OutlinedQuestionCircleIcon, null))))))),
            react_1["default"].createElement(react_core_1.SplitItem, { isFilled: true }),
            react_1["default"].createElement(react_core_1.SplitItem, null,
                react_1["default"].createElement(ListAddField_1["default"], { name: name + ".$", initialCount: initialCount }),
                ' ',
                react_1["default"].createElement(_1.ListDelField, { name: name + ".$" }))),
        react_1["default"].createElement("div", null, value === null || value === void 0 ? void 0 : value.map(function (item, itemIndex) {
            return react_1.Children.map(children, function (child, childIndex) {
                var _a;
                return react_1.isValidElement(child)
                    ? react_1.cloneElement(child, tslib_1.__assign({ key: itemIndex + "-" + childIndex, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex) }, itemProps))
                    : child;
            });
        }))));
}
exports["default"] = es5_1.connectField(ListField);
