//importações
import Controls from "./controls.js"
import Timer from "./timer.js"
import { Cards } from "./cards.js"
import {  
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonMoreMinutes,
  buttonLessMinutes,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  buttonSvgForest,
  buttonSvgRain,
  buttonSvgCoffeeShop,
  buttonSvgFireplace,} from "./elements.js"
import Events  from "./events.js"
import {
  pressAudio,
  timerEnd,
  forestAudio,
  rainAudio,
  coffeeshopAudio,
  fireplaceAudio,}  from "./sounds.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset,
}) 

const cards = Cards({
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
})

const events = Events({
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
})

{ events.controlsEvent(), events.cardsEvents() } 



