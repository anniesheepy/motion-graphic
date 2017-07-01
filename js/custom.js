         $(function() {
        function animateOneWay(el, startStyle, endStyle, duration, repeat){
          setTimeout(function(){animateOneWay(el, startStyle, endStyle, duration, repeat)}, repeat);
          el.css(startStyle);
          el.animate(endStyle, duration, 'linear');
        }
        
        function animateTwoWay(el, startStyle, endStyle, duration, repeat){
          setTimeout(function(){animateTwoWay(el, startStyle, endStyle, duration, repeat)}, repeat);
          el.css(startStyle);
          el.animate(endStyle, duration, 'linear')
        }
            
        animateOneWay($('#plane'),{left: 750}, {left: -100}, 6000, 7000);
        animateTwoWay($('#plane2'),{left: -100}, {left: 850}, 8000, 9000);
      });
        
    $(function($) {
    $('.typist').typist({
		speed: 12,
		text: 'Order your \n "CITY MEANDER" \n dvd today!'
	});
});

    $("#order").click(function(){
        $(function($) {
            	$('.typist').typistRemove(43);
	$('.typist').typist({
		speed: 12,
		text: 'Order your \n "CITY MEANDER" \n dvd today!'
        });
    });
});
        function a(){
                    var $logo = $('#logo');
                    $logo.lazylinepainter( 
                    {
                    "svgData": pathObj,
                    "strokeWidth": 2,
                    "strokeColor": "#000",
                    'reverse': true,
                    'ease': 'easeInOutExpo',
                    'drawSequential': false,
                    }).lazylinepainter('paint');
                }
        
        function b(){
            setTimeout(function(){$("#bknyc").show()},5000);
        }
        
        function c(){
            setTimeout(function()
            {$('#logo').hide()}, 5000);
        }
        
        $(document).ready(function(){
            $("#buttonN").click(function(){
                if($("#bknyc") && $("#taipei101") && $("#eiffel")!== null){
                    $('#bknyc').hide();
                    $('#taipei101').hide();
                    $('#eiffel').hide();
                    $("#logo").show();
                }
                $.when(a(), b()).then(c);
            });
        });
        
        function d(){
                    var $logo2 = $('#logo2');
                    $logo2.lazylinepainter( 
                    {
                    "svgData": pathObjTwo,
                    "strokeWidth": 4,
                    "strokeColor": "#000",
                    'reverse': true,
                    'ease': 'easeInOutExpo',
                    'drawSequential': false,
                    }).lazylinepainter('paint');
                }
        
        function e(){
            setTimeout(function(){$("#taipei101").show()},5000);
        }
        
        function f(){
            setTimeout(function()
            {$('#logo2').hide()}, 5000);
        }
        
        $(document).ready(function(){
            $("#buttonT").click(function(){
                if($("#bknyc") && $("#taipei101") && $("#eiffel")!== null){
                    $('#bknyc').hide();
                    $('#taipei101').hide();
                    $('#eiffel').hide();
                    $("#logo2").show();
                }
                $.when(d(), e()).then(f);
            });
        });
        
        function g(){
                    var $logoP = $('#logoP');
                    $logoP.lazylinepainter( 
                    {
                    "svgData": pathObjThree,
                    "strokeWidth": 4,
                    "strokeColor": "#000",
                    'reverse': true,
                    'ease': 'easeInOutExpo',
                    'drawSequential': false,
                    }).lazylinepainter('paint');
                    console.log("im doing it");
                }
        
        function h(){
            setTimeout(function(){$("#eiffel").show()},5000);
        }
        
        function i(){
            setTimeout(function()
            {$('#logoP').hide()}, 5000);
        }
        
        $(document).ready(function(){
            $("#buttonP").click(function(){
                if($("#bknyc") && $("#taipei101") && $("#eiffel")!== null){
                    $('#bknyc').hide();
                    $('#taipei101').hide();
                    $('#eiffel').hide();
                    $("#logoP").show();
                }
                $.when(g(), h()).then(i);
            });
        });