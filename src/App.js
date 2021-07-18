import { useContext, useEffect } from "react";
import CountdownAnimation from "./components/CountdownAnimation";
import Button from './components/Button';
import SetPomodoro from "./components/SetPomodoro";
import { SettingsContext } from "./context/SettingsContext";

import { FiPause, FiPlay } from 'react-icons/fi';

function App() {
  const {
    pomodoro, 
    executing, 
    setCurrentTimer, 
    SettingBtn,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute
  } = useContext(SettingsContext)

  useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be more productive with this technique.</small>
      {pomodoro !== 0 ?
      <>
        {/* Settings modal */}
        <div className="timer-container">
          <div className="time-wrapper">
            <CountdownAnimation
              key={pomodoro}
              timer={pomodoro}
              animate={startAnimate}
            >
              {children}
            </CountdownAnimation>
          </div>
        </div>
        <div className="button-wrapper">
          <Button
            title={<FiPlay size={34} />}
            className={!startAnimate ? 'active' : undefined}
            _callback={startTimer}
          />
          <p></p>
          <Button 
            title={<FiPause size={34} />}
            className={startAnimate ? 'active' : undefined}
            _callback={pauseTimer}
          />
        </div>
        <ul className="labels">
          <li className="up">
            <Button 
              title="Work"
              activeClass={executing.active === 'work' ? 'active-label' : undefined}
              _callback={() => setCurrentTimer('work')}
            />
          </li>
          <li className="up">
            <Button 
              title="Break"
              activeClass={executing.active === 'short' ? 'active-label' : undefined}
              _callback={() => setCurrentTimer('short')}
            />
          </li>
          <li>
            <Button 
              title="More time!"
              activeClass={executing.active === 'long' ? 'active-label' : undefined}
              _callback={() => setCurrentTimer('long')}
            />
          </li>
          <li>
            <Button 
              title="Settings" 
              _callback={SettingBtn} 
            />
          </li>
          
        </ul>
        
        
        
      </> : <SetPomodoro /> }
    </div>
  );
}

export default App;
