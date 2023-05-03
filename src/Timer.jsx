import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';

const TimerContext = createContext();

export default function TimerProvider({ children }) {
  const [timer, setTimer] = useState(0);

  useInterval(() => {
    setTimer(timer + 1);
  }, 100);

  return (
    <TimerContext.Provider
      value={{
        timer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  return useContext(TimerContext);
}

/**
 * This interval code is thanks to Dan Abramov
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 *
 * The useRef keeps track of time during re-rendering
 */

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
