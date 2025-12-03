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
      {/* iPhone Frame SVG - Only the frame, no foreignObject */}
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
      </svg>

      {/* Screen Content - CSS positioned overlay with Safari iOS fixes */}
      <div 
        className="absolute overflow-hidden"
        style={{
          // Percentuais EXATOS baseados no SVG (433x882, screen at x=18, y=18, w=397, h=846)
          top: '2.04%',
          left: '4.16%',
          right: '4.16%',
          bottom: '2.04%',
          borderRadius: '11.55% / 5.67%',
          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
          WebkitTransform: 'translate3d(0,0,0)',
          transform: 'translate3d(0,0,0)',
          overflow: 'hidden',
          boxSizing: 'border-box',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
      >
        {videoEmbed && videoEmbedSrc ? (
          <div 
            style={{
              position: 'absolute',
              top: '-1%',
              left: '-1%',
              right: '-1%',
              bottom: '-1%',
              width: '102%',
              height: '102%',
              overflow: 'hidden',
            }}
          >
            <iframe
              src={videoEmbedSrc}
              width="100%"
              height="100%"
              style={{ 
                border: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'block',
                transform: 'translate3d(0,0,0) scale(1.01)',
                WebkitTransform: 'translate3d(0,0,0) scale(1.01)',
                transformOrigin: 'center center',
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
            style={{
              transform: 'translate3d(0,0,0)',
              WebkitTransform: 'translate3d(0,0,0)',
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
        )}
      </div>
    </div>
  );
}
