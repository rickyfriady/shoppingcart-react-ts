const DateTimeDisplay = ({ value, type, isDanger, flip }: any) => {
  return (
    <div className={`leading-5 py-0 px-3 items-center flex flex-col `}>
      <div className={`inline-flex flex-col text-red-400 text-xl shadow-md relative ${flip ? 'flip' : ''} `} before={value}>
        <div className="top-count ">{value}</div>
        <div className="bottom-count">{value}</div>
      </div>
      <span className="uppercase text-xs leading-1 pt-1">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
