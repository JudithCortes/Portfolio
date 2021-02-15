addEventListener('load', function(){
    new Glider(document.querySelector('.galeria-port'), {
      slidesToShow: 2.5,
      slidesToScroll: 2 ,
        draggable: true,
        dots: '.ndicadores',
        arrows: {
        prev: '.anterior',
        next: '.siguiente'
        }
    });
  });