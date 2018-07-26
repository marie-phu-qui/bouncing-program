let screenWidth = $(window).width();
let screenHeight = $(window).height();
//square already defined
//let square = $(".square");
let squareNum = $(".square").length;
let squareX;
let squareY;
let squareSpeedX = [5];
let squareSpeedY = [5];
let i;

let squareHeight;
let squareWidth;
var squareColors = ["green","blue", "pink"];


const framePerSecond = 60;
const square = $('<div>').addClass('square').data({ squareSpeedX: 5, squareSpeedY: 5});


$(document).ready(function(){
  $(document).click(function createSquare(e){
    $("body").append('<div class="square"><p>square</p></div>');
    $(".square").last().offset({left:e.pageX - 25, top:e.pageY - 25}).css("background-color", squareColors[Math.floor(Math.random() * squareColors.length)]);

    squareHeight = parseFloat($(".square").eq(0).css("height"));
    squareWidth = parseInt($(".square").eq(0).css("width"));

    squareSpeedX.push(5);
    squareSpeedY.push(5);

    squareX = e.pageX;
    squareY = e.pageY;

    screenWidth = $(window).width();
    screenHeight = $(window).height();
  });
});

// check is there are squares on the screen - need to check regulary
setInterval(function checkSquare(){
  if($("div.square").length>0){
    squareNum = $(".square").length;
    //square already defined
    //square = $("div.square");

    //log the presence of square
    console.log("there is a square on screen");
    //call the movement of the square
    makeMove(square);
  }
 } , 1000/framePerSecond);



function makeMove(square){
      $(square).each(function(){
        // only keep for each
        //for(i=0; i<squareNum;i++){
          // check for current window size
          screenWidth = $(window).width();
          screenHeight = $(window).height();


          const squareSpeedX = $(this).data("squareSpeedX");
          const squareSpeedY = $(this).data("squareSpeedY");

          squareY = $(this).position().top;
          squareX = $(this).position().left;

          // if touch right
          if(squareX >= (screenWidth - squareWidth) ){
            squareSpeedX[i] = -squareSpeedX[i];
            }
          // if touch left
          else if(squareX <= 0){
            squareSpeedX[i] = -squareSpeedX[i];
            }
          // if touch bottom
          else if(squareY >= (screenHeight - squareHeight) ){
            squareSpeedY[i] = -squareSpeedY[i];
            }
          // if touch top
          else if(squareY <= 0){
            squareSpeedY[i] = -squareSpeedY[i];
            }
          
          // this will increment the position to create movement
          squareX += squareSpeedX[i];
          squareY += squareSpeedY[i];

          console.log(squareY, squareX, "square " + i, "touch right ="+ (squareX >= (screenWidth - squareWidth)), "touch left = "+(squareX <= 0), squareSpeedX[i], "touch bottom = "+(squareY >= (screenHeight - squareHeight)), "touch top + "+(squareY <= 0), squareSpeedY[i]);
          
          //this will apply the new position value to move the square 
          $(this).offset({top:squareY, left:squareX});

          console.log("square " + i, $(this).position())
          // only keep for each
          // }
        })
  }