"use strict";
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 2] = "min";
        AudioLevel[AudioLevel["medium"] = 6] = "medium";
        AudioLevel[AudioLevel["max"] = 12] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    document.write(currentAudio + "<br>");
    document.write(AudioLevel + "<br>");
    console.log(AudioLevel);
})();
