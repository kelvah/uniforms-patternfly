"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_core_1 = require("@patternfly/react-core");
var es5_1 = require("uniforms/es5");
var wrapField_1 = tslib_1.__importDefault(require("./wrapField"));
var xor = function (item, array) {
    var index = array.indexOf(item);
    if (index === -1) {
        return array.concat([item]);
    }
    return array.slice(0, index).concat(array.slice(index + 1));
};
es5_1.filterDOMProps.register('autoValue');
function RenderCheckboxes(props) {
    var Group = props.fieldType === Array ? react_core_1.Checkbox : react_core_1.Radio;
    return (
    // @ts-ignore
    react_1["default"].createElement("div", tslib_1.__assign({}, es5_1.filterDOMProps(props)),
        props.label && react_1["default"].createElement("label", null, props.label),
        props.allowedValues.map(function (item, index) {
            return (react_1["default"].createElement(react_1["default"].Fragment, { key: index },
                react_1["default"].createElement("label", { htmlFor: props.id }, props.transform ? props.transform(item) : item),
                react_1["default"].createElement(Group, { id: props.id + "-" + item, isDisabled: props.disabled, name: props.name, "aria-label": props.name, value: props.value, isChecked: 
                    // @ts-ignore
                    // eslint-disable-next-line
                    props.fieldType === Array ? props.value.includes(item) : props.value === item, onChange: function () {
                        props.onChange(props.fieldType === Array ? xor(item, props.value) : item);
                    } })));
        })));
}
function RenderSelect(props) {
    var selectDefault = props.fieldType === Array ? [] : props.placeholder;
    var _a = react_1.useState(false), expanded = _a[0], setExpanded = _a[1];
    var _b = react_1.useState(selectDefault), selected = _b[0], setSelected = _b[1];
    var handleSelect = function (event, selection) {
        var items = parseInput(selection, props.fieldType);
        props.onChange(items);
        setSelected(items);
        setExpanded(false);
    };
    var parseInput = function (selection, fieldType) {
        if (fieldType !== Array)
            return (selection !== '') ? selection : '';
        return (selected.includes(selection))
            // @ts-ignore
            ? selected.filter(function (s) { return s !== selection; })
            // @ts-ignore
            : tslib_1.__spreadArrays([selection], selected);
    };
    var selectedOptions = props.allowedValues.map(function (value) { return (react_1["default"].createElement(react_core_1.SelectOption, { key: value, value: value }, props.transform ? props.transform(value) : value)); });
    if (props.placeholder)
        selectedOptions.unshift(react_1["default"].createElement(react_core_1.SelectOption, { key: props.allowedValues.length, isDisabled: true, isPlaceholder: true, value: props.placeholder }));
    return (wrapField_1["default"](props, react_1["default"].createElement(react_core_1.Select, { isDisabled: props.disabled, id: props.id, variant: props.fieldType === Array ? react_core_1.SelectVariant.typeaheadMulti : react_core_1.SelectVariant.single, name: props.name, placeholderText: props.placeholder, selections: selected, onToggle: function () { return setExpanded(!expanded); }, onSelect: handleSelect, value: props.value || (props.fieldType === Array ? [] : undefined) }, selectedOptions)));
}
function SelectField(_a) {
    var checkboxes = _a.checkboxes, props = tslib_1.__rest(_a, ["checkboxes"]);
    return checkboxes
        ? RenderCheckboxes(props)
        : RenderSelect(props);
}
// @ts-ignore
exports["default"] = es5_1.connectField(SelectField);
