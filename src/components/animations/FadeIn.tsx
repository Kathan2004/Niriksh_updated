import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export function FadeIn({ children, direction = 'up', delay = 0, className = '' }: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver();

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(20px)';
      case 'down': return 'translateY(-20px)';
      case 'left': return 'translateX(20px)';
      case 'right': return 'translateX(-20px)';
      default: return 'translateY(20px)';
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}