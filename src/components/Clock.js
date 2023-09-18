import style from './Clock.module.css'
import {useState,useEffect} from 'react'

function Clock() {
const [second,setSec] = useState('')
const [minute,setMin] = useState('')
const [hour,setHour] = useState('')

const makeClock = () => {
let timerGenerator = new Date()
setSec(timerGenerator.getSeconds())
setMin(timerGenerator.getMinutes())
setHour(timerGenerator.getHours())}

useEffect(()=>{
makeClock()
setInterval(makeClock,1000) },[])

const Check = (value) => {
return value < 10 ? '0' + value : value }

return <div className={style.divClock}>
<h1 className={style.fontClock}>{useClock}</h1>
<p className={style.pClock}><span>{Check(hour)}</span>:<span>{Check(minute)}</span>:<span>{Check(second)}</span></p>
</div>
}

export default Clock
