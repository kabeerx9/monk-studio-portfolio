"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { BackgroundBeams } from "@/components/ui/Beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/Sparkles";
import { BackgroundGradientAnimation } from "@/components/ui/Gradientbg";
import { FloatingDock } from "@/components/ui/floating-dock";
import Footer from "@/components/Footer";
import { VideoCarousel } from "@/components/ui/VideoCarousel";

const videoEditingNavItems = [
  {
    name: "Services",
    link: "#services",
    icon: "🎬"
  },
  {
    name: "Portfolio",
    link: "/video-editing#portfolio",
    icon: "🎥"
  },
  {
    name: "Process",
    link: "/video-editing#process",
    icon: "⚡"
  },
  {
    name: "Pricing",
    link: "/video-editing#pricing",
    icon: "💰"
  },
  {
    name: "Contact",
    link: "/video-editing#contact",
    icon: "📧"
  }
];

const services = [
  {
    title: "Commercial Editing",
    description: "High-impact video ads that convert viewers into customers",
    icon: "🎯"
  },
  {
    title: "Content Creation",
    description: "YouTube, TikTok, and social media optimized content",
    icon: "📱"
  },
  {
    title: "Motion Graphics",
    description: "Eye-catching animations and visual effects",
    icon: "✨"
  },
  {
    title: "Color Grading",
    description: "Professional color correction and grading",
    icon: "🎨"
  }
];

const processSteps = [
  {
    title: "Discovery",
    description: "We discuss your vision, goals, and target audience to understand your needs",
    icon: "🎯"
  },
  {
    title: "Planning",
    description: "Creating a detailed editing plan and timeline for your project",
    icon: "📋"
  },
  {
    title: "First Cut",
    description: "Initial edit with rough cuts and basic structure for your review",
    icon: "✂️"
  },
  {
    title: "Refinement",
    description: "Incorporating your feedback and adding effects, music, and transitions",
    icon: "🎨"
  },
  {
    title: "Final Delivery",
    description: "Polished final version in your preferred format and resolution",
    icon: "🚀"
  }
];

export default function VideoEditing() {
  return (
    <div className="w-full overflow-hidden">
      <main className="min-h-screen bg-black relative w-full">
        <style jsx global>{`
          body {
            overflow-x: hidden;
          }
          .floating-dock {
            isolation: isolate;
            z-index: 100;
          }
          .background-gradient {
            z-index: 1;
          }
          .content-layer {
            z-index: 2;
            position: relative;
          }
        `}</style>

        {/* Navigation */}
        <FloatingNav navItems={videoEditingNavItems} />

        {/* Hero Section with Lamp Effect */}
        <section className="min-h-screen flex items-center justify-center relative w-full">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl px-4"
            >
              Cinematic Video Editing <br /> that Tells Your Story
            </motion.h1>
            <TextGenerateEffect
              words="Transform your raw footage into compelling visual narratives that captivate your audience"
              className="mt-4 text-xl text-slate-400 px-4"
            />
          </LampContainer>
          <div className="absolute inset-0 pointer-events-none">
            <BackgroundBeams />
          </div>
        </section>

        {/* Video Portfolio Section */}
        <section className="py-20 relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
              Featured Works
            </h2>
            <VideoCarousel />
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-purple-500/20" />
                  )}
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all border border-white/10">
                    <div className="text-3xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating Dock */}
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2" style={{ zIndex: 1000 }}>
          <FloatingDock
            items={[
              {
                title: "Start Project",
                icon: "🚀",
                href: "/video-editing#contact"
              },
              {
                title: "View Pricing",
                icon: "💎",
                href: "/video-editing#pricing"
              },
              {
                title: "Watch Demo",
                icon: "▶️",
                href: "/video-editing#portfolio"
              }
            ]}
          />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
