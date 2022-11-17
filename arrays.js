"use strict";
(function () {
    var Anumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var Bnumbers = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];
    var villains = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villains.forEach(function (v) { return document.write(v.toUpperCase() + "<br>"); });
    Bnumbers.forEach(function (b) { return document.write(b + "<br>"); });
})();
