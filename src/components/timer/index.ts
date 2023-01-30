import { Timer as TimerHoc, TimerProps } from './Timer';
import { TimerSeconds } from './TimerSecond';
import { TimerMinutes } from './TimerMinute';
import { TimerHours } from "./TimerHour";
import { TimerDays } from './TimerDay';

export { TimerSeconds } from './TimerSecond';
export { TimerMinutes } from './TimerMinute';
export { TimerHours } from "./TimerHour";
export { TimerDays } from './TimerDay';



export const Timer:TimerHocProps = Object.assign(TimerHoc, {
    Day:TimerDays,
    Hour:TimerHours,
    Minute:TimerMinutes,
    Second:TimerSeconds,
});

interface TimerHocProps {
    ({ children }: TimerProps ):JSX.Element;
    Day:({ text, ...rest }: { text?: string | undefined;  }) => JSX.Element;
    Hour:({ text, ...rest }: { text?: string | undefined; }) => JSX.Element;
    Minute:({ text, ...rest }: { text?: string | undefined; }) => JSX.Element;
    Second:({ text, ...rest }: {  text?: string | undefined; }) => JSX.Element;
}