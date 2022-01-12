"use strict";
(function () {
    var fullName = function (firstName) {
        var RestArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            RestArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(RestArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
