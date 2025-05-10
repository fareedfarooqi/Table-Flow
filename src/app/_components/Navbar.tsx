'use client';

import React, { type FC } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TbMenu2, TbHelp } from 'react-icons/tb';
import { PiBell } from 'react-icons/pi';

interface NavbarProps {
  onToggle: () => void;
  initial?: string;
  bgColor?: string;
}

const Navbar: FC<NavbarProps> = ({ onToggle, initial, bgColor }) => {
  return (
    <div className="bg-white px-3 py-3 shadow flex items-center justify-between border border-gray-200">
      <div className="flex items-center gap-5">
        <TbMenu2
          size={20}
          className="text-[#B2B3B5] hover:text-[#1D1F24] cursor-pointer"
          onClick={onToggle}
        />
        <img src="/airtable-full-inline.svg" alt="Logo" className="w-25 cursor-pointer" />
      </div>

      <div className="flex items-center justify-between w-[14%] px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-full cursor-pointer hover:shadow-md">
        <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
          <FiSearch size={12} className="text-black" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none border-none bg-transparent placeholder-gray-500 text-[0.75rem]"
          />
        </div>
        <div className="hidden sm:flex items-center space-x-1 text-gray-400 text-[0.8rem] font-medium">
          <span>⌘ K</span>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button className="flex items-center gap-1 hover:bg-[#E8E8E8] px-3 py-1 rounded-3xl text-sm cursor-pointer">
          <TbHelp />
          Help
        </button>
        <button className="rounded-3xl hover:bg-[#F5F5F5] p-2 shadow-[0_0_0_0.5px_#DADCE0] cursor-pointer">
          <PiBell />
        </button>
        {initial && (
          <div
            className={`
              w-8 h-8 ${bgColor} rounded-full
              flex items-center justify-center
              text-white font-semibold text-sm
              border border-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]
            `}
          >
            {initial}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
