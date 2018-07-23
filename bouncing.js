let screenWidth = $(window).width();
let screenHeight = $(window).height();
let square = $(".square");
<<<<<<< HEAD
let squareX;
let squareY;
let squareSpeedX = 5;
let squareSpeedY = 5;

// PROBLEME squareHeight and squareWidth return - NaN but parseFloat($(".square").css("height")) returns 50...
let squareHeight;
let squareWidth;
=======
let squareX = 0;
let squareY = 0;
let squareSpeedX = 1;
let squareSpeedY = 1;
>>>>>>> bcb9c5d3050ea1a0376f1084d7e970691f43fea3

const framePerSecond = 30;


$(document).ready(function(){
  $(document).click(function createSquare(e){
<<<<<<< HEAD
    $("body").append('<div class="square"><p>square</p></div>');
    $(".square").last().offset({left:e.pageX - 25, top:e.pageY - 25});

    squareHeight = parseFloat($(".square").eq(0).css("height"));
    squareWidth = parseInt($(".square").eq(0).css("width"));

    squareX = e.pageX;
    squareY = e.pageY;
=======
    $("body").append("<div class='square'<p>square</p></div>");
    $(".square").last().offset({left:e.pageX, top:e.pageY});

    e.pageX = squareX;
    e.pageY = squareY;
>>>>>>> bcb9c5d3050ea1a0376f1084d7e970691f43fea3

    screenWidth = $(window).width();
    screenHeight = $(window).height();
  });
});

setInterval(function makeMove(){
  // check is there are squares on the screen
<<<<<<< HEAD
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
=======
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

>>>>>>> bcb9c5d3050ea1a0376f1084d7e970691f43fea3
