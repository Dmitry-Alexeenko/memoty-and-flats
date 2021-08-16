/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export const UseTimer = (finishCb: Function): { ms: number, start: Function, clear: Function } => {
  const [ms, setMs] = useState(0)
  const [timer, seTimer] = useState<any>(null)
  const [clearTimerTrigger, seClearTimerTrigger] = useState(0)
  
  useEffect(() => {
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (ms === 0 && clearTimerTrigger !== 0) {
      clear()
      seClearTimerTrigger(0)
      if (finishCb) {
        finishCb()
      }
    }
  }, [clearTimerTrigger, ms, timer])

  const start = (time: number) => {
    if (timer) clear()

    setMs(time)

    seTimer(setInterval(() => {
      setMs(prevValue => {
        if (prevValue === 0) {
          seClearTimerTrigger(prevVale => prevVale + 1)
          return 0;
        }
        return prevValue - 1000;
      })
    }, 1000))
  }

  const clear = () => {
    clearInterval(timer);
  }

  return { ms, start, clear };
}
