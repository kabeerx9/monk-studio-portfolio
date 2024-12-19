"use client";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

const dummyVideos: Video[] = [
  {
    id: "1",
    title: "Cinematic Travel Video",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "2",
    title: "Wedding Highlights",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/9bZkp7q19f0"
  },
  {
    id: "3",
    title: "Commercial Project",
    thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/JGwWNGJdvx8"
  },
  {
    id: "4",
    title: "Music Video Edit",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/kJQP7kiw5Fk"
  },
  {
    id: "5",
    title: "Corporate Video",
    thumbnail: "https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/RgKAFK5djSk"
  },
  {
    id: "6",
    title: "Event Highlights",
    thumbnail: "https://img.youtube.com/vi/JRfuAukYTKg/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/JRfuAukYTKg"
  }
];

export const VideoCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <motion.div
        className="flex gap-4"
        animate={{
          x: isPaused ? 0 : "-100%"
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        onHoverStart={() => setIsPaused(true)}
        onHoverEnd={() => {
          setIsPaused(false);
          setSelectedVideo(null);
        }}
      >
        <div className="flex gap-4">
          {dummyVideos.map((video) => (
            <motion.div
              key={video.id}
              className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden
                ${selectedVideo?.id === video.id ? 'w-full h-[80vh]' : 'w-[300px] h-[200px]'}`}
              onClick={() => setSelectedVideo(video)}
              layoutId={`video-${video.id}`}
            >
              {selectedVideo?.id === video.id ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`${video.url}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              ) : (
                <>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{video.title}</h3>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        <div className="flex gap-4">
          {dummyVideos.map((video) => (
            <motion.div
              key={`clone-${video.id}`}
              className="relative flex-shrink-0 w-[300px] h-[200px] cursor-pointer rounded-lg overflow-hidden"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}; 
