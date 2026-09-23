import React, { useRef, useEffect } from 'react';

export default function IntroVideoSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isInViewRef = useRef(false);
  const hasPrimedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();
    video.muted = true;
    video.defaultMuted = true;

    // 1. Audio Priming on First Touch:
    // Mobile browsers (iOS Safari & Android Chrome) require a user gesture to grant audio permission.
    // The very first touch the user makes to scroll down primes the video element so it can play unmuted.
    const primeAudio = () => {
      if (hasPrimedRef.current || !videoRef.current) return;
      hasPrimedRef.current = true;
      const v = videoRef.current;
      v.muted = false;
      const p = v.play();
      if (p !== undefined) {
        p.then(() => {
          // If not yet scrolled to the video, keep it paused until arrival
          if (!isInViewRef.current) {
            v.pause();
          }
        }).catch(() => {
          v.muted = true;
        });
      }
    };

    window.addEventListener('touchstart', primeAudio, { once: true, passive: true });
    window.addEventListener('pointerdown', primeAudio, { once: true, passive: true });
    window.addEventListener('click', primeAudio, { once: true, passive: true });

    // 2. Accurate In-View Detection:
    // Starts playing unmuted as soon as the user arrives at the video.
    // Pauses and mutes immediately when scrolled away.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            isInViewRef.current = true;
            video.muted = false;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                video.muted = true;
                video.play().catch(() => {});
              });
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.05) {
            isInViewRef.current = false;
            video.pause();
            video.muted = true;
          }
        });
      },
      {
        threshold: [0, 0.05, 0.15],
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener('touchstart', primeAudio);
      window.removeEventListener('pointerdown', primeAudio);
      window.removeEventListener('click', primeAudio);
    };
  }, []);

  const handleVideoClick = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-black relative select-none"
    >
      <div 
        className="w-full max-w-7xl mx-auto bg-black relative aspect-video cursor-pointer"
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          src="/accel-intro.mp4"
          className="w-full h-full object-contain block mx-auto cursor-pointer"
          loop
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          onClick={handleVideoClick}
        />
      </div>
    </section>
  );
}


