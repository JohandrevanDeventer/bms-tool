"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";
import Link from "next/link";
import {
  Activity,
  EthernetPort,
  HousePlug,
  Network,
  RadioTower,
  Zap,
} from "lucide-react";
import PulsatingButton from "./ui/pulsating-button";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full bg-background border-2 p-3 shadow-[0px_0px_10px_2px_hsl(var(--primary))]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const MonitorButton = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("z-10 flex items-center justify-center ", className)}
    >
      {children}
    </div>
  );
});

MonitorButton.displayName = "MonitorButton";

export function HomeAnimatedBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden bg-background p-10 my-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-2xl items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.port />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.pulse />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.home />
          </Circle>

          <MonitorButton ref={div4Ref}>
            <Link href="/dashboard" passHref>
              <PulsatingButton className="font-bold bg-primary">
                Start Monitoring
              </PulsatingButton>
            </Link>
          </MonitorButton>
          <Circle ref={div6Ref}>
            <Icons.network />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.zap />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.radio />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  home: () => <HousePlug size={32} />,
  port: () => <EthernetPort size={32} />,
  zap: () => <Zap size={32} />,
  pulse: () => <Activity size={32} />,
  network: () => <Network size={32} />,
  radio: () => <RadioTower size={32} />,
};
