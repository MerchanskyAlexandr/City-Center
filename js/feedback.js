$(document).ready(function() {
	var text = "Ваше Ім'я";
	$(".full-name").focus(function() {
    $(this).addClass("active");
    if($(this).attr("value") == text) {
		$(this).attr("value", "");
	}
});
$(".full-name").blur(function() {
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
	$("#request-button").click(function() {
		alert("Дякую за ваш відгук!")
	}
);
});
