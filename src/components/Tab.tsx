import React, { useState, useRef, useEffect } from 'react';
import { Tab as TabType, TabPosition } from '../types';

interface TabProps {
  tab: TabType;
  position: TabPosition;
  zIndex: number;
  onClose: () => void;
  onPositionChange: (position: TabPosition) => void;
  onFocus: () => void;
}

export const Tab: React.FC<TabProps> = ({
  tab,
  position,
  zIndex,
  onClose,
  onPositionChange,
  onFocus,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const tabRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLButtonElement && e.target.type === 'button') {
      return;
    }
    
    setIsDragging(true);
    const rect = tabRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    onFocus();
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition: TabPosition = {
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      };
      onPositionChange(newPosition);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, onPositionChange]);

  const width = tab.width || 400;
  const height = tab.height || 300;

  return (
    <div
      ref={tabRef}
      className="fixed bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-none shadow-lg flex flex-col"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${width}px`,
        height: `${height}px`,
        zIndex,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onClick={onFocus}
    >
      <div className="flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-700 border-b-2 border-gray-400 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {tab.title}
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="px-4 py-1 rounded-none transition-opacity hover:opacity-80"
          aria-label="Close tab"
        >
          ×
        </button>
      </div>
      <div className="p-6 text-gray-800 dark:text-gray-200 overflow-auto flex-1">
        {tab.content}
      </div>
    </div>
  );
};

