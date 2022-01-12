"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '------');
    };
    var name = fullName('Marco');
    console.log(name);
})();
