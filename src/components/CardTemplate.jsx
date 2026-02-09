import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CardTemplate = ({ 
  number, 
  headerText, 
  titleNormal, 
  titleBold, 
  description, 
  imageSrc, 
  isReversed,
  parentScrollProgress
}) => {
  const ref = useRef(null);
  const { scrollYProgress: localScroll } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scrollProgress = parentScrollProgress || localScroll;

  const yParallax = useTransform(scrollProgress, [0, 1], ["0%", "-15%"]);
  const imgYParallax = useTransform(scrollProgress, [0, 1], ["5%", "-5%"]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
      w-full max-w-304 
      bg-neutral-950 rounded-4xl outline-[6px] outline-offset-[-6px] outline-white/20
      flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
      items-center justify-between overflow-hidden
    `}>
      
      {/* Number and Header Section (The "01 Build" / "02 Validate" part) */}
      <motion.div 
        style={{ y: yParallax }}
        className="w-full md:w-[40%] flex flex-col justify-center items-center gap-4 md:gap-8 py-8 md:py-24"
      >
        <div className="self-stretch h-24 md:h-48 text-center flex items-center justify-center text-white text-7xl md:text-[156px] font-semibold font-sans leading-tight md:leading-21">
          {number}
        </div>
        <div className="self-stretch text-center text-stone-50 text-5xl md:text-8xl font-black font-sans leading-tight md:leading-21">
          {headerText}
        </div>
      </motion.div>

      {/* Content Section (Image and Description) */}
      <div className="w-full md:w-[60%] p-6 md:p-16 flex flex-col gap-4 md:gap-6">
        {/* Image Container */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="rounded-md border-[3px] border-white overflow-hidden relative"
        >
          <motion.img 
            style={{ scale: 1.1, y: imgYParallax }}
            src={imageSrc} 
            alt={titleBold} 
            className="w-full h-auto object-cover aspect-740/300"
          />
        </motion.div>
        
        {/* Text Content - Always left-aligned relative to its container */}
        <div className="flex flex-col gap-2 md:gap-4 text-left">
          <div className="flex flex-col">
            <span className="text-white text-2xl md:text-4xl font-normal font-sans leading-8 md:leading-10">
              {titleNormal}
            </span>
            <span className="text-white text-2xl md:text-4xl font-bold font-sans leading-8 md:leading-10">
              {titleBold}
            </span>
          </div>
          <p className="text-stone-50 text-xl font-normal font-sans leading-8 opacity-80 max-w-150">
            {description}
          </p>
        </div>
      </div>
      
    </motion.div>
  );
};

export default CardTemplate;