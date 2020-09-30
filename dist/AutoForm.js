"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var es5_1 = require("uniforms/es5");
var ValidatedQuickForm_1 = tslib_1.__importDefault(require("./ValidatedQuickForm"));
function Auto(parent) {
    var _ = /** @class */ (function (_super) {
        tslib_1.__extends(_, _super);
        function _() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _.Auto = Auto;
        return _;
    }(es5_1.AutoForm.Auto(parent)));
    return _;
}
exports["default"] = Auto(ValidatedQuickForm_1["default"]);
