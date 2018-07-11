// change element size according to length of click

//make element appear on click
$(document).ready(function(){
    $(document).click(function(e){
        $("body").append(" <div class='square'><p>square</p></div> ");
        $("div").last().offset({left:e.pageX,top:e.pageY});
        moveTowardsEdge();
    });
});

// make element move toward screen edge
// square object distance to edge top/right/botom/left - choose the smallest one then move towards it

//get window user size and use in here according to where the square is

function moveTowardsEdge(e) {
};

function moveTop(){
    $("div").style.bottom = parseInt("div".style.bottom) + 10 + 'px';
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
