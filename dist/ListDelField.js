"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
var es5_1 = require("uniforms/es5");
function ListDel(_a) {
    var name = _a.name, disabled = _a.disabled, props = tslib_1.__rest(_a, ["name", "disabled"]);
    var nameParts = es5_1.joinName(null, name);
    var nameIndex = +nameParts[nameParts.length - 1];
    var parentName = es5_1.joinName(nameParts.slice(0, -1));
    var parent = es5_1.useField(parentName, {}, { absoluteName: true })[0];
    var limitNotReached = !disabled && !(parent.minCount >= parent.value.length);
    return (react_1["default"].createElement(react_core_1.Button, tslib_1.__assign({ disabled: !limitNotReached || disabled, variant: "plain", style: { paddingLeft: '0', paddingRight: '0' }, onClick: function () {
            var value = parent.value.slice();
            value.splice(nameIndex, 1);
            !disabled &&
                limitNotReached &&
                parent.onChange(value);
        } }, es5_1.filterDOMProps(props)),
        react_1["default"].createElement(react_icons_1.MinusCircleIcon, { color: "#cc0000" })));
}
exports["default"] = ListDel;
