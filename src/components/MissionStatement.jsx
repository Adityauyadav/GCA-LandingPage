import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import bg from '../assets/bg.jpg';

const MissionStatement = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Maps scroll progress to a Y translation (moves from -50px to 50px)
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  return (
    <section ref={ref} className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y, // This applies the parallax
          scale: 1.2 // Scaling up ensures no white edges appear during the move
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <h2 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center px-4">
        Three steps. A million possibilities.
      </h2>
    </section>
  );
};
export default MissionStatement;