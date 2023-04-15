var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = flase;

function start() {
    timer = true;
    stopwatch()
}


function stop() {
    timer = false

}


function reset() {
    timer = false;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";

}


function stopwatch() {

    if (timer == true) {

        count = count + 1;

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
        }


        var sec0 = sec;
        var min0 = min;
        var hr0 = hr;
        var count0 = count;


        if (sec < 10) {
            sec0 = "0" + sec0;
        }

        if (min < 10) {
            min0 = "0" + min0;
        }

        if (hr < 10) {
            hr0 = "0" + hr0;
        }

        if (count < 10) {
            count0 = "0" + count0;
        }

        document.getElementById("count").innerHTML = count0;
        document.getElementById("sec").innerHTML = sec0;
        document.getElementById("min").innerHTML = min0;
        document.getElementById("hr").innerHTML = hr0;

        setTimeout("stopwatch()", 10);
    }

}

