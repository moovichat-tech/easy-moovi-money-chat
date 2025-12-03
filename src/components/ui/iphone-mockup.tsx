import { cn } from "@/lib/utils";

interface IPhoneMockupProps {
  src?: string;
  videoEmbed?: boolean;
  videoEmbedSrc?: string;
  alt?: string;
  className?: string;
}

export function IPhoneMockup({
  src,
  videoEmbed,
  videoEmbedSrc,
  alt = "iPhone screen",
  className,
}: IPhoneMockupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* iPhone Frame SVG */}
      <svg
        viewBox="0 0 433 882"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Phone Body */}
        <rect
          x="1"
          y="1"
          width="431"
          height="880"
          rx="65"
          fill="#1a1a1a"
          stroke="#2a2a2a"
          strokeWidth="2"
        />
        
        {/* Screen Area */}
        <rect
          x="18"
          y="18"
          width="397"
          height="846"
          rx="50"
          fill="#000"
        />
        
        {/* Dynamic Island / Notch */}
        <rect
          x="145"
          y="28"
          width="143"
          height="32"
          rx="16"
          fill="#1a1a1a"
        />
        
        {/* Side Buttons */}
        <rect x="0" y="180" width="3" height="40" rx="1.5" fill="#2a2a2a" />
        <rect x="0" y="240" width="3" height="70" rx="1.5" fill="#2a2a2a" />
        <rect x="0" y="320" width="3" height="70" rx="1.5" fill="#2a2a2a" />
        <rect x="430" y="240" width="3" height="100" rx="1.5" fill="#2a2a2a" />
        
        {/* Screen Content Clip */}
        <clipPath id="screenClip">
          <rect x="18" y="18" width="397" height="846" rx="50" />
        </clipPath>
        
        {/* Foreign Object for Content */}
        <foreignObject
          x="18"
          y="18"
          width="397"
          height="846"
          clipPath="url(#screenClip)"
        >
          <div
            className="w-full h-full overflow-hidden rounded-[50px]"
            style={{ 
              borderRadius: '50px',
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            {videoEmbed && videoEmbedSrc ? (
              <div 
                className="w-full h-full relative"
                style={{ width: '100%', height: '100%' }}
              >
                <iframe
                  src={videoEmbedSrc}
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    border: 'none',
                    width: '100%',
                    height: '100%',
                    minHeight: '100%'
                  }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowFullScreen
                  title="Video player"
                />
              </div>
            ) : src ? (
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
            )}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
