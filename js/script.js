//    JS
wow = new WOW(
    {
    boxClass:     'wow',     
    animateClass: 'animated',
    offset:       0,         
    mobile:       true,      
    live:         true        
  }
  )
  wow.init();
    //AUS
    AOS.init({
        offset:100,
        delay:50,
        duration: 500,
        easing:'lenear'
      });
      
   // COUNTER-4
function handleTickInit(tick) {

    var nextYear = (new Date()).getFullYear() + 1;
    
    Tick.count.down(nextYear + '-01-01').onupdate = function(value) {
        tick.value = value;
    };
}

    // JQ
$(document).ready(function(){
    // COUNTER-1
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // COUNTER-2
    $("#circle-1").Circlebar({
        maxValue: 20,
        fontSize: "14px",
        triggerPercentage: true
    });
    var t2 = new Circlebar({
        element: ".circle-2",
        maxValue: 252,
        dialWidth: 40,
        fontColor: "#777",
        fontSize: "30px",
        skin: "fire",
        type: "manual"
    });

    new Circlebar({
        element: "#circle-3",
        maxValue: 230,
        size: "240px",
        fontSize: "30px",
        type: "progress"
    });

    // SLICK SLIDER
    // single
    $('.wrapper').slick();
    // mutliply
    $('.wrapper2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      //center
      $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
      // particales
      $('#particles').particleground({
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 10000, // How many particles will be generated: one particle every n pixels
        dotColor: '#666666',
        lineColor: '#666666',
        particleRadius: 7, // Dot size
        lineWidth: 1,
        curvedLines: false,
        proximity: 100, // How close two dots need to be before they join
        parallax: true,
        parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
        onInit: function() {},
        onDestroy: function() {}
      });

});



