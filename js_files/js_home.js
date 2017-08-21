/**
 * Created by user on 30/07/2017.
 */
$(document).ready(function () {
    $( function showBannerHeader() {
        //the function that run the effect
        function runEffect() {
            // Most effect types need no options passed by default
            var options = {percent:50};
            // hide the banner header div first
            $( "#banner-header" ).hide();
            //show the effect after 1s
            setTimeout(function() {
                $( "#banner-header" ).show( "scale", options, 500);
            }, 0 );

        };//end of the runEffect()
         //call the function
        $( window ).on( "load", runEffect() )
    } );//end of the showBannerHeader()

    setTimeout(function() {
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function() {
                that.tick();
            }, delta);
        };


            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid rgba(255,255,255,0.8)}";
            document.body.appendChild(css);


    }, 1000 );


/*---------------------------return to the top -------------------------------*/
// ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 281) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate(   {scrollTop : 0}, 500   );// Scroll to top of body
    });


/*--------------navbar animation after the scroll--------*/
/*
$(window).scroll(function () {
    var scrollPosition=$(this).scrollTop();
    if(scrollPosition >=281){
        $(".main-nav-list").animate({
            fontSize:12
        },10);
        $(".navbar-default").animate({
            height:40

        },10);
    }
    else {
        $(".main-nav-list").animate({
            fontSize:24
        },10);
        $(".navbar-default").animate({
            height:56
        },10);
    }
});  */

/*removing the background from the services pics when hover*/
$(".pics").hover(function () {
    $(this).children("div:nth-child(1)").css("background-color","rgba(255,255,255,0)");
});
$(".pics").mouseleave(function () {
    console.log("oops");
    var id=$(this).attr("id");
    if (id=="pic1"){
        $(this).children("div:nth-child(1)").css("background-color","rgba(255,152,0,0.25)");
    }
    else if(id=="pic2") {
        $(this).children("div:nth-child(1)").css("background-color","rgba(186,104,200,0.25)");

    }
    else if(id=="pic3") {
        $(this).children("div:nth-child(1)").css("background-color","rgba(0,150,136,0.25)");

    }
});

/*----------------show the services pics---------*/
$(window).scroll(function () {
   var scrollPosition=$(this).scrollTop();




   if(scrollPosition<290){




   }

   else if(scrollPosition >=290){

       console.log("scroll");
       $("#pic1").addClass("animated slideInUp");

       $("#pic2").addClass("animated slideInUp");

       $("#pic3").addClass("animated slideInUp");

       $("#services-div-title h1:nth-child(1)").addClass("animated slideInUp");

   }

   if(scrollPosition>=669){
       $(".navbar-default").addClass("navbar-fixed-top");


   }
   else if(scrollPosition<669){
       $(".navbar-default").removeClass("navbar-fixed-top");
   }


});

$(window).scroll(function () {


});


    $('#circle-group1 .circle').circleProgress({
        value: 0.8,
        size: 200,
        fill: {
            gradient: ["#1DA1F2"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(80+ '<i>%</i>');
    });

    $('#circle-group2 .circle').circleProgress({
        value: 0.6,
        size: 200,
        fill: {
            gradient: ["#1DA1F2"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(60+ '<i>%</i>');
    });

    $('#circle-group3 .circle').circleProgress({
        value: 0.4,
        size: 200,
        fill: {
            gradient: ["#1DA1F2"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(40+ '<i>%</i>');
    });

    $('#circle-group4 .circle').circleProgress({
        value: 0.7,
        size: 200,
        fill: {
            gradient: ["#1DA1F2"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(70+ '<i>%</i>');
    });




});//end of the ready function
