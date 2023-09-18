'use client';
import Navbar from '@/components/Navbar';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <header className='sticky top-0 z-40'>
      <div className='container max-w-screen-md mx-auto px-8 py-4'>
        <div className='flex items-center justify-between'>
          <div>logo</div>
          <div className='flex items-center'>
            <Navbar />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
