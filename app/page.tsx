'use client'

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { BackgroundBeams } from "@/components/ui/Beams";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cn } from "@/lib/utils";

export default function Home() {
  const router = useRouter();

  const words = [
    {
      text: "Welcome to",
    },
    {
      text: "Monk Studio",
      className: "bg-gradient-to-r from-purple to-violet-500 bg-clip-text text-transparent",
    },
  ];

  const services = [
    {
      title: "Video Editing",
      description: "Professional video editing services tailored to your needs. From color grading to motion graphics, we bring your vision to life.",
      link: "/video-editing",
      icon: "🎬",
    },
    {
      title: "Web Development",
      description: "Modern web solutions built with cutting-edge technologies. Create stunning, responsive websites that drive results.",
      link: "/developer",
      icon: "💻",
    },
  ];

  const features = [
    { title: "Fast Delivery", icon: "⚡", description: "Quick turnaround times without compromising quality" },
    { title: "24/7 Support", icon: "🌍", description: "Always here to help you succeed" },
    { title: "Custom Solutions", icon: "🎯", description: "Tailored to your specific needs" },
    { title: "Best Quality", icon: "✨", description: "Premium results that exceed expectations" },
  ];

  return (
    <main className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative">
      {/* Gradient Background */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-10">
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-center">
          {words.map((word, idx) => (
            <span key={idx} className={word.className}>
              {word.text}{" "}
            </span>
          ))}
        </div>

        <p className="text-center mt-8 max-w-2xl text-base md:text-lg lg:text-xl text-neutral-700 dark:text-neutral-200 px-4">
          Your one-stop destination for premium freelance services. We specialize in video editing and web development solutions that bring your vision to life.
        </p>

        {/* Service Cards */}
        <div className="mx-auto px-8 mt-12 w-full max-w-6xl">
          <HoverEffect items={services} />
        </div>

        {/* Features Grid */}
        <div className="w-full max-w-6xl mt-20 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <span className="text-4xl mb-3">{feature.icon}</span>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-center text-neutral-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple to-violet-500 text-white font-medium"
            onClick={() => router.push('/contact')}
          >
            Get Started
          </motion.button>
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <Spotlight className="top-40 left-full md:left-[60%]" fill="purple" />
      </div>
      <BackgroundBeams />
    </main>
  );
}
