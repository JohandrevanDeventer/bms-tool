import Marquee from "@/components/ui/marquee";
import latestData from "../_data/latest-data/latest-data.json";
import { cn } from "@/lib/utils";

const Row = latestData.items.slice(0, latestData.items.length / 1);

const ItemCard = ({
  id,
  title,
  date,
  description,
}: {
  id: number;
  title: string;
  date: string;
  description: string;
}) => {
  return (
    <figure
      key={id}
      className={cn(
        "p-2 h-full relative cursor-pointer overflow-hidden w-full bg-secondary bg-opacity-10 rounded-sm border-t-4 odd:border-t-cardCustomBlue even:border-t-cardCustomGray"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <h1 className="text-md font-semibold">{title}</h1>
        <span className="text-gray-600 text-xs">{date}</span>
      </div>
      <p className="text-xs italic text-gray-400">{description}</p>
    </figure>
  );
};

const LatestData = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center">
        <h1 className="text-xl font-semibold mb-4">Latest</h1>
      </div>
      <div className="relative flex flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[--duration:20s] w-full">
          {Row.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background dark:from-background"></div>
      </div>
    </div>
  );
};

export default LatestData;
