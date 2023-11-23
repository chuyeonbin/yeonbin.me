'use client';

import { useState } from 'react';
import navList from '@/data/navList';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import ToggleButton from './ToggleButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='text-slate-400 dark:text-indigo-300 text-base md:text-sm'>
        <ul
          className={`md:flex ${
            isOpen ? 'flex' : 'hidden'
          } md:flex-row flex-col items-center md:space-x-8`}
        >
          {navList.map((navItem) => (
            <li className='mt-4 md:mt-0' key={navItem.title}>
              <Link
                className='hover:text-indigo-700 hover:underline underline-offset-4'
                href={navItem.link}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
          <ThemeSwitch />
        </ul>
      </nav>
      <ToggleButton onClick={handleClick} />
    </>
  );
}
