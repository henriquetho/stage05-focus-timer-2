export default function Events({
  buttonPlay,
  buttonPause, 
  buttonStop, 
  buttonSet, 
  buttonMoreMinutes, 
  buttonLessMinutes, 
  pressAudio, 
  controls, 
  timer, 
  timerEnd, 
  buttonForest, 
  buttonRain, 
  buttonCoffeeShop, 
  buttonFireplace, 
  forestAudio, 
  rainAudio, 
  coffeeshopAudio,
  fireplaceAudio, 
  cards,
}) {
    function controlsEvent() {
      buttonPlay.addEventListener('click', function() {
        pressAudio()
        controls.play()
        timer.countdown()
      })
  
      buttonPause.addEventListener('click', function(){
        controls.pause()
        pressAudio()
        timer.hold()
      })
      
      buttonStop.addEventListener('click', function(){
        pressAudio()
        timer.reset()
        controls.stop()
        controls.reset()
        timerEnd()

      })
      
      buttonSet.addEventListener('click', function(){
        pressAudio()
        let newMinutes = controls.getMinutes()
      
        if(!newMinutes) {
          timer.reset()
          return
        }  
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
      })
      
      buttonMoreMinutes.addEventListener('click', function(){
        pressAudio()
        timer.addFiveMinutes()
      })
      
      buttonLessMinutes.addEventListener('click', function(){
        pressAudio()
        timer.removeFiveMinutes()
      })     
    }

    function cardsEvents() {
      buttonForest.addEventListener('click', () => {
        if (forestAudio.paused == true) {
          cards.enableForest()
          cards.disableRain()
          cards.disableCoffeeshop()
          cards.disableFireplace()
        } else {
          cards.disableForest()
        }
    })

      buttonRain.addEventListener('click', () => {
        if (rainAudio.paused == true) {
          cards.enableRain()
          cards.disableForest()
          cards.disableCoffeeshop()
          cards.disableFireplace()
         } else {
          cards.disableRain()
         }
      })

      buttonCoffeeShop.addEventListener('click', () => {
        if (coffeeshopAudio.paused == true) {
          cards.enableCoffeeshop()
          cards.disableForest()
          cards.disableRain()
          cards.disableFireplace()
        } else {
            cards.disableCoffeeshop()
              }
          })

      buttonFireplace.addEventListener('click', () => {
        if (fireplaceAudio.paused == true) {
          cards.enableFireplace()
          cards.disableForest()        
          cards.disableRain()
          cards.disableCoffeeshop()
        } else {
           cards.disableFireplace()
         }
       })
      }
  return {
    controlsEvent,
    cardsEvents
  }
} 
