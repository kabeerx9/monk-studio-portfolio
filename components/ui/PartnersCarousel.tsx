'use client';

import { useEffect, useState } from 'react';

const partners = [
  {
    logo: "/partners/google.svg",
    alt: "Google",
  },
  {
    logo: "/partners/microsoft.svg",
    alt: "Microsoft",
  },
  {
    logo: "/partners/amazon.svg",
    alt: "Amazon",
  },
  {
    logo: "/partners/meta.svg",
    alt: "Meta",
  },
  {
    logo: "/partners/apple.svg",
    alt: "Apple",
  },
  {
    logo: "/partners/netflix.svg",
    alt: "Netflix",
  },
];

export function PartnersCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 200); // Reset after 200px
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-black py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Partners</h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-16 items-center justify-center min-w-max transition-transform duration-1000 ease-linear"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
          }}
        >
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <img
              key={`${partner.alt}-1-${index}`}
              src={partner.logo}
              alt={partner.alt}
              className="h-12 w-auto object-contain invert opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <img
              key={`${partner.alt}-2-${index}`}
              src={partner.logo}
              alt={partner.alt}
              className="h-12 w-auto object-contain invert opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
