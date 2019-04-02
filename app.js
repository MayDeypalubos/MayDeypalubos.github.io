
// navbar on scroll
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

// onclick navigation bar
$(".nav-link").click(function() {
  $(".nav-link").css("color", "");
  $(this).css("color", "var(--highlightColor)");
});

// skills bar on scroll
var skillsDiv = $('#skills');
$(window).on('scroll', function(){
	var winT = $(window).scrollTop(),
  	winH = $(window).height(),
  	skillsT = skillsDiv.offset().top;
  if(winT + winH  > skillsT){
  	$('.skill').each(function(){
      $(this).find('.skill_level').animate({
        width:$(this).attr('data-percent')
      },6000);
    });
  }
});