let seconds = "00";
let minutes = parseInt(prompt("How many minutes of pomodoro today?"));

let bellAudio = new Audio("./audio/bell.mp3");
let clickAudio = new Audio("./audio/click.mp3");


function template() {
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
}

function startTimer() {
	clickAudio.play();
	seconds = 59;
	minutes = minutes - 1;

	document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
	
	let minutesInterval = setInterval(minutesTimer, 60000);

	let secondsInterval = setInterval(secondsTimer, 1000);

	function minutesTimer() {
		minutes = minutes - 1;
		document.querySelector("#minutes").innerHTML = minutes;
	}

	function secondsTimer() {
		seconds = seconds - 1; 
		document.querySelector("#seconds").innerHTML = seconds;

		if (seconds <= 0) {
			if (minutes <= 0) {
				// Clears the interval i.e. stops the counter
				clearInterval(minutes);
				clearInterval(seconds);

				document.getElementById("done").innerHTML =
					"Session Completed!! Take a Break";

				bellAudio.play();
			}
			session_seconds = 60;
		}
	}
}