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
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid rgba(32,194,14,1)}";
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




});//end of the ready function
