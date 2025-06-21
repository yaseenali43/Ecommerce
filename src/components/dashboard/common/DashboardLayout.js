
'use client';

import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import OffCanvasSidebar from './OffCanvasSidebar';
import OffCanvasSearch from './OffCanvasSearch';


export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex h-screen bg-dashboard">
      {/* Sidebar for large screens */}
      <div className="hidden lg:block">
        <DashboardSidebar isCollapsed={isCollapsed} />
      </div>
      {/* Off-canvas drawer for small screens */}
      <OffCanvasSidebar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <div className="flex-1 flex flex-col">
        <DashboardHeader
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          setIsDrawerOpen={setIsDrawerOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
      {/* Off-canvas search popup for small screens */}
      <OffCanvasSearch
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </div>
  );
}