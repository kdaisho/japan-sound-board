'use strict'

function playSound(event) {
  const dataKey =
    event.type === 'keydown' ? event.keyCode : event.target.dataset.key
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`)
  const key = document.querySelector(`.key[data-key="${dataKey}"]`)
  stopSound(event)
  if (!audio) return

  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

function stopSound(event) {
  if (event.type === 'click' || event.keyCode === 32) {
    event.preventDefault()
    audios.forEach(audio => audio.pause())
  }
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

const audios = document.querySelectorAll('audio')
audios.forEach(audio => (audio.volume = 0.25))

window.addEventListener('keydown', playSound)

const currentYear = new Date().getFullYear()
document.getElementById('year').innerHTML = currentYear

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', playSound)
}

const stop = document.getElementById('stop')
stop.addEventListener('click', stopSound)
