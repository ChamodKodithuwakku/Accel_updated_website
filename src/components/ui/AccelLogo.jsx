import React from 'react';

// Cache-busting version token to force mobile browsers to load latest assets
const ASSET_VER = 'v=7.21';
const LOGO_BASE_SRC = `/accel-logo-base.png?${ASSET_VER}`;
const GEAR_SRC = `/accel-gear.png?${ASSET_VER}`;

/**
 * AccelLogo Component
 * 
 * Features:
 * - 2x Super-Resolution (2048x562) Anti-Aliased & De-fringed Transparent Logo
 * - High-definition (400x400) 3D metallic gear rotating inside the 'C'
 * - Smooth CSS hardware-accelerated continuous rotation with zero wobble
 * - Interactive hover speed acceleration
 * - Mobile Cache-Busting Versioning
 */
export default function AccelLogo({ size = 'large', showTagline = false, className = '', rotateGear = true }) {
  if (size === 'navbar' || size === 'nav') {
    return (
      <div className={`inline-flex items-center select-none group ${className}`}>
        <div className="relative inline-block transition-transform duration-300 group-hover:scale-105 logo-white-border">
          <img 
            src={LOGO_BASE_SRC} 
            alt="ACCEL 7.0" 
            className="h-7 sm:h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_2px_rgba(255,255,255,1)] hover:  transition-all" 
            loading="eager"
            decoding="async"
          />
          {rotateGear && (
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
                alt="Rotating Gear"
                className="w-full h-full object-contain animate-gear-spin drop-shadow-xs"
                loading="eager"
                decoding="async"
              />
            </div>
          )}

          {/* Shine Sweep Overlay */}
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
            <div className="absolute top-0 bottom-0 w-[40%] animate-shine-sweep bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.7)] to-transparent skew-x-[-25deg]" />
          </div>
        </div>
      </div>
    );
  }

  if (size === 'small') {
    return (
      <div className={`inline-flex items-center select-none group ${className}`}>
        <div className="relative inline-block logo-white-border">
          <img 
            src={LOGO_BASE_SRC} 
            alt="ACCEL 7.0" 
            className="h-5  sm:h-8 w-auto object-contain   transition-all" 
            loading="eager"
            decoding="async"
          />
          {rotateGear && (
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
                alt="Rotating Gear"
                className="w-full h-full object-contain animate-gear-spin drop-shadow-xs"
                loading="eager"
                decoding="async"
              />
            </div>
          )}

          {/* Shine Sweep Overlay */}
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
            <div className="absolute top-0 bottom-0 w-[40%] animate-shine-sweep bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.7)] to-transparent skew-x-[-25deg]" />
          </div>
        </div>
      </div>
    );
  }

  if (size === 'medium') {
    return (
      <div className={`inline-flex flex-col items-center select-none group ${className}`}>
        <div className="relative inline-block logo-white-border">
          <img 
            src={LOGO_BASE_SRC} 
            alt="ACCEL 7.0" 
            className="h-12  sm:h-16 w-auto object-contain   transition-all" 
            loading="eager"
            decoding="async"
          />
          {rotateGear && (
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
                alt="Rotating Gear"
                className="w-full h-full object-contain animate-gear-spin drop-shadow-xs"
                loading="eager"
                decoding="async"
              />
            </div>
          )}

          {/* Shine Sweep Overlay */}
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
            <div className="absolute top-0 bottom-0 w-[40%] animate-shine-sweep bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.7)] to-transparent skew-x-[-25deg]" />
          </div>
        </div>
        {showTagline && (
          <span className="mt-1 text-xs font-bold tracking-widest text-[#0052cc] uppercase font-['Montserrat']">
            Accelerating Business
          </span>
        )}
      </div>
    );
  }

  // Large Master Logo in Hero
  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <div className="relative group py-2">
        {/* Soft Faded Ambient Glowing Aura Backdrop matching logo colors */}
        <div 
          className="absolute inset-0 -inset-x-8 sm:-inset-x-16 -inset-y-6 rounded-[50px] pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-700 -z-10"
          style={{
            background: 'radial-gradient(ellipse 45% 65% at 20% 50%, rgba(30, 95, 191, 0.40) 0%, transparent 70%), radial-gradient(ellipse 35% 55% at 50% 55%, rgba(245, 158, 11, 0.28) 0%, transparent 65%), radial-gradient(ellipse 45% 65% at 82% 50%, rgba(16, 185, 129, 0.38) 0%, transparent 70%)',
            filter: 'blur(36px)'
          }}
          aria-hidden="true"
        />

        <div className="relative inline-block transition-transform duration-500 group-hover:scale-[1.02] logo-white-border-hero">
          <img 
            src={LOGO_BASE_SRC} 
            alt="ACCEL 7.0" 
            className="w-full max-w-[360px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[700px] h-auto object-contain " 
            loading="eager"
            decoding="async"
          />
          {rotateGear && (
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
                alt="Rotating Gear"
                className="w-full h-full object-contain animate-gear-spin logo-gear-glow"
                loading="eager"
                decoding="async"
              />
            </div>
          )}

          {/* Shine Sweep Overlay */}
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
            <div className="absolute top-0 bottom-0 w-[40%] animate-shine-sweep bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.7)] to-transparent skew-x-[-25deg]" />
          </div>
        </div>

        {/* Subtle ground reflection aura */}
        <div 
          className="w-3/4 mx-auto h-3 -mt-1 rounded-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(34, 188, 203, 0.4) 0%, rgba(16, 185, 129, 0.2) 45%, transparent 75%)',
            filter: 'blur(6px)'
          }}
          aria-hidden="true"
        />
      </div>

      {showTagline && (
        <div className="mt-1 text-xs sm:text-sm font-black tracking-widest text-[#0052cc] uppercase font-['Montserrat']">
          Accelerating Business
        </div>
      )}
    </div>
  );
}
