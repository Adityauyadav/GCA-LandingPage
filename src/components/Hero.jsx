import elementsImg from '../assets/elements.svg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation settings for easy adjustment
  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const growIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay: 0.4, ease: "backOut" }
  };

  return (
    <section className="relative w-full min-h-175 flex items-center overflow-hidden bg-linear-to-b from-black to-[#000063] rounded-b-[50px] md:rounded-b-[70px] shadow-2xl">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10 py-12 md:py-0">
        
        {/* Content Side */}
        <div className="text-white max-w-xl flex flex-col items-center text-center md:items-end md:text-right md:ml-auto order-2 md:order-1">
          <motion.div {...fadeIn}>
            <p className="text-4xl md:text-4xl lg:text-5xl font-light mb-2">
              Be
            </p>
            <h1 className="text-5xl md:text-5xl lg:text-8xl font-black tracking-tight leading-none mb-6">
              Skilltastic!
            </h1>
            <p className="text-xs md:text-xs lg:text-base font-medium tracking-wide uppercase opacity-90 mb-2 whitespace-nowrap">
              Build, Validate & Strengthen your cyber skills.
            </p>
            <p className="text-sm md:text-sm lg:text-base opacity-80 mb-8 max-w-sm md:max-w-none">
              Open doors to resilient careers and future-ready opportunities.
            </p>
          </motion.div>
          
          {/* Growing CTA Button */}
          <motion.button 
            {...growIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-[#2D31FA] hover:bg-blue-600 transition-colors px-8 py-3 rounded-lg font-semibold text-white shadow-lg"
          >
            Get Started 
            <span className="text-xl">→</span>
          </motion.button>
        </div>

        {/* Hero Image Side */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center h-full order-1 md:order-2"
        >
          <img 
            src={elementsImg} 
            alt="Skilltastic Graphic Elements" 
            className="w-full max-w-70 md:max-w-55 lg:max-w-100 h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#000063] blur-[150px] opacity-20 z-0"></div>
    </section>
  );
};

export default HeroSection;