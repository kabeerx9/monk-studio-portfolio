import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

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
  const [hoveredVideo, setHoveredVideo] = useState<{id: string, position: number} | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getVideoId = (url: string) => {
    const regex = isShorts
      ? /\/shorts\/([a-zA-Z0-9_-]+)/
      : /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|))([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const getEmbedUrl = (videoId: string) => {
    return isShorts
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0`
      : `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      setStart(true);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>

      <div
        ref={containerRef}
        className="scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            "hover:[animation-play-state:paused]"
          )}
        >
          {videos.map((video, idx) => {
            const videoId = getVideoId(video.link);
            if (!videoId) return null;

            return (
              <li
                key={`${video.id}-${idx}`}
                className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden
                  ${isShorts ? 'w-[200px] h-[356px]' : 'w-[300px] h-[169px]'}`}
                onMouseEnter={() => autoplayOnHover && setHoveredVideo({ id: videoId, position: idx })}
                onMouseLeave={() => setHoveredVideo(null)}
                onClick={() => !isShorts && setSelectedVideo(videoId)}
              >
                {hoveredVideo?.id === videoId && hoveredVideo?.position === idx ? (
                  <iframe
                    src={getEmbedUrl(videoId)}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={getThumbnailUrl(videoId)}
                    alt={`Video ${video.id}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>

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
