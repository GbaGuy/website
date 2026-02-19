"use client";

import { useEffect, useRef } from 'react';

export default function Ruler() {
  const rulerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rulerRef.current) return;
    const ruler = rulerRef.current;
    let html = '';
    // Increased tick count from 300 to 500 for a longer ruler
    for (let i = 0; i < 900; i++) {
      const tall = i % 5 === 0;
      html += `<div class="ruler-tick ${tall ? 'tall' : 'short'}" style="height:${tall ? 18 : 9}px"></div>`;
      if (i % 10 === 0) {
        // Label position: i*5 + 20px gives the same spacing as before
        html += `<span class="ruler-label" style="left:${i * 5 + 20}px">${i}</span>`;
      }
    }
    ruler.innerHTML = html;
  }, []);

  return <div className="hero-ruler" ref={rulerRef} />;
}