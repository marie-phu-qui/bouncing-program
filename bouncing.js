let screenWidth = $(window).width();
let screenHeight = $(window).height();
let square = $(".square");
let squareX = 0;
let squareY = 0;
let squareSpeedX = 1;
let squareSpeedY = 1;

const framePerSecond = 30;


$(document).ready(function(){
  $(document).click(function createSquare(e){
    $("body").append("<div class='square'<p>square</p></div>");
    $(".square").last().offset({left:e.pageX, top:e.pageY});

    e.pageX = squareX;
    e.pageY = squareY;

    screenWidth = $(window).width();
    screenHeight = $(window).height();
  });
});

setInterval(function makeMove(){
  // check is there are squares on the screen
  if($(".square")){
    // for all the squares do this
    $(".square").each(function(){
      squareX += squareSpeedX;
      squareY += squareSpeedY;
      
      // if touch right
      if(squareX>=screenWidth){
          squareSpeedX = -squareSpeedX;
          }   
      // if touch left     
      else if(squareX<=0){
          squareSpeedX = -squareSpeedX;      
        }
      // if touch top
      if(squareY>=screenHeight){
          squareSpeedY = -squareSpeedY;
      }
      // if touch bottom
      else if(squareY<=0){
          squareSpeedY = -squareSpeedY;
      }
    $(".square").offset({left:squareX, top:squareY})
    })
  };
},1000/framePerSecond);

