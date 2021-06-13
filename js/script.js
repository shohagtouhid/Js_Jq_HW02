// function textchange(){

// 	document.getElementById('h3').innerHTML="Ha ha ha..Just go back and work hard then you can change...";
// }

$('.btn_1').click(function(){
	alert("Enter with your own risk");
});
$('.btn_2').dblclick(function(){
	alert("Enter with your own risk");
});
// $('.btn_3').mouseenter(function(){
// 	alert("Enter with your own risk");
// });
// $('.btn_4').mouseleave(function(){
// 	alert("Enter with your own risk");
// });

// hide
$('.btnhd').click(function(){
	$('.msg').hide("slow");
});
// show
$('.btnshw').click(function(){
	$('.msg').show("slow");
});
// toggole
$('.btntoggle').click(function(){
	$('.msg').toggle(2000);
});

// fadeout
$('.btnfdt').click(function(){
	$('.msgf').fadeOut();
});
// show
$('.btnfdn').click(function(){
	$('.msgf').fadeIn("slow");
});
// toggole
$('.btnfdtgl').click(function(){
	$('.msgf').fadeToggle(2000);
});
// // fadeto
// $('.btnfdto').click(function(){
// 	$('.msgf').fadeTo(1000,.5);
// });

$(document).ready(function(){
	$('.th3').click(function(){
		$('.thp').slideToggle(1000);
	});
});