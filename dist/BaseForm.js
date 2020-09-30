"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_core_1 = require("@patternfly/react-core");
var es5_1 = require("uniforms/es5");
function Patternfly(parent) {
    var _ = /** @class */ (function (_super) {
        tslib_1.__extends(_, _super);
        function _() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _.prototype.render = function () {
            return (react_1["default"].createElement(es5_1.context.Provider, { value: this.getContext() },
                react_1["default"].createElement(react_core_1.Form, tslib_1.__assign({}, this.getNativeFormProps()))));
        };
        _.Patternfly = Patternfly;
        _.displayName = "Patternfly" + parent.displayName;
        return _;
    }(parent));
    return _;
}
exports["default"] = Patternfly(es5_1.BaseForm);
