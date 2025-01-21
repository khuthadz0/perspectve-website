import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AnimatedElement = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 0.5,
  className = '' 
}) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`opacity-0 ${className}`}
      style={{
        '--animation-delay': `${delay}s`,
        '--animation-duration': `${duration}s`
      }}
      data-animation={animation}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;