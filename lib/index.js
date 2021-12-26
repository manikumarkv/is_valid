"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValid = exports.Greeter = void 0;
var Greeter = function (name) { return "Hello ".concat(name); };
exports.Greeter = Greeter;
var IsValid = /** @class */ (function () {
    function IsValid() {
    }
    IsValid.Mail = function (val) {
        return true;
    };
    IsValid.Email = function (val) {
        return true;
    };
    IsValid.IpAddress = function (val) {
        return true;
    };
    IsValid.AadharNumber = function (val) {
        return true;
    };
    IsValid.PanCard = function (val) {
        return true;
    };
    IsValid.PinCode = function (val) {
        return true;
    };
    IsValid.Phone = function (val) {
        return true;
    };
    return IsValid;
}());
exports.IsValid = IsValid;
