'use strict';

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    stopSound(event);
    if (!audio) return;
    console.log(key);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function stopSound(event) {
    if (event.keyCode === 32) {
        event.preventDefault();
        audios.forEach(audio => audio.pause());
    }
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    console.log(event);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const audios = document.querySelectorAll('audio');
audios.forEach(audio => audio.volume = .25);

window.addEventListener('keydown', playSound);