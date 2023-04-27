
  
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  
const forestAudio = new Audio("sounds/forest.wav")
const rainAudio = new Audio("sounds/rain.wav")
const coffeeshopAudio = new Audio("sounds/coffeeshop.wav")
const fireplaceAudio = new Audio("sounds/fireplace.wav")

  
function pressAudio() {
    buttonPressAudio.play()
  }

function timerEnd() {
    kitchenTimer.play()
  }

  export {
    pressAudio,
    timerEnd,
    forestAudio,
    rainAudio,
    coffeeshopAudio,
    fireplaceAudio,
  }  
