const DateTimeDisplay = ({ value, type, isDanger }: any) => {
  return (
    <div className={`leading-5 py-0 px-3 items-center flex  flex-col`}>
      <p className="m-0">{value}</p>
      <span className="uppercase text-xs leading-4">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
