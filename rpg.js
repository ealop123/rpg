function main () {
	$("#_1_new").click(function(){
		var newHtml = $("#_2_new").html();
		$("#screenContainer").html(newHtml);
	});
}

$(main);