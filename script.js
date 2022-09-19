let min = 0;
let sec = 0;
let milisec = 0;

let timer = false;


function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;

}
function reset() {
    timer = false;
    min = 0;
    sec = 0;
    milisec = 0;
    document.getElementById("mainminute").innerHTML = "00";
    document.getElementById("mainsecond").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "00";

}


function stopwatch() {

    if (timer == true) {
        milisec = milisec + 1;
        if (milisec == 100) {
            sec = sec + 1;
            milisec = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        let minString = min;
        let sectring = sec;
        let miliString = milisec;

        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            sectring = "0" + sectring;
        }
        if (milisec < 10) {
            miliString = "0" + miliString;
        }

        document.getElementById("mainminute").innerHTML = minString;
        document.getElementById("mainsecond").innerHTML = sectring;
        document.getElementById("milliseconds").innerHTML = miliString;

        setTimeout("stopwatch()", 10)
    }


}