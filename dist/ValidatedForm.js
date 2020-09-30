"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var es5_1 = require("uniforms/es5");
var BaseForm_1 = tslib_1.__importDefault(require("./BaseForm"));
function Validated(parent) {
    var _ = /** @class */ (function (_super) {
        tslib_1.__extends(_, _super);
        function _() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _.Validated = Validated;
        return _;
    }(es5_1.ValidatedForm.Validated(parent)));
    return _;
}
exports["default"] = Validated(BaseForm_1["default"]);
