# Product Requirements Document (PRD)
## Personal Website - Desktop Interface

### 1. Overview
A personal website with a desktop-like interface featuring a plain colored background, app icons, and draggable tabs.

### 2. Core Features

#### 2.1 Theme System
- **Dark/Light Mode Toggle**
  - Button to switch between light and dark themes
  - Plain rectangular button design
  - Theme preference should persist (localStorage)
  - Both themes use plain colored backgrounds

#### 2.2 App Icons
- **Design**: Plain rectangular colored buttons with text labels below
- **Layout**: Vertical list in right sidebar
- **Icons**: 
  1. About
  2. Links
  3. Projects
  4. Labs
  5. More
- **Functionality**: 
  - Click to open corresponding tab
  - Click again to close the tab
  - Visual feedback when tab is open (e.g., different color/state)

#### 2.3 Tabs System
- **Design**: Floating windows on the screen
- **Draggable**: Tabs can be dragged around the desktop
- **Initial State**: "Hi" tab is open by default when website loads
- **Tabs**:
  1. "Hi" (default, opens on page load)
  2. About (from About icon)
  3. Links (from Links icon)
  4. Projects (from Projects icon)
  5. Labs (from Labs icon)
  6. More (from More icon)
- **Scalability**: Architecture should support adding more tabs easily
- **Features**:
  - Close button on each tab
  - Tabs can overlap (z-index management)
  - Click to bring tab to front
  - Minimum size constraints

### 3. Technical Requirements

#### 3.1 Technology Stack
- **Framework**: React (or Next.js for better performance)
- **Styling**: Tailwind CSS
- **State Management**: React Context or useState for theme and tabs
- **Drag Functionality**: HTML5 drag and drop API or a lightweight drag library

#### 3.2 Design Guidelines
- Minimalist design
- Plain colored rectangles for all buttons
- Clean, simple typography
- Responsive layout (desktop-first, but mobile-friendly)
- Smooth transitions for theme switching

#### 3.3 Scalability Requirements
- Tab configuration should be data-driven (array of tab objects)
- Icon configuration should be data-driven
- Easy to add new tabs/icons without major code changes
- Component-based architecture

### 4. User Experience Flow

1. **Page Load**:
   - Website loads with default theme (or saved preference)
   - "Hi" tab is automatically opened
   - App icons visible in right sidebar

2. **Opening a Tab**:
   - User clicks an app icon
   - Corresponding tab opens (if not already open)
   - Tab appears with default position
   - Icon shows active state

3. **Closing a Tab**:
   - User clicks the app icon again (if tab is open)
   - OR user clicks close button on the tab
   - Tab closes and icon returns to inactive state

4. **Interacting with Tabs**:
   - User can drag tabs around the screen
   - User can click tabs to bring them to front
   - Multiple tabs can be open simultaneously

5. **Theme Switching**:
   - User clicks dark/light mode button
   - Theme switches instantly
   - Preference is saved

### 5. Component Structure

```
App
├── ThemeProvider (Context)
├── Desktop (main container)
│   ├── ThemeToggleButton
│   ├── AppIconsSidebar
│   │   └── AppIcon (x5)
│   └── TabsContainer
│       └── Tab (x6, conditionally rendered)
```

### 6. Data Structure

```typescript
interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
  iconId: string;
  defaultOpen?: boolean;
}

interface AppIcon {
  id: string;
  label: string;
  tabId: string;
}
```

### 7. Future Enhancements (Not in MVP)
- Tab resizing
- Tab minimization
- Tab grouping
- Custom tab content for each section
- Animations for tab open/close

### 8. Success Criteria
- ✅ Dark/light mode toggle works and persists
- ✅ All 5 app icons render in right sidebar
- ✅ All 6 tabs can be opened/closed
- ✅ "Hi" tab opens by default
- ✅ Tabs are draggable
- ✅ Tabs can be closed via icon click or close button
- ✅ Code is structured to easily add more tabs
- ✅ Design uses Tailwind CSS
- ✅ All buttons are plain rectangular colored buttons

