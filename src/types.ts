import { ReactNode } from 'react';

export interface Tab {
  id: string;
  title: string;
  content: ReactNode;
  iconId: string;
  defaultOpen?: boolean;
  width?: number;
  height?: number;
}

export interface AppIcon {
  id: string;
  label: string;
  tabId: string;
}

export interface TabPosition {
  x: number;
  y: number;
}

