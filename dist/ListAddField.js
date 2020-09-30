"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var cloneDeep_1 = tslib_1.__importDefault(require("lodash/cloneDeep"));
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
var es5_1 = require("uniforms/es5");
function ListAdd(_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, name = _a.name, value = _a.value, props = tslib_1.__rest(_a, ["disabled", "name", "value"]);
    var nameParts = es5_1.joinName(null, name);
    var parentName = es5_1.joinName(nameParts.slice(0, -1));
    var parent = es5_1.useField(parentName, {}, { absoluteName: true })[0];
    var limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    return (react_1["default"].createElement(react_core_1.Button, tslib_1.__assign({ variant: "plain", style: { paddingLeft: '0', paddingRight: '0' }, disabled: !limitNotReached, onClick: function () {
            !disabled &&
                limitNotReached &&
                parent.onChange(parent.value.concat([cloneDeep_1["default"](value)]));
        } }, es5_1.filterDOMProps(props)),
        react_1["default"].createElement(react_icons_1.PlusCircleIcon, { color: "#0088ce" })));
}
exports["default"] = ListAdd;
