"use strict";
//Función anónima autoinvocada
(function () {
    var _a;
    var batman = "Batman";
    /*La palabra undefined normalmente es una palabra reservada pero
    en este caso vemos que sí es posible usarlo como nombre
    pero no es recomendable
    */
    var undefined = 'Superheroe1';
    document.write("I'm ".concat(batman) + "<br>");
    document.write("I'm ".concat(undefined) + "<br>");
    document.write(batman.toUpperCase() + "<br>");
    document.write(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente");
})();
