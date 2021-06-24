import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useRef,
} from 'react';

interface TimerData {
  counter: number;
  timer: number;
  startTimer: () => void;
  stopTimer: () => void;
  clearTimer: () => void;
}

interface TimerProviderProps {
  children: ReactNode;
}

export const TimerContext = createContext({} as TimerData);

export function TimerProvider({ children }: TimerProviderProps) {
  const [counter, setCounter] = useState(0);

  const timer = useRef(0);

  function startTimer() {
    timer.current = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer.current);
  }

  function clearTimer() {
    setCounter(0);
  }

  return (
    <TimerContext.Provider
      value={{ counter, timer, startTimer, stopTimer, clearTimer }}
    >
      {children}
    </TimerContext.Provider>
  );
}
export const useTimer = () => {
  return useContext(TimerContext);
};
