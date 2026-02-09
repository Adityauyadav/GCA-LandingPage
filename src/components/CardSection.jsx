import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import CardTemplate from './CardTemplate';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';

const cardData = [
  {
    number: "01",
    headerText: "Build",
    titleNormal: "Identify Your",
    titleBold: "Cybersecurity Skills",
    description: "Build a personalized, role-ready Skill Map in just 15 minutes. Designed for fresh graduates and experienced professionals alike. Start now.",
    imageSrc: card1,
    isReversed: false,
  },
  {
    number: "02",
    headerText: "Validate",
    titleNormal: "Validate to",
    titleBold: "Conquer",
    description: "Prove the accuracy and credibility of your cybersecurity skills with ease. Tackle targeted questions and scenario-based mini challenges to verify your experience and operational readiness.",
    imageSrc: card2,
    isReversed: true,
  },
  {
    number: "03",
    headerText: "Grow",
    titleNormal: "Unleash your",
    titleBold: "Potential",
    description: "Use personalized recommendations and role-aligned learning paths to continuously strengthen your skill map and expand your cybersecurity capabilities.",
    imageSrc: card3,
    isReversed: false,
  }
];

const CardSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    /* Background gradient applied here to the wrapper */
        <section 
          ref={containerRef}
          className="relative w-full py-18 px-4 md:py-24 md:px-6 flex flex-col items-center gap-12 md:gap-24 bg-linear-to-b from-[#000063] via-[#000063] via-60% to-[black] rounded-[30px] md:rounded-[50px] shadow-2xl"
        >     
      {cardData.map((card, index) => (
        <div 
          key={index} 
          className="sticky w-full flex justify-center"
          // Increased the top offset so the stacking effect is more visible
          style={{ 
            top: `${80 + (index * 40)}px`,
            zIndex: index + 1 
          }}
        >
          {/* We add a slight shadow to the CardTemplate call to help separation */}
          <div className="w-full max-w-304 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.5)] rounded-4xl">
            <CardTemplate 
              {...card} 
              parentScrollProgress={scrollYProgress}
            />
          </div>
        </div>
      ))}

      {/* Spacer so the last card doesn't just hit the bottom of the screen instantly */}
      
    </section>
  );
};

export default CardSection;