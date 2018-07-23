let screenWidth = $(window).width();
let screenHeight = $(window).height();
let square = $(".square");
let squareX;
let squareY;
let squareSpeedX = 5;
let squareSpeedY = 5;

// PROBLEME squareHeight and squareWidth return - NaN but parseFloat($(".square").css("height")) returns 50...
let squareHeight;
let squareWidth;

const framePerSecond = 30;


$(document).ready(function(){
  $(document).click(function createSquare(e){
    $("body").append('<div class="square"><p>square</p></div>');
    $(".square").last().offset({left:e.pageX - 25, top:e.pageY - 25});

    squareHeight = parseFloat($(".square").eq(0).css("height"));
    squareWidth = parseInt($(".square").eq(0).css("width"));

    squareX = e.pageX;
    squareY = e.pageY;

    screenWidth = $(window).width();
    screenHeight = $(window).height();
  });
});

setInterval(function makeMove(){
  // check is there are squares on the screen
  if($(".square").length > 0)
  {
    // for all the squares do this
    $(".square").each(function(){

      squareX = $(this).position().left;
      squareY = $(this).position().top;

      squareX += squareSpeedX;
      squareY += squareSpeedY;

      // if touch right
      if(squareX >= (screenWidth - squareWidth) ){
        squareSpeedX = -squareSpeedX;
          }
      // if touch left
      else if(squareX <= 0){
        squareSpeedX = -squareSpeedX;
        }
      // if touch top
      else if(squareY >= ( screenHeight - squareHeight) ){
        squareSpeedY = -squareSpeedY;
      }
      // if touch bottom
      else if(squareY <= 0){
        squareSpeedY = -squareSpeedY;
      }
      $(this).offset({left:squareX, top:squareY})
    })
  };
},1000/framePerSecond);
