import style from './Clock.module.css'
import {useState,useEffect} from 'react'
function Clock() {
const [useClock,setClock] = useState('')//meu relogio

useEffect( () => {//useffect monitora cada alteracao do tempo
const timerNow = () => {
let timer = new Date() ;
let hour = timer.getHours() ;    
let min = timer.getMinutes() ;
let sec = timer.getSeconds() ;
let hms = `${hour}:${min}:${sec}` //soma hh mm ss
setClock(hms)//clock definido
}
timerNow()//chama a func
setInterval(timerNow,1000)//atualizacao a cada s
},[])

return<div className={style.divClock}>
<h1 className={style.fontClock}>{useClock}</h1>
<p className={style.pClock}><span>hora</span><span>min</span><span>seg</span></p>
</div>
}

export default Clock