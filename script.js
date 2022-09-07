
 let spanids=[];
 let span;


 $(function () {
  //déclenche la function au scroll 
  $(window).on("scroll", function () {

        //fonction pour récupérer l'attribut des span avec la class .count
        $('.shiva').each(function(i){

          span = $(this).find('.count');

          console.log(span);
          //test si l'élément est affiché sur la page
          fire = isOnScreen(span);

          if(fire){
            animCompteur(span);    
          }

        });

        //fonction pour animer le compteur
        function animCompteur(span){

          $({
            Counter: Number(span.text())
          }).animate({
            Counter: span.attr('data-total')
          }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $(span).text(Math.ceil(this.Counter));
            },
          });

        }
  });
 });

//fonction pour tester si l'élément est visible ou non
function isOnScreen(element) {
  var viewPortHeight = $(window).height(), // Viewport Height
      scrollTop = $(window).scrollTop(), // Scroll Top
      currElementPosY = $(element).offset().top,
      elementHeight = $(element).height();
 
  return (currElementPosY + elementHeight > scrollTop && currElementPosY < (viewPortHeight + scrollTop))
}



