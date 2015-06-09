$(document).ready(function() {
	var text = "Ваше Ім'я";
	$("#first-name").focus(function() {
    $(this).addClass("active");
    if($(this).attr("value") == text) {
		$(this).attr("value", "");
	}
});
$("#first-name").blur(function() {
    $(this).removeClass("active");
    if($(this).attr("value") == "") {
		$(this).attr("value", text);
	}
});
});
$(document).ready(function() {
	var text = "Ваше Прізвище";
	$("#last-name").focus(function() {
    $(this).addClass("active");
    if($(this).attr("value") == text) {
		$(this).attr("value", "");
	}
});
$("#last-name").blur(function() {
    $(this).removeClass("active");
    if($(this).attr("value") == "") {
		$(this).attr("value", text);
	}
});
});
$(document).ready(function() {
	var text = "Ваш e-mail";
	$(".e-mail").focus(function() {
    $(this).addClass("active");
    if($(this).attr("value") == text) {
		$(this).attr("value", "");
	}
});
$(".e-mail").blur(function() {
    $(this).removeClass("active");
    if($(this).attr("value") == "") {
		$(this).attr("value", text);
	}
});
});
$(document).ready(function() {
	var text = "Ваш номер телефону";
	$(".telephone").focus(function() {
    $(this).addClass("active");
    if($(this).attr("value") == text) {
		$(this).attr("value", "");
	}
});
$(".telephone").blur(function() {
    $(this).removeClass("active");
    if($(this).attr("value") == "") {
		$(this).attr("value", text);
	}
});
});
$(document).ready(function() {
	$("#request-button").click(function() {
		alert("Заявку надіслано!")
	}
);
});