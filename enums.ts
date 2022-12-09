(()=>{

    enum AudioLevel{
        min=2,
        medium=6,
        max=12
    }

    let currentAudio:AudioLevel = AudioLevel.max;

    document.write(currentAudio+"<br>");
    document.write(AudioLevel+"<br>");
    console.log(AudioLevel);

})()