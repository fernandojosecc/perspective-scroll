'use client';

import Image from 'next/image';
import { useTransform, motion } from 'framer-motion';
import Pic2 from '@/public/pic2.jpg'; // Add this image to your /public folder

export default function Section2({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen"
    >
      <Image src={Pic2} alt="img" placeholder="blur" fill />
    </motion.div>
  );
}
