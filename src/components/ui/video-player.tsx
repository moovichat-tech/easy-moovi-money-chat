import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  objectFit?: "cover" | "contain" | "fill";
  className?: string;
  onLoadedData?: () => void;
}

export function VideoPlayer({
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  playsInline = true,
  objectFit = "cover",
  className,
  onLoadedData,
}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      onLoadedData?.();
    };

    video.addEventListener("loadeddata", handleLoadedData);
    return () => video.removeEventListener("loadeddata", handleLoadedData);
  }, [onLoadedData]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline={playsInline}
        className="w-full h-full"
        style={{
          objectFit,
          display: "block",
        }}
      />
    </div>
  );
}
