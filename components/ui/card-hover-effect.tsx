"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon: string;
  }[];
  className?: string;
}) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl",
        className
      )}
    >
      {items.map((item) => (
        <motion.div
          onClick={() => router.push(item.link)}
          key={item.title}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex flex-col justify-between rounded-xl border border-white/10
            bg-gray-900 p-6 cursor-pointer overflow-hidden transition-all duration-300"
        >
          <div className="relative z-10">
            <span className="text-4xl mb-4 block">{item.icon}</span>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-neutral-300">{item.description}</p>
          </div>

          {/* Animated gradient background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple/50 via-transparent to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Animated border */}
          <motion.div
            className="absolute inset-0 -z-10"
            style={{
              background: "linear-gradient(45deg, purple, transparent)",
              filter: "blur(7px)",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
