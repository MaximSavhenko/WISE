$(document).ready(function(){
	$("a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
	
	$('.projects__main-wrap , .blogs__main-wrap').slick({
		arrows: true,
		dots: true
	});
});

  
	
  

