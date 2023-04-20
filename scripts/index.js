const myInterval=setInterval('updateTimer()', 1000 );
function updateTimer() {
    future  = Date.parse("April 28, 2023 2:00:00");
    now     = new Date();
    diff    = future - now;

    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );

    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div class="time">' + d + '<span>days</span></div>' +
        '<div class="time">' + h + '<span>hours</span></div>' +
        '<div class="time">' + m + '<span>minutes</span></div>' +
        '<div class="time">' + s + '<span>seconds</span></div>' ;
        d=0 ;h=0 ; m=0 ;s=0;
        if(d==0 && h==0 && m==0 && s==0)
        {
           clearInterval(myInterval);   //to clear our interval when time is over
           show_Instruction();
        }

}
function show_Instruction(){ //jumps to instruction page
    document.querySelector('.arrow_img').addEventListener("click",function(){
        var new_window=window.open('pages/instruction.html','fullscreen'); //self will help to open new html file without opening new window.
        new_window.resizeTo(screen.availWidth, screen.availHeight);
    });
}
