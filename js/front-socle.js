$(function()
	{
	$('*[data-toggle]').click(function ()
		{
		if ($(this).data("toggledest"))
			$($(this).data("toggledest")).toggleClass($(this).attr("data-toggle"));
		else
			$(this).toggleClass($(this).attr("data-toggle"));
		});

	$(document).on( 'scroll', function()
		{
		var dheight=$('body').height()-$(window).height();
		var aTop = $('header').height();

		// console.log (dheight*.75+' | '+$(this).scrollTop());

		// gestion du menu header
		if ( $(this).scrollTop()>=aTop && !$('header').hasClass("fixed"))
			$('header').addClass("fixed");
		else if ( $(this).scrollTop()==0 && $('header').hasClass("fixed"))
			$('header').removeClass("fixed");

		// gestion du bouton ontop
		if ($(this).scrollTop()>=dheight*.75  && !$('.ontop').hasClass("ontop_showed")  && dheight>0)
			$('.ontop').addClass("ontop_showed");
		else if ($(this).scrollTop()<dheight*.75  && $('.ontop').hasClass("ontop_showed"))
			$('.ontop').removeClass("ontop_showed");

		});

	$('.ontop').click(function()
		{
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
		});

	// Gestion des labels dans les formulaires

	focusable=$('.rowElem input, .rowElem select, .rowElem textarea');

	// Focus: Show label
	focusable.focus(function(){
		$("label[for='"+$(this).attr("id")+"']").addClass('show-label');
		});

	// Blur: Hide label if no value was entered (go back to placeholder)
	focusable.blur(function(){
		if ($(this).val() === '')
		  $("label[for='"+$(this).attr("id")+"']").removeClass('show-label');
		});

	// Etat initial
	focusable.each(function(index){
		if ($(this).val() != '')
		  $("label[for='"+$(this).attr("id")+"']").addClass('show-label');
		});

	// Page Effects !
	if($("body").attr("data-effectout")!=undefined)
		{
		$('a').click(function()
			{
			var that = this;

			$("body").addClass("effect_out");

			setTimeout(function()
				{
				window.location=that.href;
				},$("body").attr("data-effectout"));

			return false;
			});
		}

	if($("body").attr("data-effectin")!=undefined)
		{
		$(window).load( function()
			{
			setTimeout(function()
				{
				$("body").addClass("effect_in");
				},$("body").attr("data-effectin"));
			});
		}

	$(document).scroll();
	});