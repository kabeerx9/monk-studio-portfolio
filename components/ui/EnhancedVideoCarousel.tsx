import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

interface VideoProps {
  id: number;
  link: string;
}

interface EnhancedVideoCarouselProps {
  videos: VideoProps[];
  title: string;
  isShorts?: boolean;
  autoplayOnHover?: boolean;
}

export const EnhancedVideoCarousel = ({
  videos,
  title,
  isShorts = false,
  autoplayOnHover = true
}: EnhancedVideoCarouselProps) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const getVideoId = (url: string) => {
    const regex = isShorts
      ? /\/shorts\/([a-zA-Z0-9_-]+)/
      : /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const getEmbedUrl = (videoId: string) => {
    return isShorts
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1`
      : `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <div className="relative w-full overflow-hidden py-10">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>

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
          {videos.map((video) => {
            const videoId = getVideoId(video.link);
            if (!videoId) return null;

            return (
              <motion.div
                key={video.id}
                className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden
                  ${isShorts ? 'w-[200px] h-[356px]' : 'w-[300px] h-[169px]'}`}
                onClick={() => !isShorts && setSelectedVideo(videoId)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <iframe
                  src={autoplayOnHover && isPaused ? getEmbedUrl(videoId) : ''}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {(!isPaused || !autoplayOnHover) && (
                  <img
                    src={getThumbnailUrl(videoId)}
                    alt={`Video ${video.id}`}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-[90vw] h-[80vh] max-w-6xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              Close
            </button>
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl(selectedVideo)}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
