$(document).ready(function(){
	$(function() {  
		$('#up').click(function() {  
		  $('body,html').animate({scrollTop:0},1500);  
		  return false;  
		})  
	  })  

	$(window).on("scroll", function() {
		// $("header").toggleClass("active", $(this).scrollTop() > $(window).height());
		$("header").toggleClass("active", $(this).scrollTop() > 0);
	});

	$(function() {

		let filtr = $("[data-filtr]");
		filtr.on("click", function(event){
			event.preventDefault();
			let cat = $(this).data('filtr');
			if(cat == 'All') {
				$("[data-cat]").removeClass("hide");
			} else {
				$("[data-cat]").each(function(){
					let workCat = $(this).data('cat');
					if(workCat != cat) {
						$(this).addClass('hide')
					} else {
						$(this).removeClass('hide')
					}
				});
			}
		});
		$(".projects__tabs .projects__tabs-link").click(function() {
			$(".projects__tabs .projects__tabs-link").removeClass("active").eq($(this).index()).addClass("active");
		}).eq(0).addClass("active");
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
				arrows: false,
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
		  document.getElementById(box).style.display='flex';
	}else{
		  document.getElementById(box).style.display='none';
	}
}


function toggleMobileMenu() {
	var btnMenu = document.querySelector('.header__btn-menu'),
		navWrap = document.querySelector('.header__wrap-nav');
  
	btnMenu.onclick = function () {
	  document.body.classList.toggle('overflow');
	  btnMenu.classList.toggle('active');
	  navWrap.classList.toggle('active');
	};
};

toggleMobileMenu();


  
	
  

