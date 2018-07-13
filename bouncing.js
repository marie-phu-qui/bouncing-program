// change element size according to length of click


let square = document.getElementsByClassName("square");
let a = 10;
let screenWidth = $(window).width();
let screenHeight = $(window).height();


//JQUERY make element appear on click
$(document).ready(function(){
    $(document).click(function createSquare(e){
        $("body").append(" <div class='square'><p>square</p></div> "); 
        $(".square").last().offset({left:e.pageX, top:e.pageY});
        a = e.pageX;
        b = e.pageY;
    });
    // square object distance to edge top/right/botom/left - choose the smallest one

    //make element move towards right if it is closer to the right edge
    // 
    setInterval(function move(){
        $(".square").each(function(){
            if(parseFloat($(".square:last").css("left")) > (screenWidth/2)){
                setInterval(function goRight(){ 
                    a +=10;
                    $( ".square:last" ).css("left", a);
                }, 1000);   
            }
            else if(parseFloat($(".square:last").css("left")) < (screenWidth/2)) {
                setInterval(function goLeft(){ 
                    a -=10;
                    $( ".square:last" ).css("left", a);
                }, 1000);   
                };
            });
        }, 1000);
});