import React, { useEffect } from 'react';

const CursorManager = () => {
  useEffect(() => {
    // Hide cursor on mount
    document.body.classList.add('cursor-hidden');
    
    // Show cursor when mouse leaves the window
    const handleMouseLeave = () => {
      document.body.classList.remove('cursor-hidden');
      document.body.classList.add('cursor-visible');
    };
    
    // Hide cursor when mouse enters the window
    const handleMouseEnter = () => {
      document.body.classList.remove('cursor-visible');
      document.body.classList.add('cursor-hidden');
    };
    
    // Show cursor on keyboard navigation (Tab key)
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.remove('cursor-hidden');
        document.body.classList.add('cursor-visible');
      }
    };
    
    // Hide cursor when using mouse
    const handleMouseMove = () => {
      if (!document.body.classList.contains('cursor-hidden')) {
        document.body.classList.remove('cursor-visible');
        document.body.classList.add('cursor-hidden');
      }
    };
    
    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('cursor-hidden', 'cursor-visible');
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return null;
};

export default CursorManager;
