export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  timerEnd
}) {
  
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function countdown() {
      timerTimeOut = setTimeout(function() {
        let seconds =  Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
      
      updateDisplay(minutes, 0)

        if(minutes <= 0 && seconds <= 0) {
          resetControls()
          timerEnd()
          updateDisplay()
          return
        }
        
        if(seconds <= 0) {
          seconds = 60
          --minutes
        }

        updateDisplay(minutes, String(seconds - 1))
        
        countdown()
      }, 1000) 
    }

    function updateDisplay(newMinutes, seconds) {
      newMinutes = newMinutes === undefined ? minutes : newMinutes
      seconds = seconds === undefined ? 0 : seconds
      minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
      secondsDisplay.textContent = String(seconds).padStart(2, "0");
    }

    function reset() {
      updateDisplay(minutes, 0)
      clearTimeout(timerTimeOut)
    }

    function addFiveMinutes() {
      let minutesValue = parseInt(minutesDisplay.textContent);
      minutesValue += 5
      minutesDisplay.textContent = minutesValue
      if (minutesValue < 10) minutesDisplay.textContent = '0'+minutesValue;
      minutes = minutesValue
    }

    function removeFiveMinutes() {
      let minutesValue = parseInt(minutesDisplay.textContent)
      minutesValue -= 5
  
      if (minutesValue < 0) {
        updateDisplay(0, 0)
        return;
    }
      minutesDisplay.textContent = minutesValue
      if (minutesValue < 10) minutesDisplay.textContent = "0"+minutesValue
      minutes = minutesValue
    }

    function updateMinutes(newMinutes) {
      minutes = newMinutes
    }

    function hold() {
      clearTimeout(timerTimeOut)    
    }

    return {
      countdown,
      reset,
      updateDisplay,
      addFiveMinutes,
      removeFiveMinutes,
      updateMinutes,
      hold
    }
}