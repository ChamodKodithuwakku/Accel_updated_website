import React, { useEffect, useState } from 'react';

const ASSET_VER = 'v=7.21';
const LOGO_BASE_SRC = `/accel-logo-base.png?${ASSET_VER}`;
const GEAR_SRC = `/accel-gear.png?${ASSET_VER}`;

// Horizontal split between "ACCEL" and "7.0" in accel-logo-base.png (688 / 1024 px)
const SPLIT = 67.2;

// Timeline (ms)
const EXIT_AT = 2100;
const DONE_AT = 2800;

/**
 * SplashScreen
 *
 * Launch screen shown on first load of a browser session:
 * ACCEL zooms in, gear spins fast then settles, shine sweeps, "7.0" pops in,
 * then the whole blue screen slides up to reveal the homepage.
 */
export default function SplashScreen({ onDone }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const exitTimer = setTimeout(() => setExiting(true), EXIT_AT);
    const doneTimer = setTimeout(() => {
      document.body.style.overflow = prevOverflow;
      onDone();
    }, DONE_AT);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [onDone]);

  return (
    <div
      className={`splash-screen fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[radial-gradient(1200px_600px_at_15%_-10%,#1e5fbf_0%,transparent_55%),radial-gradient(1000px_700px_at_100%_20%,#22bccb_0%,transparent_50%),linear-gradient(160deg,#081235_0%,#0d1b4c_55%,#10275f_100%)] ${exiting ? 'splash-exit' : ''}`}
      aria-hidden="true"
    >
      <div className="relative w-[82vw] max-w-[640px] logo-white-border-hero splash-logo-zoom">
        {/* "ACCEL" part */}
        <img
          src={LOGO_BASE_SRC}
          alt=""
          className="block w-full h-auto"
          style={{ clipPath: `inset(0 ${100 - SPLIT}% 0 0)` }}
          decoding="async"
        />

        {/* "7.0" part — pops in last */}
        <img
          src={LOGO_BASE_SRC}
          alt=""
          className="absolute inset-0 w-full h-auto splash-seven-pop"
          style={{ clipPath: `inset(0 0 0 ${SPLIT}%)`, transformOrigin: `${(SPLIT + 100) / 2}% 55%` }}
          decoding="async"
        />

        {/* Gear — spins fast then settles */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '25.85%',
            top: '61.92%',
            width: '11.8%',
            transform: 'translate(-50%, -50%)',
            aspectRatio: '1 / 1'
          }}
        >
          <img
            src={GEAR_SRC}
            alt=""
            className="w-full h-full object-contain splash-gear-spin logo-gear-glow"
            decoding="async"
          />
        </div>

        {/* One-time shine sweep across the logo */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            WebkitMaskImage: `url(${LOGO_BASE_SRC})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: `url(${LOGO_BASE_SRC})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center'
          }}
        >
          <div className="absolute top-0 bottom-0 w-[40%] splash-shine bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.75)] to-transparent skew-x-[-25deg]" />
        </div>
      </div>
    </div>
  );
}
