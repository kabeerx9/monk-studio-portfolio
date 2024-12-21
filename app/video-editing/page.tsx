"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { BackgroundBeams } from "@/components/ui/Beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import Footer from "@/components/Footer";
import { EnhancedVideoCarousel } from "@/components/ui/EnhancedVideoCarousel";
import { youtubeShortLinks, carEditLinks, companyEditLinks } from "@/data/youtube-links";
import { useRouter } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

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

const videoEditingTestimonials = [
  {
    quote: "The video edits were absolutely phenomenal! The attention to detail and creative transitions really made our content stand out.",
    name: "Sarah Johnson",
    designation: "Content Creator",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&h=500&auto=format&fit=crop"
  },
  {
    quote: "Working with this video editing service transformed our corporate videos. The quality and professionalism exceeded our expectations.",
    name: "Michael Chen",
    designation: "Marketing Director",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&h=500&auto=format&fit=crop"
  },
  {
    quote: "Fast turnaround, excellent communication, and stunning results. Our YouTube channel has seen significant growth since working together.",
    name: "Alex Rodriguez",
    designation: "YouTuber",
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&h=500&auto=format&fit=crop"
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
    icon: "����"
  }
];

export default function VideoEditing() {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full bg-black relative flex flex-col overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 text-sm text-white/90 hover:text-white transition-colors rounded-lg backdrop-blur border border-white/10 hover:border-white/20"
      >
        <IconArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative w-full px-4 sm:px-6 lg:px-8 pt-20">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent"
          >
            Cinematic Video Editing <br /> that Tells Your Story
          </motion.h1>
          <TextGenerateEffect
            words="Transform your raw footage into compelling visual narratives that captivate your audience"
            className="mt-8 text-base sm:text-md md:text-xl lg:text-2xl text-slate-400 max-w-3xl text-center mx-auto px-4"
          />
        </LampContainer>
        <div className="absolute inset-0 pointer-events-none">
          <BackgroundBeams />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all border border-white/10"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 md:py-32 relative z-10 w-full px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-16">
            Our Portfolio
          </h2>
          <div className="space-y-24">
            <EnhancedVideoCarousel
              videos={youtubeShortLinks}
              title="Featured Shorts"
              isShorts={true}
              autoplayOnHover={true}
            />
            <EnhancedVideoCarousel
              videos={carEditLinks}
              title="Car Editing Showcase"
              isShorts={false}
              autoplayOnHover={false}
            />
            <EnhancedVideoCarousel
              videos={companyEditLinks}
              title="Corporate Video Edits"
              isShorts={false}
              autoplayOnHover={false}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 relative w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-16">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-purple-500/20" />
                )}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all border border-white/10">
                  <div className="text-4xl mb-6">{step.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-16">
            What Our Clients Say
          </h2>
          <AnimatedTestimonials testimonials={videoEditingTestimonials} autoplay={true} />
        </div>
      </section>

      {/* Floating Dock */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
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
              icon: "🎥",
              href: "/video-editing#portfolio"
            }
          ]}
        />
      </div>

      <Footer />
    </main>
  );
}
