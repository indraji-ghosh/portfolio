import React from "react";
import star from "/star.svg"; // Ensure star.svg is in the same folder or adjust path

const features = [
  "Accessible",
  "Responsive",
  "Dynamic",
  "Scalable",
  "Search Optimized",
  "Interactive",
  "Secure",
  "Reliable",
  "Engaging",
];

const MarqueeSection = () => {
  const renderItems = () =>
    features.map((feature, idx) => (
      <div
        key={`${feature}-${idx}`}
        className="inline-flex items-center gap-2 lg:gap-4"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-50 md:text-lg lg:text-xl">
          {feature}
        </span>
        <img src={star} alt="star" className="w-5 lg:w-7" loading="lazy" />
      </div>
    ));

  return (
    <section className="relative my-20 py-20 overflow-hidden">
      {/* Background blur shape */}
      <div className="z-0 translate-y-10 rotate-6 bg-linear-to-r from-[#6799fe] to-[#0255fb] py-4 opacity-60 md:rotate-3 lg:translate-y-16 lg:py-8"></div>

      {/* Foreground marquee */}
      <div className="relative z-10 -mx-1 flex -rotate-3 items-center justify-center bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-1.5 lg:py-3 overflow-hidden">
        <div
          className="flex whitespace-nowrap gap-[1rem] px-2 animate-marquee"
          style={{
            animation: "marquee 30s linear infinite",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Repeat to allow seamless scroll */}
          <div className="flex gap-[1rem] shrink-0">{renderItems()}</div>
          <div className="flex gap-[1rem] shrink-0">{renderItems()}</div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
