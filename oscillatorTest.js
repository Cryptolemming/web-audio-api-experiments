var button = document.getElementById('target');
button.addEventListener('click', playSound, false) ;

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound() {

	var oscillator = audioCtx.createOscillator();
	oscillator.type = 'sine';
	oscillator.frequency.value = 1000;
	oscillator.connect(audioCtx.destination);

	oscillator.start(0);
	oscillator.stop(3);
}
