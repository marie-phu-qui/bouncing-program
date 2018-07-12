// change element size according to length of click
let square = document.getElementsByClassName("square");
let a = 10;
// make element move toward screen edge
// square object distance to edge top/right/botom/left - choose the smallest one then move towards it

//get window user size and use in here according to where the square is

function moveTop(a){
    $(".square").css("left", a);
};

function moveRight(){
    $("div").style.left = parseInt("div".style.left) + 10 + 'px';
    moveTowardsEdge = setTimeout(moveRight,20);
};

function moveBottom(){
    $("div").style.top = parseInt("div".style.top) + 10 + 'px';
    moveTowardsEdge = setTimeout(moveBottom,20);
};

function moveLeft(){
    $("div").style.right = parseInt("div".style.right) + 10 + 'px';
    moveTowardsEdge = setTimeout(moveLeft,20);
};

function moveTowardsEdge() {
    moveTop();
};


//JQUERY make element appear on click
$(document).ready(function(){
    $(document).click(function createSquare(e){
        $("body").append(" <div class='square'><p>square</p></div> "); 
        $("div").last().offset({left:e.pageX, right:e.pageX, top:e.pageY, bottom:e.pageY});
        a = e.pageX;
    });
    if ($(".square")){
        setInterval(function(){ 
            a +=10;
            $(".square").css("left", a);
        }, 1000);
        //$(".square").each(function(index) {
        //});
}});