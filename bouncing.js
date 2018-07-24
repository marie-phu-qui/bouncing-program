let screenWidth = $(window).width();
let screenHeight = $(window).height();
let square = $(".square");
let squareNum = $("div.square").length;
let squareX;
let squareY;
let squareSpeedX = [5];
let squareSpeedY = [5];
let i;

let squareHeight;
let squareWidth;

const framePerSecond = 60;


$(document).ready(function(){
  $(document).click(function createSquare(e){
    $("body").append('<div class="square"><p>square</p></div>');
    $(".square").last().offset({left:e.pageX - 25, top:e.pageY - 25});

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

// check is there are squares on the screen
//if($("div.square").length>0){
  setInterval(function makeMove(){
    squareNum = $("div.square").length;
    square = $(".square");
    // check is there are squares on the screen inside the Interval (cost more)

        $(".square").each(function(){
          for(i=0; i<squareNum;i++){
            squareX = $(this).position().left;
            squareY = $(this).position().top;

            // if touch right
            if(squareX >= (screenWidth - squareWidth) ){
              squareSpeedX[i] = -squareSpeedX[i];
              }
            // if touch left
            else if(squareX <= 0){
              squareSpeedX[i] = -squareSpeedX[i];
              }
            // if touch top
            else if(squareY >= (screenHeight - squareHeight) ){
              squareSpeedY[i] = -squareSpeedY[i];
              }
            // if touch bottom
            else if(squareY <= 0){
              squareSpeedY[i] = -squareSpeedY[i];
              }

            squareX += squareSpeedX[i];
            squareY += squareSpeedY[i];

            console.log(squareX, squareY, "square " + i, "touch right ="+ (squareX >= (screenWidth - squareWidth)), "touch left = "+(squareX <= 0), squareSpeedX[i], "touch top = "+(squareY >= (screenHeight - squareHeight)), "touch bottom + "+(squareY <= 0), squareSpeedY[i]);

            $(this).offset({left:squareX, top:squareY});
            }
          })
    }, 10000/framePerSecond);
//}