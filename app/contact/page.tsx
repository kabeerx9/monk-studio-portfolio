"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/Beams";
import { SparklesCore } from "@/components/ui/Sparkles";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";

const contactNavItems = [
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
  }
];

export default function Contact() {
  const router = useRouter();
  const [serviceType, setServiceType] = useState<"web" | "video" | null>(null);

  const formFields = {
    web: [
      { label: "Project Type", type: "select", options: ["E-commerce", "Portfolio", "Business Website", "Web Application", "Other"] },
      { label: "Expected Timeline", type: "select", options: ["1-2 weeks", "2-4 weeks", "1-2 months", "2+ months"] },
      { label: "Budget Range", type: "select", options: ["$1000-$3000", "$3000-$5000", "$5000-$10000", "$10000+"] },
    ],
    video: [
      { label: "Video Type", type: "select", options: ["Commercial", "YouTube Content", "Social Media", "Corporate", "Other"] },
      { label: "Video Duration", type: "select", options: ["Under 1 minute", "1-3 minutes", "3-5 minutes", "5+ minutes"] },
      { label: "Required Services", type: "multiselect", options: ["Color Grading", "Motion Graphics", "Sound Design", "Visual Effects"] },
    ],
  };

  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col items-center justify-center overflow-hidden">
      <button
        onClick={() => router.back()}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 text-sm text-white/90 hover:text-white transition-colors rounded-lg backdrop-blur border border-white/10 hover:border-white/20"
      >
        <IconArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="max-w-4xl w-full relative z-10 mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple to-violet-500 mb-4">
            Let&apos;s Create Something Amazing
          </h1>
          <p className="text-neutral-300 text-lg">
            Choose your service and tell us about your project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setServiceType("web")}
            className={cn(
              "p-6 rounded-2xl cursor-pointer border transition-all",
              serviceType === "web"
                ? "border-purple bg-purple/10"
                : "border-white/10 hover:border-white/20"
            )}
          >
            <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-neutral-300">Custom websites and web applications</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setServiceType("video")}
            className={cn(
              "p-6 rounded-2xl cursor-pointer border transition-all",
              serviceType === "video"
                ? "border-purple bg-purple/10"
                : "border-white/10 hover:border-white/20"
            )}
          >
            <h3 className="text-2xl font-semibold mb-2">Video Editing</h3>
            <p className="text-neutral-300">Professional video production services</p>
          </motion.div>
        </div>

        {serviceType && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple"
              />
            </div>

            {formFields[serviceType].map((field, index) => (
              <select
                key={index}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple"
              >
                <option value="">{field.label}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ))}

            <textarea
              placeholder="Project Details"
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple to-violet-500 text-white py-4 rounded-lg font-medium"
            >
              Send Message
            </motion.button>
          </motion.form>
        )}
      </div>
      <BackgroundBeams />
    </div>
  );
}
