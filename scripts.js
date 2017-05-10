jQuery(document).ready(function($) {
   // Votre code ici avec les appels à la fonction $()

   $('#main_menu a').on('click mouseover', function() {
      var $this = $(this);
      var id = $this.attr('rel');
      var $currentTitle = $('#' + id);
      $currentTitle.fadeIn(400).siblings('.highlight').fadeOut(100);
   });

	var selectedClass = "";
	$(".fil-cat").click(function(){
	  selectedClass = $(this).attr("data-rel");
    $("#portfolio_grid").fadeTo(100, 0.1);
	  $("#portfolio_grid .tile").not("."+selectedClass).fadeOut().removeClass("scale-anm");
    setTimeout(function() {
      $("#portfolio_grid .tile").filter("."+selectedClass).fadeIn().addClass("scale-anm");
      $("#portfolio_grid").fadeTo(300, 1);
    }, 300);
  });


  $('#navigation li a').on('click', function(){
   $('li a.menu_active').removeClass('menu_active');
   $(this).addClass('menu_active');
  });

  $(".iconGlow").mouseover(function () {
   $(this).attr('src', $(this).data("hover"));
   }).mouseout(function () {
   $(this).attr('src', $(this).data("src"));
  });

  $('socialIcons').mouseover(function(){
    $('icons-large').removeClass('iconGlow');
    $(this).addClass('iconGlowPink');
  });

});
