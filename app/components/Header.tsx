'use client';

import Navbar from '@/components/Navbar';
import ThemeSwitch from '@/components/ThemeSwitch';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 z-40 bg-white dark:bg-transparent dark:border-b dark:backdrop-blur dark:border-slate-300/10'>
      <div className='container max-w-screen-md mx-auto px-8 py-4'>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/'>
              <h1 className='text-xl md:text-2xl font-bold'>
                yeonbin
                <span className='text-indigo-700'>.dev</span>
              </h1>
            </Link>
          </div>
          <div className='flex items-center'>
            <Navbar />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
