$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function(){
    var vw;

    // The Random Floating Function
    function loopBalloon(id) {
        var winWidth = $(window).width() - 150;
        var winHeight = $(window).height() - 300;
        
        var randleft = Math.floor(Math.random() * winWidth);
        var randtop = Math.floor(Math.random() * winHeight);
        
        $(id).animate({ 
            left: randleft, 
            top: randtop 
        }, 8000, function() {
            // If ID is still b1, b2... (length 2), keep flying
            if ($(id).attr('id').length < 3) { 
                loopBalloon(id); 
            }
        });
    }

    // Buttons Sequence
    $('#turn_on').click(function(){
        $('.bulb').addClass('bulb-glow-yellow');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){ $('#play').fadeIn('slow'); });

        // 1. Make the bulbs glow
    $('.bulb').addClass('bulb-glow-yellow');
    
    // Smoothly transition the darkness of the overlay
    $('.dark-overlay').css('background', 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))');

    $('body').addClass('peach');
    $(this).fadeOut('slow').delay(5000).promise().done(function(){ 
        $('#play').fadeIn('slow'); 
    });

    });

    $('#play').click(function(){
        var audio1 = document.getElementById('song2'); audio1.play();
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){ $('#bannar_coming').fadeIn('slow'); });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){ $('#balloons_flying').fadeIn('slow'); });
    });

    // --- BALALEENN BUTTON (START RANDOM FLOAT) ---
    $('#balloons_flying').click(function() {
        $('.balloon-border').animate({top: -500}, 8000);
        
        // Make them visible and bring them onto the stage
        $('.balloons').css({ 'display': 'block', 'opacity': '0.9' });

        for (var i = 1; i <= 10; i++) {
            var bID = '#b' + i;
            $(bID).addClass(i % 2 === 0 ? 'balloons-rotate-behaviour-two' : 'balloons-rotate-behaviour-one');
            loopBalloon(bID); 
        }

        $(this).fadeOut('slow').delay(4000).promise().done(function() {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(2000).promise().done(function(){ $('#light_candle').fadeIn('fast'); });
    });

    // --- WALA3Y ELSHAM3AA (RE-ORGANIZE) ---



$('#light_candle').click(function(){
    $('.fuego').fadeIn('slow'); 
    $('.balloons').stop(); // Freeze the random floating
    
    var windowWidth = $(window).width();
    var vw = windowWidth / 2;
    
    // --- RESPONSIVE LAYOUT LOGIC ---
    if (windowWidth < 768) {
        // MOBILE VIEW: HBD on top row, SOSSY on bottom row
        var topRow = 100;    // Height for HBD
        var bottomRow = 220; // Height for SOSSY
        var spacing = 60;    // Horizontal gap between balloons

        var offsetRight = -25; 

    // Row 1: H B D (Shifted right)
    $('#b1').animate({top: topRow, left: (vw + offsetRight) - (spacing * 1.5)}, 2000).attr('id','b11');
    $('#b2').animate({top: topRow, left: (vw + offsetRight) - (spacing * 0.5)}, 2000).attr('id','b22');
    $('#b3').animate({top: topRow, left: (vw + offsetRight) + (spacing * 0.5)}, 2000).attr('id','b33');
        // Row 2: S O S S Y Y Y Y
        // We divide the remaining 7 balloons across the second row
        $('#b4').animate({top: bottomRow, left: vw - (spacing * 3)}, 2000).attr('id','b44');
        $('#b5').animate({top: bottomRow, left: vw - (spacing * 2)}, 2000).attr('id','b55');
        $('#b6').animate({top: bottomRow, left: vw - (spacing * 1)}, 2000).attr('id','b66');
        $('#b7').animate({top: bottomRow, left: vw}, 2000).attr('id','b77');
        $('#b8').animate({top: bottomRow, left: vw + (spacing * 1)}, 2000).attr('id','b88');
        $('#b9').animate({top: bottomRow, left: vw + (spacing * 2)}, 2000).attr('id','b99');
        $('#b10').animate({top: bottomRow, left: vw + (spacing * 3)}, 2000).attr('id','b1010');

    } else {
        // DESKTOP VIEW: One long straight line
        var targetTop = 150;
        var spacing = 100;

        $('#b1').animate({top: targetTop, left: vw-450}, 2000).attr('id','b11');
        $('#b2').animate({top: targetTop, left: vw-350}, 2000).attr('id','b22');
        $('#b3').animate({top: targetTop, left: vw-250}, 2000).attr('id','b33');
        $('#b4').animate({top: targetTop, left: vw-150}, 2000).attr('id','b44');
        $('#b5').animate({top: targetTop, left: vw-50}, 2000).attr('id','b55');
        $('#b6').animate({top: targetTop, left: vw+50}, 2000).attr('id','b66');
        $('#b7').animate({top: targetTop, left: vw+150}, 2000).attr('id','b77');
        $('#b8').animate({top: targetTop, left: vw+250}, 2000).attr('id','b88');
        $('#b9').animate({top: targetTop, left: vw+350}, 2000).attr('id','b99');
        $('#b10').animate({top: targetTop, left: vw+450}, 2000).attr('id','b1010');
    }

    $(this).fadeOut('slow').promise().done(function(){
        $('#wish_message').fadeIn('slow');
    });
});



    $('#wish_message').click(function(){
        var audio1 = document.getElementById('song2');audio1.pause();
        audio1.currentTime = 0; 
        var audio2 = document.getElementById('song1');audio2.play();
        $('.balloons h2').fadeIn(2000);
        $(this).fadeOut('slow').delay(3000).promise().done(function(){ $('#story').fadeIn('slow'); });
    });

    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
            var i = 1;
            function msgLoop(i) {
                var currentPara = $(".message p:nth-child(" + i + ")");
                currentPara.fadeIn(1500).delay(2500).promise().done(function() {
                    if (i < $(".message p").length) {
                        currentPara.fadeOut('slow').promise().done(function() { i++; msgLoop(i); });
                    }
                });
            }
            msgLoop(i);
        });
    });
});