import style from './Clock.module.css'
import {useState,useEffect} from 'react'
function Clock() {
const [useClock,setClock] = useState('')

useEffect( () => {
const timerNow = () => {
let timer = new Date() ;
let hour = timer.getHours() ;    
let min = timer.getMinutes() ;
let sec = timer.getSeconds() ;
let hms = `${hour}:${min}:${sec}` 
setClock(hms)
}
timerNow()
setInterval(timerNow,1000)
},[])

return<div className={style.divClock}>
<h1 className={style.fontClock}>{useClock}</h1>
<p className={style.pClock}><span>hora</span><span>min</span><span>seg</span></p>
</div>
}

export default Clock
