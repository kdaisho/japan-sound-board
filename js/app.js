'use strict';

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return;
    console.log(key);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    console.log(event);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const audios = document.querySelectorAll('audio');
audios.forEach(audio => audio.volume = .2);

window.addEventListener('keydown', playSound);