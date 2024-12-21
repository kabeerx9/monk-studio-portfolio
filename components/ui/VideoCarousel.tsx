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

const VideoModal = ({ video, onClose }: { video: Video | null; onClose: () => void }) => {
  if (!video) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative w-[90vw] h-[80vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-xl hover:text-gray-300"
        >
          Close
        </button>
        <iframe
          width="100%"
          height="100%"
          src={`${video.url}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export const VideoCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsPaused(true);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setIsPaused(false);
  };

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
          if (!selectedVideo) {
            setIsPaused(false);
          }
        }}
      >
        <div className="flex gap-4">
          {dummyVideos.map((video) => (
            <motion.div
              key={video.id}
              className="relative flex-shrink-0 w-[300px] h-[200px] cursor-pointer rounded-lg overflow-hidden"
              onClick={() => handleVideoClick(video)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/30 transition-colors">
                <h3 className="text-white text-xl font-bold text-center px-4">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-4">
          {dummyVideos.map((video) => (
            <motion.div
              key={`clone-${video.id}`}
              className="relative flex-shrink-0 w-[300px] h-[200px] cursor-pointer rounded-lg overflow-hidden"
              onClick={() => handleVideoClick(video)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/30 transition-colors">
                <h3 className="text-white text-xl font-bold text-center px-4">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={handleCloseModal} />
      )}
    </div>
  );
};
