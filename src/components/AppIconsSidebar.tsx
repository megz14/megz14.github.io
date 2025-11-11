import React from 'react';
import { AppIcon } from './AppIcon';
import { AppIcon as AppIconType } from '../types';

interface AppIconsSidebarProps {
  icons: AppIconType[];
  openTabs: Set<string>;
  onIconClick: (tabId: string) => void;
}

export const AppIconsSidebar: React.FC<AppIconsSidebarProps> = ({
  icons,
  openTabs,
  onIconClick,
}) => {
  return (
    <div className="fixed right-0 top-0 h-screen w-[70px] flex flex-col items-center z-40 bg-[#000000] pt-4 gap-4">
      {icons.map((icon) => (
        <AppIcon
          key={icon.id}
          label={icon.label}
          isActive={openTabs.has(icon.tabId)}
          onClick={() => onIconClick(icon.tabId)}
        />
      ))}
    </div>
  );
};

