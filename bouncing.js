let screenWidth = $(window).width();
let screenHeight = $(window).height();
let square = $(".square");
let squareX;
let squareY;
let squareSpeedX = 5;
let squareSpeedY = 5;

// PROBLEME squareHeight and squareWidth return - NaN but parseFloat($(".square").css("height")) returns 50...
let squareHeight = parseFloat($(".square").css("height"));
let squareWidth = parseInt($(".square").css("width"));

const framePerSecond = 30;


$(document).ready(function(){
  $(document).click(function createSquare(e){
    $("body").append("<div class='square'<p>square</p></div>");
    $(".square").last().offset({left:e.pageX, top:e.pageY});

    squareX = e.pageX;
    squareY = e.pageY;

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
      if(squareX >= screenWidth - squareWidth){
          squareSpeedX = -squareSpeedX;
          }   
      // if touch left     
      else if(squareX <= 0){
          squareSpeedX = -squareSpeedX;      
        }
      // if touch top
      if(squareY >= screenHeight - squareHeight){
          squareSpeedY = -squareSpeedY;
      }
      // if touch bottom
      else if(squareY <= 0){
          squareSpeedY = -squareSpeedY;
      }
    $(".square").offset({left:squareX, top:squareY})
    })
  };
},1000/framePerSecond);