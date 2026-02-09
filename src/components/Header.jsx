import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { User, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-4 md:px-6 py-2 bg-black border-b border-white/10"
    >
      {/* Left side spacer to balance the layout for center logo */}
      <div className="flex-1 hidden md:block"></div>

      {/* Center Logo */}
      <div className="shrink-0">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-end gap-3 md:gap-6">
        
        {/* Profile Section */}
        <div 
            className="flex items-center gap-2 cursor-pointer transition-colors"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
            <div className="w-6 h-6 bg-[#0000FF] rounded-full flex items-center justify-center text-white border border-white">
                <User size={14} />
            </div>
            <span className="text-sm font-medium text-white hidden md:block">Profile</span>
            {isProfileOpen ? <ChevronUp size={16} className="text-gray-400 hidden md:block" /> : <ChevronDown size={16} className="text-gray-400 hidden md:block" />}
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3">
             <a href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6699 0C17.4045 0.000122745 17.9998 0.577586 18 1.28906V16.7109C17.9999 17.4227 17.4045 17.9999 16.6699 18H1.33008C0.595772 17.9999 0 17.4226 0 16.7109V1.28906C0.000183056 0.577586 0.595814 0.000122862 1.33008 0H16.6699ZM12.082 6.77051C10.6527 6.77051 10.0122 7.5563 9.6543 8.1084V6.95996H6.96094C6.99592 7.71643 6.96128 14.9918 6.96094 15.0635H9.6543V10.5391C9.6543 10.2972 9.67204 10.0546 9.74316 9.88184C9.93779 9.39774 10.3808 8.89649 11.125 8.89648C12.0993 8.89648 12.4892 9.63927 12.4893 10.7285V15.0635H15.1826V10.417C15.1825 7.92827 13.854 6.77053 12.082 6.77051ZM2.77637 15.0635H5.46973V6.95996H2.77637V15.0635ZM4.1416 3.05371C3.21976 3.05373 2.61816 3.65881 2.61816 4.4541C2.61829 5.23164 3.20253 5.85352 4.10645 5.85352H4.12402C5.06291 5.85341 5.64737 5.23161 5.64746 4.4541C5.62988 3.65873 5.06284 3.05371 4.1416 3.05371Z" fill="white"/>
                </svg>
             </a>
             <a href="#" className="text-gray-400 hover:text-[#FF0000] transition-colors" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
             </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
