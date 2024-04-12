// У нас на странице есть две кнопки Toggle и Reset. Toggle - запускает или останавливает таймер
// Кнопка Reset работает в двух режимах. Если таймер активен, то он сбрасывает таймер и он
// начинает отсчет заново. А если таймер остановлен - то просто сбрасывает таймер.
import React, { useState, useEffect, useRef } from 'react';

export default function Timer(): JSX.Element {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const interval = useRef<null | number | undefined>(null);

  useEffect(() => {
    if (isActive) {
      interval.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      console.log(interval);
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    if (isActive) {
      setSeconds(0);
    } else {
      setSeconds(0);
      setIsActive(false);
    }
  };

  return (
    <>
      <div className="timercontainer">
        <div className="timerbox">
          <div className="secondsbox">
            <h1>Таймер: {seconds} секунд</h1>
          </div>

          <div>
            <button type="submit" className="interviewbutton" onClick={toggleTimer}>
              {isActive ? 'Остановить' : 'Запустить'}
            </button>
            <button className="interviewbutton" onClick={resetTimer}>
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
