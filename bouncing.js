// change element size according to length of click



// make element move toward screen edge
// square object distance to edge top/right/botom/left - choose the smallest one then move towards it

//get window user size and use in here according to where the square is


function moveTop(){
    let square = document.getElementsByClassName("square");
    square.style.bottom = parseInt(square.style.bottom) + 10 + "px";
    moveTowardsEdge = setTimeout(moveTop,20);
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
    let square = document.getElementsByClassName("square");
    moveTop();
};


//JQUERY make element appear on click
$(document).ready(function(){
    $(document).click(function(e){
        $("body").append(" <div class='square'><p>square</p></div> ");
        $("div").last().offset({left:e.pageX, right:e.pageX, top:e.pageY, bottom:e.pageY});
        moveTowardsEdge();
    });
});