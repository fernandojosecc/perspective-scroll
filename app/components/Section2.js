'use client';

import { motion, useTransform } from 'framer-motion';

export default function Section2({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="h-screen bg-black text-white flex items-center justify-center text-[3.5vw]"
    >
      <p>Final Section</p>
    </motion.div>
  );
}
