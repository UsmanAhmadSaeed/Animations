document.getElementById('bigButton').addEventListener('click', () => {
  document.getElementById('waveAnimation').style.animation = "wave .4s 1"
})

document.getElementById('waveAnimation').addEventListener('animationend', (e) => {
  document.getElementById('waveAnimation').style.animation = "none"
 })
