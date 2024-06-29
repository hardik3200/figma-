document.addEventListener('DOMContentLoaded', () => {

									new Mmenu("#menu", {		theme 		: "white",
		navbars		: {
			content : [ "prev", "title" ]
		},
	
		setSelected	: {
			hover: true
		}}, {});
				
							});

$(document).ready(function(){

$('.middle-link li:first-child').addClass('active');
$('.tab').hide();
$('.tab:first-child').show();

// Click function
$('.middle-link li').click(function(){
  $('.middle-link li').removeClass('active');
  $(this).addClass('active');
  $('.tab').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});  
})




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayspeed:3000,
items:3,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
           
        }
    }
})
