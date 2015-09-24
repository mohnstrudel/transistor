# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


jQuery ->
	pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")-6)
	# pgurl = document.URL.lastIndexOf("/")
	$('.nav-list-topbar li a').each ->
		if($(this).attr("href") == pgurl || $(this).attr("href") == '')
			$(this).parents('li:first').addClass('active')
			$('.nav-list-topbar li:first').removeClass('active')

	# console.log(document.URL)
	# console.log($('.nav li a').context)
# jQuery ->
# 	$('.nav li a').click (event)->
		
# 		$('.nav li').removeClass('active')
# 		$parent = $(this).parent()

# 		if (!$parent.hasClass('active'))
# 			$parent.addClass('active')

# 		console.log($(this).context)