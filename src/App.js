import './App.css';
import Clock from './components/Clock';
import style from './appStyle.module.css'
import Data from './components/Data';
import Chronometer from './components/Chronometer';

function App() {
  return ( <div className={style.clockData}>
<Clock/>
<Data/>
<Chronometer/>
</div>)
}

export default App;
