// File: app/page.js
'use client';

import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Section1 from '@/app/components/Section1';
import Section2 from '@/app/components/Section2';

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}