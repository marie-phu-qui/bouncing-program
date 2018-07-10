// on click make a square appear where the mouse has clicked

$(document).ready(function(){
    $(document).click(function(){
        $("body").append(" <div><p class='square'>square</p></div> ");
    });
});