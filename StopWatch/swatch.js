var min=0
var sec=0
var msec=0
var interval1;
var minh1=document.getElementById("min");
var sech1=document.getElementById("sec");
var msech1=document.getElementById("msec");

var startbtnProp=document.getElementById("startbtn")



function timer(){
    
    msec++
    msech1.innerHTML=msec
    if(msec>=100){
        sec++
        sech1.innerHTML=sec
        msec=0

    }

    if(sec>=60){
        min++
        minh1.innerHTML=min
        sec=0
    }
}
function stop(){
    clearInterval(interval1)
    enabling()

}
function reset(){
    min=00
    sec=00
    msec=00
    minh1.innerHTML=min
    sech1.innerHTML=sec
    msech1.innerHTML=msec
    stop()
    enabling()
}
function start(){
    interval1=setInterval(timer,10)
    disabling()

}
function disabling(){
    startbtnProp.disabled=true;
}

function enabling(){
    startbtnProp.disabled=false;
}