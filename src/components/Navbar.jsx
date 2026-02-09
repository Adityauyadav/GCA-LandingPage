import { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const NavItem = ({ name, hasDropdown, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mockItems = ['Comptia', 'EC-Council', 'Systools'];

  const toggleDropdown = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => !isMobile && setIsOpen(true);
  const handleMouseLeave = () => !isMobile && setIsOpen(false);

  if (!hasDropdown) {
    return (
      <div className={`flex items-center gap-1 cursor-pointer group ${isMobile ? 'py-3 border-b border-[#262626] w-full' : ''}`}>
        <span className="text-white text-base leading-5 tracking-tight hover:text-gray-300 transition-colors whitespace-nowrap">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div 
      className={`relative flex flex-col ${isMobile ? 'w-full border-b border-[#262626] py-3' : 'items-center'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleDropdown}
    >
      <div className={`flex items-center gap-1 cursor-pointer h-full ${isMobile ? 'justify-between w-full' : ''}`}> 
        <span className="text-white text-base leading-5 whitespace-nowrap">
          {name}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-white" strokeWidth={2.5} />
        ) : (
          <ChevronDown className="w-4 h-4 text-white" strokeWidth={2.5} />
        )}
      </div>

      {isOpen && (
        <div className={isMobile 
          ? "flex flex-col w-full pl-4 mt-2 space-y-1" 
          : "absolute top-full left-0 w-44 pt-1 z-50"
        }>
          <div className={isMobile ? "" : "bg-[#171717] border border-[#262626] rounded-md shadow-xl py-1"}>
            {mockItems.map((item) => (
              <div 
                key={item}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors text-[#A3A3A3] font-normal hover:text-white ${!isMobile && 'hover:bg-[#000000]'}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'About', hasDropdown: true },
    { name: 'Event', hasDropdown: false },
    { name: 'Free Learnings', hasDropdown: true },
    { name: 'Certifications', hasDropdown: true },
    { name: 'Courses', hasDropdown: true },
    { name: 'Store', hasDropdown: true },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#000000] border-b border-[#262626] px-4 md:px-28 py-5 font-sans font-regular relative"
    >
      <div className="max-w-304 mx-auto flex justify-between md:justify-center items-center gap-8">
        
        {/* Mobile Logo/Placeholder */}
        <div className="md:hidden text-white font-bold text-xl">
           IdeaTribe
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#000000] border-b border-[#262626] z-50 flex flex-col px-4 pb-4">
          {navItems.map((item) => (
            <NavItem key={item.name} {...item} isMobile={true} />
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;