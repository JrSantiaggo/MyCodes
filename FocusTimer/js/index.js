import Controls from './controls.js'
import Timer from './timer.js'
import { elements } from './elements.js'
import Sound from './sounds.js'
import Events from './events.js'

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,  
  minutesDisplay,
  secondsDisplay,
} = elements 

const sound = Sound()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

Events({controls, timer, sound})
