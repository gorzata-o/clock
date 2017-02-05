document.addEventListener("DOMContentLoaded", function () {


	var secondsHand = document.querySelector(".seconds");
	var minutesHand = document.querySelector(".minutes");
	var hoursHand = document.querySelector(".hours");
	var now = new Date();


	var setupClock = function() {
		var secs = now.getSeconds();
		var mins = now.getMinutes() * 60;
		var hours = now.getHours() * 3600;

		secondsHand.style.animationDelay = "-" + secs + "s";
		minutesHand.style.animationDelay = "-" + mins + "s";
		hoursHand.style.animationDelay = hours + "s";
	}

	setupClock();
});