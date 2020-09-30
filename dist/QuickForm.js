"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var es5_1 = require("uniforms/es5");
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
var BaseForm_1 = tslib_1.__importDefault(require("./BaseForm"));
var ErrorsField_1 = tslib_1.__importDefault(require("./ErrorsField"));
var SubmitField_1 = tslib_1.__importDefault(require("./SubmitField"));
function Quick(parent) {
    var _ = /** @class */ (function (_super) {
        tslib_1.__extends(_, _super);
        function _() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _.prototype.getAutoField = function () {
            return AutoField_1["default"];
        };
        _.prototype.getErrorsField = function () {
            return ErrorsField_1["default"];
        };
        _.prototype.getSubmitField = function () {
            return SubmitField_1["default"];
        };
        _.Quick = Quick;
        return _;
    }(es5_1.QuickForm.Quick(parent)));
    return _;
}
exports["default"] = Quick(BaseForm_1["default"]);
