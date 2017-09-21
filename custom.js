$(function(){
	
	var menu = $('#menu-bar'),
		pos = menu.offset();
					
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
				menu.slideDown(1000, function(){
					$(this).removeClass('default').addClass('fixed').fadeIn('fast');
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.slideDown(1000, function(){
						$(this).removeClass('fixed').addClass('default').fadeIn('fast');
				});
			}
		});

});


$(document).ready(function(){
  $('ul li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});