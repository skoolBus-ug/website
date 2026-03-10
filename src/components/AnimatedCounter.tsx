"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue(value);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  function animateValue(target: string) {
    // Extract the numeric part
    const match = target.match(/^([\d,]+)/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const numStr = match[1].replace(/,/g, "");
    const endVal = parseInt(numStr, 10);
    const suffix = target.slice(match[0].length); // e.g. "+", "%"
    const prefix = target.match(/^[^\d]*/)?.[0] || "";
    const hasCommas = match[1].includes(",");

    const duration = 1800;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * endVal);

      let formatted = current.toString();
      if (hasCommas) {
        formatted = current.toLocaleString();
      }

      setDisplay(prefix + formatted + suffix);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
