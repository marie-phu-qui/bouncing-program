// change element size according to length of click


let screenWidth = $(window).width();
let screenHeight = $(window).height();

function moveToHorizon(elm, position, orientation){
  if(orientation)
  {
    //direction vers la droite
    position +=100;
  }
  else
  {
    //direction vers la gauche
    position -=100;
  }

  elm.css("left", position);
  return position;
}

function moveToVertical(elm, position, orientation){
  if(orientation)
  {
    //direction vers la droite
    position +=100;
  }
  else
  {
    //direction vers la gauche
    position -=100;
  }

  elm.css("top", position);
  return position;
}

//fonction responsable du mouvement d'un element
function move(elm, a, b, screenWidth, screenHeight)
{

  setInterval(function(){

    // l'element n'a toucher la bordure gauche
    if(elm.position().left < 0)
    {
      //On ajoute une classe indiquant la direction de l'element
      elm.removeClass( "goRight" );
      a = 0;
      a = moveToHorizon(elm, a, true);
    }

    // l'element n'a toucher la bordure gauche
    if(elm.position().top < 0)
    {
      //On ajoute une classe indiquant la direction de l'element
      elm.removeClass( "goTop" );
      b = 0;
      b = moveToVertical(elm, a, true);
    }

    // l'element n'a pas toucher la bordure droite ( left n'est pas encore egal à la taille de l'ecran)
    if(elm.position().left < screenWidth)
    {

      //on test si l'element va vers la gauche
      if( elm.hasClass('goRight') )
      {
        a = moveToHorizon(elm, a, false);
      }
      else
      {
        console.log("oki4");
        a = moveToHorizon(elm, a, true);
      }
    }
    else
    {
      elm.addClass('goRight');
      a = screenWidth;
      a = moveToHorizon(elm, a, false);
    }

  }, 1000);

}

//JQUERY make element appear on click
$(document).ready(function(){
    $(document).click(function createSquare(e){
        $("body").append(' <div class="square goRight"<p>square</p></div> ');
        $(".square").last().offset({left:e.pageX, top:e.pageY});

        a = e.pageX;
        b = e.pageY;

        //on reinitalise ces variable afin d'etre sur d'avoir la bonne taille lorsque l'utilisateur a cliqué
        screenWidth = $(window).width();
        screenHeight = $(window).height();

        $(".square").each(function(index){

          position = $(this).position();

          move($(this), position.left, position.top, screenWidth, screenHeight);

        });

    });

    // square object distance to edge top/right/botom/left - choose the smallest one

    //make element move towards right if it is closer to the right edge
    //
    // setInterval(function move(){
    //     $(".square").each(function(){
    //         if(parseFloat($(".square:last").css("left")) > (screenWidth/2)){
    //             setInterval(function goRight(){
    //                 a +=10;
    //                 $( ".square:last" ).css("left", a);
    //             }, 1000);
    //         }
    //         else if(parseFloat($(".square:last").css("left")) < (screenWidth/2)) {
    //             setInterval(function goLeft(){
    //                 a -=10;
    //                 $( ".square:last" ).css("left", a);
    //             }, 1000);
    //             };
    //         });
    //     }, 1000);
});
