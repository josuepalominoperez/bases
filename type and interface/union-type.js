"use strict";
(function () {
    var myCustomVariable = 'Dad';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Buddy',
        age: 40,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
