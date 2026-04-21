"use client";

import { useLayoutEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
}

const ScrollStack = ({
  children,
  className = '',
  itemScale = 0.05,
  itemStackDistance = 20,
}: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.scroll-stack-card');
      if (cards.length === 0) return;

      cards.forEach((card, index) => {
        // 1. PINNING: Make each card sticky when it hits the top area
        ScrollTrigger.create({
          trigger: card,
          start: "top 10%", 
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        // 2. STACK EFFECTS: Animate the CURRENT card proportionately when the NEXT card enters
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];
          
          gsap.to(card, {
            scale: 0.95,
            yPercent: -2,
            opacity: 0.8,
            filter: "blur(0.5px)",
            force3D: true,
            scrollTrigger: {
              trigger: nextCard,
              start: "top 95%",
              end: "top 15%",
              scrub: true,
              immediateRender: false,
            }
          });
        }
      });
    }, containerRef);

    // Refresh ScrollTrigger after a short delay to account for dynamic content height
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      context.revert();
    };
  }, [itemScale, itemStackDistance]);

  return (
    <div className={`scroll-stack-container ${className}`.trim()} ref={containerRef}>
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
