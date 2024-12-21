"use client";

import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { useRouter } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const developerTestimonials = [
  {
    quote: "An exceptional developer who delivered our project ahead of schedule. The code quality and architecture decisions were outstanding.",
    name: "David Smith",
    designation: "CTO, TechStart Inc.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&auto=format&fit=crop"
  },
  {
    quote: "Incredible problem-solving skills and attention to detail. The custom solutions provided have significantly improved our application's performance.",
    name: "Emily Zhang",
    designation: "Product Manager",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&h=500&auto=format&fit=crop"
  },
  {
    quote: "A true professional who understands both the technical and business aspects of software development. The results speak for themselves.",
    name: "James Wilson",
    designation: "Startup Founder",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&h=500&auto=format&fit=crop"
  }
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <button
        onClick={() => router.back()}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 text-sm text-white/90 hover:text-white transition-colors rounded-lg backdrop-blur border border-white/10 hover:border-white/20"
      >
        <IconArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={navItems} />
        <Hero />
        {/* <Grid /> */}
        <Skills />
        <RecentProjects />
        {/* <Client /> */}
        <Experience />
        <Approach />
        <div className="pt-4 pb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
            Client Testimonials
          </h2>
          <AnimatedTestimonials testimonials={developerTestimonials} autoplay={true} />
        </div>
        <Footer />
      </div>
    </main>
  );
}
