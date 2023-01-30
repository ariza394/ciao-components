import React, { useState, useEffect, createContext } from 'react';
import day from 'dayjs';
import { CardContainer } from './timerStyles';

export const timerContext = createContext({} as TimerContextProps);
const { Provider } = timerContext;

interface TimerContextProps {
  days:number;
  hours:number;
  minutes:number;
  seconds:number;
  endDate:string;
  setEndDate:any;
}

export interface TimerProps {
  // children: React.ReactElement | React.ReactElement[];
  children: (arg:TimerHandlers) => JSX.Element;
  initialValues:InitialValuesProps;
}

interface InitialValuesProps {
  endDate: string;
}

interface TimerHandlers {
  reset: () => void;
  IncrementDay: (value: number) => void;
}

export const Timer = ({ children, initialValues }:TimerProps) => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [endDate, setEndDate] = useState(initialValues.endDate);

  const reset = () => {
    // const {endDate, setEndDate} = useContext(timerContext);
  };
  
  const IncrementDay = (value: number) => {
    const newDate =  day(endDate).add(value, 'day').format('YYYY-MM-DD HH:mm:ss');
    setEndDate(newDate);
  }

  const tick = () => {
    
    const fecha1 = day(endDate);
    const fecha2 = day();
    const secondDiff = fecha1.diff(fecha2, 'seconds');

    const temDays = Math.floor(secondDiff / 86400);
    const temHours = Math.floor((secondDiff % 86400) / 3600);
    const temMinutes = Math.floor(((secondDiff % 86400) % 3600) / 60);
    const temSeconds = ((secondDiff % 86400) % 3600) % 60;

    if (temDays !== days)  setDays(Math.floor(secondDiff / 86400));
    if (temHours !== hours)  setHours(Math.floor((secondDiff % 86400) / 3600));
    if (temMinutes !== minutes)  setMinutes(Math.floor(((secondDiff % 86400) % 3600) / 60));
    if (temSeconds !== seconds)  setSeconds(Math.floor(((secondDiff % 86400) % 3600) % 60));

    if (secondDiff === 0){
      return 0;
    };
    return 1;
  }

  useEffect(() => {

    const temporizador = setInterval(() => {
      const fin = tick();
      if( fin === 0) clearInterval(temporizador);
    }, 1000);
    return () => {
      clearInterval(temporizador);
    };
  }, [endDate]);

  
    

    return ( 
        <Provider value={{
          days,
          hours,
          minutes,
          seconds,
          endDate,
          setEndDate
        }}>
          <CardContainer>
            { children({
              reset,
              IncrementDay,
            }) }
          </CardContainer>
        </Provider>
     );
};

