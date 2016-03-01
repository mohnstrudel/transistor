# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready ->

	update_price = ->
		voltage = $('#select_voltage').val()
		parsed_voltage = parseFloat(voltage).toFixed(2)
		$('#priceValue').text(parsed_voltage)

	update_price()

jQuery ->

	$('form').on 'click', '.add_fields', (event) ->
		time = new Date().getTime()
		regexp = new RegExp($(this).data('id'), 'g')
		$(this).before($(this).data('fields').replace(regexp, time))
		event.preventDefault()

	update_price = ->
		voltage = $('#select_voltage').val()
		parsed_voltage = parseFloat(voltage).toFixed(2)
		$('#priceValue').text(parsed_voltage)

	$('#select_voltage').change (event) ->
        update_price()