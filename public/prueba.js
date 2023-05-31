$(document).ready(function() {
	$('#color').dialog({
		autoOpen: false,
	});
	$(".click").click(function(event) {
		var cara = $(this).attr("id");//obtenemos el valor del cuadro al que le dimos click
		var diente = $(this).parent().attr("id");
		// alert(cara);
		// alert(diente)
		$( "#color" ).dialog( "option", "position", [event.pageX,event.pageY]);//posicionamos el elemento donde dimos click
		$('#color').dialog('open');
		$(".select").click(function(event){
			var color = $(this).css('background-color');
			// alert("#" + diente + "#" + cara);
			$("#" + diente + ">" + "#" + cara).css('background-color', color);//establecemos el background a la clase cuadro
			$('#color').dialog('close');
			cara = "asd";
			diente = "asd";
		});
	});
});