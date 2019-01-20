function init() {
	console.log("init");
	$("#age-slider").change(function() {
		console.log("change");
		console.log($(this).val());
		$("#age-value").html($(this).val());
	});
}

$(document).ready(init);
