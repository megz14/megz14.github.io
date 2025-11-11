import React, { useState, useMemo } from 'react';
import { ThemeToggleButton } from './ThemeToggleButton';
import { AppIconsSidebar } from './AppIconsSidebar';
import { Tab } from './Tab';
import { TabPosition } from '../types';
import { tabsConfig, appIconsConfig } from '../config/tabs';

export const Desktop: React.FC = () => {
  const [openTabIds, setOpenTabIds] = useState<Set<string>>(() => {
    const defaultTabs = tabsConfig.filter((tab) => tab.defaultOpen);
    return new Set(defaultTabs.map((tab) => tab.id));
  });

  const [tabPositions, setTabPositions] = useState<Map<string, TabPosition>>(
    () => {
      const positions = new Map<string, TabPosition>();
      tabsConfig.forEach((tab, index) => {
        positions.set(tab.id, {
          x: 100 + index * 50,
          y: 100 + index * 50,
        });
      });
      return positions;
    }
  );

  const [zIndices, setZIndices] = useState<Map<string, number>>(() => {
    const indices = new Map<string, number>();
    let baseZ = 10;
    tabsConfig.forEach((tab) => {
      indices.set(tab.id, baseZ++);
    });
    return indices;
  });

  const openTabs = useMemo(() => {
    return tabsConfig.filter((tab) => openTabIds.has(tab.id));
  }, [openTabIds]);

  const constrainPosition = (tabId: string, position: TabPosition): TabPosition => {
    const tab = tabsConfig.find((t) => t.id === tabId);
    if (!tab) return position;
    
    const tabWidth = tab.width || 400;
    const sidebarWidth = 70;
    const maxX = window.innerWidth - sidebarWidth - tabWidth;
    
    return {
      x: Math.min(Math.max(0, position.x), maxX),
      y: Math.max(0, position.y),
    };
  };

  const handleIconClick = (tabId: string) => {
    setOpenTabIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tabId)) {
        newSet.delete(tabId);
      } else {
        newSet.add(tabId);
        // Set initial position if not exists
        if (!tabPositions.has(tabId)) {
          setTabPositions((prevPos) => {
            const newPos = new Map(prevPos);
            const initialPosition = {
              x: 100 + openTabs.length * 50,
              y: 100 + openTabs.length * 50,
            };
            newPos.set(tabId, constrainPosition(tabId, initialPosition));
            return newPos;
          });
        }
      }
      return newSet;
    });
  };

  const handleTabClose = (tabId: string) => {
    setOpenTabIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(tabId);
      return newSet;
    });
  };

  const handlePositionChange = (tabId: string, position: TabPosition) => {
    const constrainedPosition = constrainPosition(tabId, position);
    
    setTabPositions((prev) => {
      const newPos = new Map(prev);
      newPos.set(tabId, constrainedPosition);
      return newPos;
    });
  };

  const handleTabFocus = (tabId: string) => {
    setZIndices((prev) => {
      const maxZ = Math.max(...Array.from(prev.values()));
      const newZ = new Map(prev);
      newZ.set(tabId, maxZ + 1);
      return newZ;
    });
  };

  return (
    <div className="w-screen h-screen bg-[#EFECE3] dark:bg-gray-700 overflow-hidden">
      <ThemeToggleButton />
      <AppIconsSidebar
        icons={appIconsConfig}
        openTabs={openTabIds}
        onIconClick={handleIconClick}
      />
      {openTabs.map((tab) => {
        const position = tabPositions.get(tab.id) || { x: 100, y: 100 };
        const zIndex = zIndices.get(tab.id) || 10;
        return (
          <Tab
            key={tab.id}
            tab={tab}
            position={position}
            zIndex={zIndex}
            onClose={() => handleTabClose(tab.id)}
            onPositionChange={(pos) => handlePositionChange(tab.id, pos)}
            onFocus={() => handleTabFocus(tab.id)}
          />
        );
      })}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-600 dark:text-gray-400 z-10">
        Built by Andrew Jamsa. Inspired by{' '}
        <a
          href="https://www.sharyap.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80 transition-opacity"
        >
          Sharlene Yap.
        </a>
      </div>
    </div>
  );
};

