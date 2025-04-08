"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Check, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ShinyText from "@/components/ShinyText";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import WavyImage from "@/components/WavyImage";
import LinkedInFollowersButton from "@/components/magicui/LinkedInFollowersButton";
import { Marquee3D } from "../components/magicui/marquee2";
import { AnimatedBeamMultipleOutputDemo } from "@/components/magicui/AnimatedBeam";
import { Iphone15Pro } from "@/components/magicui/iphone-15-pro";
import { DockDemo } from "@/components/magicui/contact";



const ReactFullpage = dynamic(
  () =>
    import("@fullpage/react-fullpage").then((mod) => {
      return mod.default || mod;
    }),
  { ssr: false },
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900">
        <video
          src="/images/flying-plane.webm"
          autoPlay
          loop
          muted
          className="w-60 h-60"
        />
      </div>
    );
  }

  return (
    <main className="text-black">
      {typeof window !== "undefined" && (
        <ReactFullpage
          scrollingSpeed={1000}
          navigation={true}
          navigationPosition={"right"}
          navigationTooltips={["Home", "Experience", "Contact", "Projects"]}
          showActiveTooltip={true}
          credits={{ enabled: false }}
          render={({ state, fullpageApi }) => {
            return (
              <div className="fullpage-wrapper">
                {/* Section 1: Hero */}
                <div className="section section-1 min-h-screen flex items-center relative">
                  {/* Background Layer */}
                  <div className="absolute inset-0 z-0 bg-white">
                    <DotPattern
                      width={20} // Adjust for dot spacing
                      height={20}
                      cx={1}
                      cy={1}
                      cr={1}
                      className={cn(
                        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                        "text-black" // Increase contrast for visibility
                      )}
                    />
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 w-full bg-none">
                    <nav className="absolute top-0 left-0 w-full bg-transparent py-2">
                      <div className="container mx-auto px-1 flex justify-center items-center">
                        <div className="flex items-center gap-1">
                          <video
                          src="/images/crown.webm"
                          autoPlay
                          loop
                          muted
                          className="w-16 h-16 object-contain ml-4"
                          />
                        </div>
                      </div>
                    </nav>

                    <div className="mx-auto flex flex-col lg:flex-row items-center py-4 ml-4">
                        <div className="lg:w-1/2 animate-fade-in-left flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                          HEY! I'm Saifullah{" "}
                          <span className="animated-gradient-text">
                          Professional <br /> 
                          Software Engineer
                          </span>
                        </h1>
                        <p className="text-lg mb-6 font-medium tracking-wide">
                          Running 2 Batches With More Than{" "}
                          <span className="text-emerald-400">
                          1000+ Students For Free
                          </span>
                        </p>
                        <div className="flex items-center gap-4">
                          <LinkedInFollowersButton companyId="your-linkedin-company-id" />
                          <DockDemo />
                        </div>
                        </div>
                      {/* Replace Image with WavyImage */}
                      <WavyImage />
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                      <ChevronDown className="h-8 w-8 text-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Section 2: About */}
<div className="section section-2 min-h-screen flex items-center bg-[radial-gradient(ellipse_at_center,rgba(190,24,93,0.05),transparent_70%)]">
  <div className="absolute inset-0 bg-[#2a0a12] bg-[radial-gradient(ellipse_at_center,rgba(190,24,93,0.05),transparent_70%)]">
    <div
      className="absolute inset-0 z-10"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
        backgroundSize: "25px 25px",
        pointerEvents: "none",
      }}
    />
  </div>
  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto px-4 md:px-8">
  <div className="pr-0 md:pr-8 pl-8 md:pl-16">
    <h2 className="text-5xl font-bold mb-4 text-white">
      My Experience in Different{" "}
      <ShinyText
        text="Companies"
        disabled={false}
        speed={3}
        className="custom-class"
      />{" "}
      and{" "}
      <ShinyText
        text="Institute"
        disabled={false}
        speed={3}
        className="custom-class"
      />
    </h2>
    <p className="text-sm text-gray-200 mb-10">
      Where every session became a journey to self-discovery, helping individuals unlock their true potential and achieve remarkable growth.
    </p>
  </div>

  <div className="flex justify-start item-center mb-8 pr-8 md:pr-16 text-white">
    <AnimatedBeamMultipleOutputDemo />
  </div>
</div>

</div>

                {/* Section 3: Services */}
                <div className="section section-3 min-h-screen flex justify-end items-center relative bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.05),transparent_70%)]">
                  <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.1) 80%, rgba(0, 0, 0, 0) 100%),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.1) 80%, rgba(0, 0, 0, 0) 100%),
                      linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                      linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                  backgroundSize:
                  "100% 100%, 100% 100%, 100% 100%, 100% 100%, 25px 25px, 25px 25px",
                  backgroundRepeat:
                  "no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat",
                  }}
                  ></div>
                  <div className="relative flex justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-8">
            <div className="w-full md:w-1/2 lg:w-5/12 pr-0 md:pr-8 mb-24">
            <h2 className="text-5xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-lg text-white mb-10">
              Have a question or want to work together? Feel free to reach out. I'm always open to discussing new projects,
              creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-full bg-gray-100">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-800"
                >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="text-white">+92 3705764856</p>
              </div>
              </div>

              <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-full bg-gray-100">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-800"
                >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-white">saifullahkhan72437@gmail.com</p>
              </div>
              </div>

              <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-full bg-gray-100">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-800"
                >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Location</h3>
                <p className="text-white">Mardan District, Khyber Pakhtunkhwa, Pakistan</p>
              </div>
              </div>
            </div>
            </div>
                   <div className="relative flex justify-end mt-12 mr-12">
            <div style={{ display: 'inline-block' }}> {/* Wrapper div */}
              <Iphone15Pro src="/images/iphone.jpeg" className="overflow-y-hidden mask-radial-at-right" />
            </div>
          </div>
                </div>
                </div>


                {/* Section 4: Contact */}
                <div className="section section-4 min-h-screen flex items-center relative overflow-y-hidden" style={{ backgroundColor: "#0f172a" }}>
                  <div
                    className="absolute inset-0 z-10 pointer-events-none "
                    style={{
                      backgroundImage: `
                        radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                        linear-gradient(0deg, rgba(200, 200, 200, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(200, 200, 200, 0.05) 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px, 40px 40px, 40px 40px",
                      backgroundRepeat: "repeat, repeat, repeat",
                    }}
                  ></div>
                <div className="flex items-center justify-center w-full h-full">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200">
                    Recent Projects (Upcoming)
                  </h1>
                </div>
                </div>
              </div>
            );
          }}
        />
      )}
    </main>
  );
}