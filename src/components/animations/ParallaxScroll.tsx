import React, { useEffect, useRef } from 'react';

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxScroll({ children, speed = 0.5, className = '' }: ParallaxScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const scrolled = window.scrollY;
      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      
      if (scrolled > elementTop - window.innerHeight && scrolled < elementTop + rect.height) {
        const yPos = (scrolled - elementTop) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}