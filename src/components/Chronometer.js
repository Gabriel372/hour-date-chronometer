import { useState,useEffect } from "react"
import style from './Chronometer.module.css'
import { IoIosPlay } from 'react-icons/io';
import { IoIosPause } from 'react-icons/io';
import { IoStopSharp } from 'react-icons/io5';

function Chronometer() {
 const [milisec,setMil] = useState(0)
 const [second,setSec] = useState(0)
 const [minute,setMin] = useState(0)
 const [switchID,setSwitchID] = useState(false)

const Play = () =>{
if (!switchID) {
const trueId = setInterval(() => {setMil((prevMili) => prevMili + 1);
}, 10);
setSwitchID(trueId) };
}

const Pause = () =>{
clearInterval(switchID) 
setSwitchID(false) }

const Stop = () =>{
clearInterval(switchID)      
setSwitchID(false)
setMil(0)
setSec(0)
setMin(0) 
}

useEffect(() => {
if (milisec === 100) {
setSec((prevSecond)=> prevSecond +1  )
setMil(0)
}
if (second === 60) {
    setMin((prevMinute) => prevMinute + 1 )  
    setSec(0)  
    }
}, [milisec,second])

const Check = (value) => {
return value < 10 ? '0' + value : value
}

return <div className={style.divChon}>
<p>Cronômetro</p>    
<h1><span>{Check(milisec)}</span>:<span>{Check(second)}</span>:<span>{Check(minute)}</span></h1>
<div className={style.divBtn}>
<button type="button" onClick={Play}><IoIosPlay /></button>
<button type="button"onClick={Pause}><IoIosPause/></button>
<button type="button" onClick={Stop}><IoStopSharp/></button>
</div>
</div>
}

export default Chronometer
