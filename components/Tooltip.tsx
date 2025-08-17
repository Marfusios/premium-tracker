import React, { useState, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'center' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, className = '', position = 'top', align = 'center' }) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Initialize with 0,0. This also helps with the initial opacity trick.
  const [coords, setCoords] = useState({ top: 0, left: 0 }); 

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  useLayoutEffect(() => {
    // Only calculate if the tooltip is set to be visible
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      let top: number;
      let left: number;

      // Position logic
      switch (position) {
        case 'bottom':
          top = triggerRect.bottom + 8;
          break;
        case 'left':
          left = triggerRect.left - tooltipRect.width - 8;
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          break;
        case 'right':
          left = triggerRect.right + 8;
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          break;
        default: // 'top'
          top = triggerRect.top - tooltipRect.height - 8;
          break;
      }

      // Alignment logic for top/bottom positions
      if (position === 'top' || position === 'bottom') {
        switch (align) {
          case 'left':
            left = triggerRect.left;
            break;
          case 'right':
            left = triggerRect.right - tooltipRect.width;
            break;
          default: // 'center'
            left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
            break;
        }
      }

      // Boundary checks to prevent going off-screen
      if (left < 8) left = 8;
      if (left + tooltipRect.width > window.innerWidth) left = window.innerWidth - tooltipRect.width - 8;
      if (top < 8) top = 8;
      if (top + tooltipRect.height > window.innerHeight) top = window.innerHeight - tooltipRect.height - 8;

      setCoords({ top, left });
    }
  }, [isVisible, position, align, content]); // Recalculate if visibility, position, or align changes. Also when content changes size.

  // The portal will only mount when `isVisible` is true.
  const TooltipComponent = isVisible ? createPortal(
    <div
      ref={tooltipRef}
      className="fixed w-max max-w-xs p-2 text-sm bg-brand-card text-brand-text-primary rounded-md shadow-lg z-50 pointer-events-none"
      style={{
        top: `${coords.top}px`,
        left: `${coords.left}px`,
        // Use opacity to fade in smoothly, only when coords are calculated
        opacity: coords.top === 0 && coords.left === 0 ? 0 : 1,
        transition: 'opacity 0.2s ease-in-out',
      }}
    >
      {content}
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // This wrapper is essential for the ref
        className={`inline-flex items-center ${className}`} 
      >
        {children}
      </div>
      {TooltipComponent}
    </>
  );
};

export default Tooltip;
