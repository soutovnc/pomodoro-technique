import { useContext } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { SettingsContext } from "../context/SettingsContext"

const CountdownAnimation = ({key, timer, animate, children}) => {
  
  
  const { stopAnimate } = useContext(SettingsContext)

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ['#78d1e1', 0.75],
        ['#Fe6f6b', 0.15],
        ['#D7302B', 0.10]
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#41414d"
      onComplete={() => {
        stopAnimate()
      }}
    >
      {children}
    </CountdownCircleTimer>
  )
}

export default CountdownAnimation