//efectos del header
$(document).mousemove(function(e){

	var posX = e.clientX/100;
    var posY = e.clientY/10;

	$("#mov-1").css({"right": 60 + posX/2 + "%"})
	$("#mov-2").css({"left": 72 + posX/3 + "%"})
	$("#mov-3").css({"top": 100 - posY/2 + "%"})
	

});

//efecto parallax
$(window).scroll(function(){

	var posYY = window.pageYOffset;

	$("#parallax1").css({"left": 1500 - posYY/2 + "px"})
	

})