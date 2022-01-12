"use strict";
(function () {
    var fullName = function (firstName, lastName, opc) {
        if (opc === void 0) { opc = false; }
        if (opc) {
            return "".concat(firstName, " ").concat(lastName || '-----').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '-----');
        }
    };
    console.log(fullName('Tony', 'Stark', true));
})();
