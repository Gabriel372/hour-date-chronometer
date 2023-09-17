import style from './Data.module.css'
import {useState,useEffect} from 'react'
function Data() {
const [useDay,setDay] = useState('')
const [useMon,setMon] = useState('')
const [useYear,setYear] = useState('')

useEffect( () => {
const dayNow = () => {
let timer = new Date() ;
let day = timer.getDate() ;
let mon = timer.getMonth() ;
let year = timer.getFullYear() ;
setDay(day)
setMon(mon)
setYear(year)
}
dayNow()
},[])

return<div className={style.divData} >
<p className={style.fontData}><span>{useDay}</span>/<span>{useMon}</span>/<span>{useYear}</span></p>
<p className={style.pData}><span>dia</span><span>mês</span><span>ano</span></p>
</div>
}

export default Data ;
