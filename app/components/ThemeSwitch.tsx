'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <li className='mt-4 md:mt-0 flex md:ml-6 md:pl-6 md:border-l border-slate-200 dark:border-slate-800'>
      <button type='button' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {mounted && theme === 'dark' ? (
          <MoonIcon className='text-indigo-300 hover:text-indigo-700 w-5 h-5' />
        ) : (
          <SunIcon className='text-slate-400 hover:text-indigo-700 w-5 h-5' />
        )}
      </button>
    </li>
  );
}
