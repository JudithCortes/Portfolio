addEventListener('load', function(){
    new Glider(document.querySelector('.galeria-port'), {
      slidesToShow: 1,
      slidesToScroll: 1 ,
        draggable: true,
        dots: '.indicadores',
        arrows: {
        prev: '.anterior',
        next: '.siguiente'
        },
        responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 400,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 800,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2.5,

      }
    }
  ]
    });
  });