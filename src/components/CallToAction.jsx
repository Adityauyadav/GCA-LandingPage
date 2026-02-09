import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import bg2 from '../assets/bg2.webp';

const CallToAction = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Increased range for a much faster/more noticeable effect
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Fast Parallax Background */}
      <motion.div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y,
          scale: 1.5, // High scale is necessary for high speed
        }}
      />

      {/* Color overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 px-4">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center md:text-left">
          Join us on a journey to excellence.
        </h2>
        <button className="flex items-center gap-2 bg-[#2D31FA] hover:bg-blue-600 transition-colors px-8 py-3 rounded-lg font-semibold text-white">
          Get Started 
          <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;