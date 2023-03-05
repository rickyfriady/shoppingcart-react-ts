import { useCountDown } from '../hooks/useCountDown';
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="flex justify-center items-center font-bold text-xl leading-7 p-2 w-min border-[#ebebeb no-underline ">
      <DateTimeDisplay value={hours} type={'jam'} isDanger={false} flip={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={'Min'} isDanger={false} flip={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={'detik'} isDanger={false} flip={true} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }: any) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

export default CountdownTimer;
