"use client";
import React, { useState } from 'react';
import type { ReactNode } from 'react';
import Navbar from './Navbar';
import SmallSidebar from './SmallSidebar';
import BigSidebar from './BigSidebar';

interface SidebarLayoutProps {
  initial?: string;
  bgColor?: string;
  children?: ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ initial, bgColor, children }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded((prev) => !prev);

  return (
    <div className="flex flex-col h-screen bg-[#F9FAFB]">
      <Navbar onToggle={toggle} initial={initial} bgColor={bgColor} />

      <div className="flex flex-1 overflow-hidden">
        {expanded ? <BigSidebar /> : <SmallSidebar />}

        <div
          className="
            flex-1 p-6 overflow-auto
            transition-[margin] duration-300 ease-in-out
            ml-4 group-hover:ml-4
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
