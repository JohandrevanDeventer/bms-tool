import { Separator } from "@/components/ui/separator";
import {
  numberOfBrands,
  numberOfDeviceTypes,
  numberOfModels,
  numberOfPoints,
  numberOfSupportedGateways,
  numberOfSupportedProtocols,
} from "@/lib/utils";
import CounterCard from "./CounterCard";
import LatestData from "./LatestData";

const DevicesRightSidebar = async () => {
  return (
    <>
      <div className="flex flex-col items-center justify-evenly gap-2 flex-wrap w-full">
        <CounterCard title="Device Types" value={numberOfDeviceTypes} />
        <CounterCard title="Brands" value={numberOfBrands} />
        <CounterCard title="Models" value={numberOfModels} />
        <CounterCard title="Points" value={numberOfPoints} />
        <CounterCard
          title="Supported Gateways"
          value={numberOfSupportedGateways}
        />
        <CounterCard
          title="Supported Protocols"
          value={numberOfSupportedProtocols}
        />
      </div>
      <div className="py-4 px-6 hidden md:flex">
        <Separator />
      </div>
      <div className="flex-grow hidden md:flex overflow-hidden">
        <LatestData />
      </div>
    </>
  );
};

export default DevicesRightSidebar;
