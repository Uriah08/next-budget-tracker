'use client'

import React, { useState } from "react";
import Link from "next/link";
import { LayoutDashboard,ArrowLeftRight,FolderKanban,TrendingUpDown } from 'lucide-react'

interface NavLink {
  label: string;
  link: string;
  icon: React.JSX.Element;
}

// Component for individual navigation links
interface NavLinkProps extends NavLink {
  selected: string;
  setSelected: (label: string) => void;
}

const NavLinks = ({ label, link, icon, selected, setSelected }: NavLinkProps) => {
  return (
    <Link
      href={link}
      onClick={() => setSelected(label)}
      className={`flex items-center gap-5 fg-hover text-[18px] ${
        selected === label ? "fg-theme-max" : "fg-theme"
      }`}
    >
      {icon}
      <span className="hidden lg:block">{label}</span>
    </Link>
  );
};

const navs = [
  {
      label: 'Dashboard',
      icon: <LayoutDashboard size={20}/>,
      link: '/',
  },
  {
      label: 'Transaction',
      icon: <ArrowLeftRight size={20}/>,
      link: '/transaction',
  },
  {
      label: 'Manage',
      icon: <FolderKanban size={20}/>,
      link: '/manage',
  },
  {
      label: 'Predictions',
      icon: <TrendingUpDown size={20}/>,
      link: '/prediction',
  },
]

// Main Navigation Component
const Navigation = () => {
  const [selected, setSelected] = useState("Dashboard");

  

  return (
    <div className='flex flex-col mt-20 gap-5 items-center lg:items-start'>
      {navs.map((navItem) => (
        <NavLinks
          key={navItem.label}
          {...navItem}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default Navigation;
