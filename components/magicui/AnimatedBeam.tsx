"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
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
      className={cn(
        "relative flex h-[500px] w-[1200px] justify-evenly items-center overflow-hidden p-30",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
          <h1 className="">Me</h1>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Icons.openai />
          </Circle>
          <h1 className="">Turing</h1>

        </div>
        <div className="flex flex-col justify-center gap-2 -m-4">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <p className="text-sm">Upwork</p>
          <Circle ref={div2Ref}>
            <Icons.googleDocs />
          </Circle>
          <p className="text-sm">Taught 3000+<br />Students</p>
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <p className="text-sm">200+ Projects</p>
          <Circle ref={div4Ref}>
            <Icons.zapier />
          </Circle>
          <p className="text-sm">1000+ Designs including <br /> Logos,Posters and banners</p>
          <Circle ref={div5Ref}>
            <Icons.notion />
          </Circle>
          <p className="text-sm">Mobile App<br />Development Teacher<br />(Nov 2020 - Jan 2023)</p>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  notion: () => (
    <Image
       src="/images/IT.png"
       alt="Turing Company"
       width={100}
       height={100}
       className="object-cover"
    />
  ),
  openai: () => (
    <Image
       src="/images/turing.png"
       alt="Turing Company"
       width={100}
       height={100}
       className="object-cover"
    />
  ),
  googleDrive: () => (
    <Image
       src="/images/upwork.svg"
       alt="Upwork"
       width={100}
       height={100}
       className="object-cover"
    />
  ),
  whatsapp: () => (
    <Image
       src="/images/freelancer.png"
       alt="Owner"
       width={100}
       height={100}
       className="object-cover"
    />
  ),
  googleDocs: () => (
    <Image
       src="/images/VIIT.png"
       alt="Owner"
       width={100}
       height={100}
       className="object-cover"
    />
  ),
  zapier: () => (
    <Image
       src="/images/fiverr.png"
       alt="Owner"
       width={100}
       height={100}
       className="object-cover"
    />
  ),
  user: () => (
    <Image
    src="/images/user.png"
    alt="Owner"
    width={100}
    height={100}
    className="object-cover"
 />
  ),
};
