import NumberTicker from "./ui/number-ticker";

type CounterCardProps = {
  title: string;
  value: number;
};

const CounterCard = ({ title, value }: CounterCardProps) => {
  return (
    <div className="odd:bg-cardCustomBlue even:bg-cardCustomGray flex flex-col justify-between border-none w-full max-w-[180px] h-[60px] rounded-sm p-1">
      <div className="flex items-center justify-center pb-2">
        <span className="text-xs font-semibold">{title}</span>
      </div>
      <span className="text-xs bg-background rounded-sm w-full text-center py-1">
        {value > 0 ? (
          <p className="whitespace-pre-wrap tracking-tighter">
            <NumberTicker value={value} decimalPlaces={0} direction="up" />
          </p>
        ) : (
          <p className="whitespace-pre-wrap tracking-tighter">#Error</p>
        )}
      </span>
    </div>
  );
};

export default CounterCard;
