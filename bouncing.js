// on click make a square appear where the mouse has clicked

$(document).ready(function(){
    $(document).click(function(e){
        $("body").append(" <div class='square'><p>square</p></div> ");
        $(".square").offset({left:e.pageX,top:e.pageY});
    });
    
});