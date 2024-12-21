'use client'

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { BackgroundBeams } from "@/components/ui/Beams";
import MagicButton from "@/components/ui/MagicButton";
import { FaArrowRight } from "react-icons/fa6";
import { PartnersCarousel } from "@/components/ui/PartnersCarousel";

export default function Home() {
  const router = useRouter();

  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "Monk",
      className: "text-purple dark:text-purple",
    },
    {
      text: "Studio",
      className: "text-purple dark:text-purple",
    },
  ];

  const homeNavItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Video Editing",
      link: "/video-editing"
    },
    {
      name: "Development",
      link: "/developer"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ];

  return (
    <main className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col items-center justify-center overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="top-40 left-full md:left-[60%]"
          fill="purple"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <TypewriterEffect className="text-4xl md:text-6xl lg:text-7xl" words={words} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-8 max-w-2xl text-base md:text-lg lg:text-xl text-neutral-700 dark:text-neutral-200"
        >
          Your one-stop destination for premium freelance services. We specialize in video editing and web development solutions that bring your vision to life.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <MagicButton
              title="Video Editing"
              icon={<FaArrowRight />}
              position="right"
              handleClick={() => router.push('/video-editing')}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <MagicButton
              title="Web Development"
              icon={<FaArrowRight />}
              position="right"
              handleClick={() => router.push('/developer')}
            />
          </motion.div>
        </div>
      </div>

      {/* Partners Section */}
      <motion.div
        className="w-full mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <PartnersCarousel />
      </motion.div>

      {/* Background Beams Effect */}
      <BackgroundBeams />

    </main>
  );
}
