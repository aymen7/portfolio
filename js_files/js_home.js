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
   /*--------------main nav scrool---------------*/

    if(scrollPosition>= 1750 ){
        console.log("enter the contact div");
        $(".main-nav-list").each(function () {
            if($(this).hasClass("active")){
                console.log("the id of teh active class "+$(this).attr("id"));
                $(this).removeClass("active");
            }
        });
        $("#link-3").removeClass('active');
        $("#link-4").addClass('active');

    }
    if(scrollPosition>= 1700 ){
        $(".main-nav-list").each(function () {
            if($(this).hasClass("active")){
                $(this).removeClass("active");
            }
        });
        $("#link-3").addClass('active');

    }
    if(scrollPosition >=1500){
        $(".main-nav-list").each(function () {
            if($(this).hasClass("active")){
                $(this).removeClass("active");
            }
        });
        $("#link-2").addClass('active');

    }

    if(scrollPosition>=662 && scrollPosition<710){
        $(".main-nav-list").each(function () {
            if($(this).hasClass("active")){
                $(this).removeClass("active");
            }
        });
        $("#link-1").addClass('active');

    }



    $('#contact-div').appear($("#link-4").addClass('active'));






   if(scrollPosition>=200 ){
       $(".main-nav-list").each(function () {
           if($(this).hasClass("active")){
               $(this).removeClass("active");
           }
       });
       $("#link-1").addClass('active');



       $("#about-div-title h1").addClass("animated slideInUp");
       $("#text-div h1").addClass("animated slideInUp");
       $("#text-div p").addClass("animated slideInUp");
       $("#photo-div ").addClass("animated slideInUp");

   }
   if(scrollPosition >=770){
       $(".main-nav-list").each(function () {
           if($(this).hasClass("active")){
               $(this).removeClass("active");
           }
       });
       $("#link-2").addClass('active');

       $("#pic1").addClass("animated slideInUp");

       $("#pic2").addClass("animated slideInUp");

       $("#pic3").addClass("animated slideInUp");

       $("#services-div-title h1:nth-child(1)").addClass("animated slideInUp");

   }
       if(scrollPosition>= 1700 ){
           $(".main-nav-list").each(function () {
               if($(this).hasClass("active")){
                   $(this).removeClass("active");
               }
           });
           $("#link-3").addClass('active');

       }

   if(scrollPosition>=669){
       $(".navbar-default").addClass("navbar-fixed-top");

   }
   else if(scrollPosition<669){
       $(".navbar-default").removeClass("navbar-fixed-top");
   }


});






// Place comments here...




// Chart Script - Used for Skill-set section
    $.circleProgress = {
        defaults: {
            value: 0,
            size: 180, // Change this for height
            startAngle: -Math.PI,
            thickness: 100,
            fill: {
                gradient: ["#1DA1F2"]
            },
            emptyFill: 'rgba(0,0,0,0.2)',
            animation: {
                duration: 1200,
                easing: 'circleProgressEasing'
            }
        }
    };
    $.easing.circleProgressEasing = function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    $.fn.circleProgress = function (options) {
        if (options == 'widget') return this.data('circle-progress');

        options = $.extend({}, $.circleProgress.defaults, options);

        return this.each(function () {
            var el = $(this),
                size = options.size,
                radius = size / 2,
                thickness = size / 14,
                value = options.value,
                startAngle = options.startAngle,
                emptyArcFill = options.emptyFill,
                arcFill;

            if ($.isNumeric(options.thickness)) thickness = options.thickness;

            var canvas = el.data('circle-progress');

            if (!canvas) {
                canvas = $('<canvas>').prependTo(el)[0];
                el.data('circle-progress', canvas);
            }

            canvas.width = size;
            canvas.height = size;

            var ctx = canvas.getContext('2d');

            if (!options.fill) throw Error("The fill is not specified!");

            if (options.fill.color) arcFill = options.fill.color;

            if (options.fill.gradient) {
                var gr = options.fill.gradient;
                if (gr.length == 1) {
                    arcFill = gr[0];
                } else if (gr.length > 1) {
                    var lg = ctx.createLinearGradient(0, 0, size, 0);
                    for (var i = 0; i < gr.length; i++)
                        lg.addColorStop(i / (gr.length - 1), gr[i]);
                    arcFill = lg;
                }
            }

            if (options.fill.image) {
                var img = new Image();
                img.src = options.fill.image;
                img.onload = function () {
                    var bg = $('<canvas>')[0];
                    bg.width = size;
                    bg.height = size;
                    bg.getContext('2d').drawImage(img, 0, 0, size, size);
                    arcFill = ctx.createPattern(bg, 'no-repeat');

                    if (!options.animation) draw(value);
                }
            }

            if (options.animation) drawAnimated(value);
            else draw(value);

            function draw(v) {
                ctx.clearRect(0, 0, size, size);
                drawArc(v);
                drawEmptyArc(v);
            }

            function drawArc(v) {
                ctx.save();
                ctx.beginPath();
                ctx.arc(radius, radius, radius - thickness / 2, startAngle, startAngle + Math.PI * 2 * v);
                ctx.lineWidth = thickness;
                ctx.strokeStyle = arcFill;
                ctx.stroke();
                ctx.restore();
            }

            function drawEmptyArc(v) {
                ctx.save();
                if (v < 1) {
                    ctx.beginPath();
                    if (v <= 0) ctx.arc(radius, radius, radius - thickness / 2, 0, Math.PI * 2);
                    else ctx.arc(radius, radius, radius - thickness / 2, startAngle + Math.PI * 2 * v, startAngle);
                    ctx.lineWidth = thickness;
                    ctx.strokeStyle = emptyArcFill;
                    ctx.stroke();
                }
                ctx.restore();
            }

            function drawAnimated(v) {
                el.trigger('circle-animation-start');

                $(canvas).css({
                    progress: 0
                }).animate({
                        progress: v
                    },
                    $.extend({}, options.animation, {
                        step: function (p) {
                            draw(p);
                            el.trigger('circle-animation-progress', [p / v, p]);
                        },

                        complete: function () {
                            el.trigger('circle-animation-end');
                        }
                    }));
            }
        });
    };
    function animateElements(e, init) {
        if(init){
            $('.progressbar').data('animate', false);
        }


        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');

            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                //$(this).data('animate', false); // Change this 'false -or- true' - Currently set to false so that each time a user clicks on 'Skill-set' link, animation occurs
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    thickness: "auto", // Change this for thickness
                    fill: {
                        color: '#1DA1F2'
                    }
                }).on('circle-animation-end', function(){
                    //$(this).parent().data('animate', false);
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('.percent').text((stepValue * 100).toFixed(1) + "%");
                    // NOTE: Change '.toFixed(0)' to '.toFixed(1)' to get 1 decimal place to the right...
                }).stop();
            }
        });

    }
    //animateElements();
    $(window).scroll(animateElements);

/*---------form manipulation and ajax call ---------------*/


    $( "#contact-form" ).submit(function( event ) {

        $.ajax({
            type: "POST",
            url: "php/contact_script.php",
            //data:data,
            data : $("#contact-form input,#contact-form textarea").serialize(),
            success: function(data) {
                $("#contact-form").trigger("reset");
                $('#submit_btn .fa-paper-plane').addClass("hidden");
                $('#submit_btn .fa-check').removeClass("hidden");

                setTimeout(function () {
                    $('#submit_btn .fa-paper-plane').removeClass("hidden");
                    $('#submit_btn .fa-check').addClass("hidden");
                },5000);
            },
            error:function () {
                alert("erruer dans la transmition du données ");

            }
        });



        event.preventDefault();
    });

   //inspect the element causing scroll bar problem
    var all = document.getElementsByTagName("*"), i = 0, rect, docWidth = document.documentElement.offsetWidth;
    for (; i < all.length; i++) {
        rect = all[i].getBoundingClientRect();
        if (rect.right > docWidth || rect.left < 0){
            console.log(all[i]);
        }
    }
    var w = $(window).width();
    var h = $(window).height();
    $('header').css('height', h);

    if(w>=320&&w<481)
    {
        $('header').css('width', w);
        $('header').css('margin-left', 0.1);
        $('#header-background').css('width', w);
        $('#navbar-background').css('width', w);
        //$('#banner-row').css('width', w);
        $('#nav-row').css('width', w);
        $('#skills-div').css('width', w);
        $('.navbar-default').css('width', w);
        $('.navbar-header').css('width', w);
        //$('.navbar').css('width', w);
        $('#skills-div').css('width', w);
    }
    if(w>=1200)
    {
        $('header').css('width', w);
        $('header').css('margin-left', 0.1);
        $('#header-background').css('width', w);
        $('#banner-row').css('width', w);
        $('#skills-div').css('width', w);
        $('.navbar-default').css('width', w);
        $('.navbar').css('width', w);
        $('#skills-div').css('width', w);
    }













});//end of the ready function
