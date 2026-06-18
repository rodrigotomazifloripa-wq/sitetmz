interface VideoBackgroundProps {
  src: string
  poster?: string
  overlayOpacity?: number
  overlayColor?: string
  className?: string
}

export function VideoBackground({
  src,
  poster,
  overlayOpacity = 0.65,
  overlayColor = '0,0,0',
  className = '',
}: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video — hidden on mobile via media query for performance */}
      <video
        className="hidden sm:block absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Mobile fallback — uses poster or gradient */}
      <div
        className="sm:hidden absolute inset-0"
        style={{ background: `linear-gradient(135deg, #080810, #0f0f1a, #1a0a2e)` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(${overlayColor}, ${overlayOpacity})` }}
      />
    </div>
  )
}
