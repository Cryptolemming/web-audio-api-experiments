var button = document.getElementById('target');
button.addEventListener('click', Kick, false);

var audioCtx = new (window.AudioContext || window.webkitAudioContext);

function Kick() {

	var oscillator = audioCtx.createOscillator();

	var gain = audioCtx.createGain();

	// we are going to run automate parameters on the gain to mimic a kick drum
	oscillator.connect(gain);
	gain.connect(audioCtx.destination);

	var now = audioCtx.currentTime;

	oscillator.frequency.setValueAtTime(150, now);
	oscillator.frequency.exponentialRampToValueAtTime(0.001, now + 0.5);

	// .gain is a parameter we can automate
	// any parameter on any node can be automated etc if it implements the AudioParam interface
	// console.log(gain.gain) -> AudioParam { ... }
	gain.gain.setValueAtTime(5, now);
	gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

	oscillator.start(now);
	oscillator.stop(now + 0.5);
}