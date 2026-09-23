import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  className = '' 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, reveal immediately
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When element enters viewport, mark as visible and unobserve so it stays visible permanently
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      // Check if already in viewport on mount (e.g. hero section)
      const rect = currentElem.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setIsVisible(true);
      } else {
        observer.observe(currentElem);
      }
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6';
      case 'fade-down':
        return isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-6';
      case 'fade-left':
        return isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-6';
      case 'fade-right':
        return isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-6';
      case 'scale-up':
        return isVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-98';
      case 'fade-in':
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  return (
    <div
      ref={domRef}
      style={{ 
        transitionDuration: '600ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
      className={`transition-all transform ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
