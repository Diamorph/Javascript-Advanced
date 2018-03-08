var Timer={};

Timer.counterms = 0;
Timer.countersec = 0;
Timer.countermin = 0;

Timer.parseTimer = function () {
    var timestr = document.getElementById("timer");
    var substr = timestr.innerHTML.split(":");
    Timer.counterms = +substr[2];
    Timer.countersec = +substr[1];
    Timer.countermin = +substr[0];
};

Timer.changeValue = function () {
    Timer.parseTimer();
    Timer.counterms++;
    if(Timer.counterms>99){
      Timer.counterms = 0;
      Timer.countersec++;
    }
    if(Timer.countersec>59)
    {
      Timer.countersec = 0;
      Timer.countermin++;
    }
    Timer.print();
};

Timer.startTimer = function () {
    Timer.intervalHadler = setInterval(Timer.changeValue, 10);
};

Timer.stopTimer = function () {
    Timer.intervalHadler = clearInterval(Timer.intervalHadler);
    Timer.print();
};
Timer.resetTimer = function () {
    Timer.stopTimer();
    Timer.counterms = Timer.countersec = Timer.countermin = 0;
    Timer.print();
};

Timer.print = function () {
    var ms = ":";
    var sec = ":";
    var min = "";
    if (Timer.countermin < 10){
        min = "0";
    }
    if (Timer.countersec < 10){
        sec = ":0";
    }
    if (Timer.counterms< 10){
        ms = ":0";
    }
    var timestr = min + Timer.countermin + sec + Timer.countersec + ms + Timer.counterms;
    document.getElementById("timer").innerHTML = timestr;
};



