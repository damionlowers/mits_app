$(document).ready(function(){
	// body...

if($(window).width()<=410){
	$(".weather pre").css("margin-left","0em");
}
});
$( window ).on( "orientationchange", function() {
  if ($(window).width()<=320) {
  	$(".weather pre").css("margin-left","3em");
  	$(".weather pre").append($(window).width()+"");
  }
  else{
  	$(".weather pre").css("margin-left","0em");
  	$(".weather pre").append($(window).width()+"");
  }
});