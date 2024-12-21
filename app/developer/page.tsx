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
        <Footer />
      </div>
    </main>
  );
}
