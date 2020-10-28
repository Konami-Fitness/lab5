	document.getElementById("settingsform").addEventListener("submit", function(e) {
		e.preventDefault();
		player.name = document.getElementById("fname").value;
		location.replace("play.html");
	});
