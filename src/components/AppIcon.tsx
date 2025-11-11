import React from 'react';

interface AppIconProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const AppIcon: React.FC<AppIconProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-12 h-12 rounded-none
        bg-[#4A70A9] dark:bg-[#8FABD4]
        hover:opacity-80 transition-opacity
      `}
      aria-label={`Open ${label}`}
    />
  );
};

