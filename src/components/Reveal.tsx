import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}