function Cards({
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace,
    buttonSvgForest,
    buttonSvgRain,
    buttonSvgCoffeeShop,
    buttonSvgFireplace,
    forestAudio,
    rainAudio,
    coffeeshopAudio,
    fireplaceAudio,
}){
    function enableForest() {
      forestAudio.play()
      forestAudio.loop = true
      buttonForest.classList.add('selected')
      buttonSvgForest.classList.add('selected')
    }

    function disableForest() {
      forestAudio.pause()
      buttonForest.classList.remove('selected')
      buttonSvgForest.classList.remove('selected')
    }

    function enableRain() {
      rainAudio.play()
      rainAudio.loop = true
      buttonRain.classList.add('selected')
      buttonSvgRain.classList.add('selected')
    }

    function disableRain() {
      rainAudio.pause()
      buttonRain.classList.remove('selected')
      buttonSvgRain.classList.remove('selected')
    }

    function enableCoffeeshop() {
      coffeeshopAudio.play()
      coffeeshopAudio.loop = true
      buttonCoffeeShop.classList.add('selected')
      buttonSvgCoffeeShop.classList.add('selected')
    }

    function disableCoffeeshop() {
      coffeeshopAudio.pause()
      buttonCoffeeShop.classList.remove('selected')
      buttonSvgCoffeeShop.classList.remove('selected')
    }

    function enableFireplace() {
      fireplaceAudio.play()
      fireplaceAudio.loop = true
      buttonFireplace.classList.add('selected')
      buttonSvgFireplace.classList.add('selected')
    }

    function disableFireplace() {
      fireplaceAudio.pause()
      buttonFireplace.classList.remove('selected')
      buttonSvgFireplace.classList.remove('selected')
    }

    return {
        enableForest,
        enableRain,
        enableCoffeeshop,
        enableFireplace,
        disableForest,
        disableRain,
        disableCoffeeshop,
        disableFireplace
    }
} 

export { Cards }