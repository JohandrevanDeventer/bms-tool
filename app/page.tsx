import { HomeAnimatedBeam } from "@/components/HomeAnimatedBeam";
import HyperText from "@/components/ui/hyper-text";
import React from "react";

const Home = () => {
  return (
    <section className="landing">
      <div className="text-5xl md:text-8xl font-bold pb-5">
        <HyperText text="Rubicon BMS" />
      </div>
      <div>
        <p className="font-bold italic text-lg sm:text-xl">
          Welcome to the BMS Monitoring Tool
        </p>
      </div>
      <div className="flex justify-center w-full">
        <HomeAnimatedBeam />
      </div>
    </section>
  );
};

export default Home;
