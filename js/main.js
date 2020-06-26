$(document).ready(function(){
	$("a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
	
	$('.projects__main-wrap').slick({
		arrows: true,
		dots: true
	});
	
	$('.blogs__main-wrap').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});
});

function openbox(box){
	display = document.getElementById(box).style.display;
	if(display=='none'){
		  document.getElementById(box).style.display='block';
	}else{
		  document.getElementById(box).style.display='none';
	}
}


  
	
  

