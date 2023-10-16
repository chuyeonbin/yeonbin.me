'use client';

import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';

export default function ScrollTopButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (!buttonRef.current) return;

      if (window.scrollY > 2500) {
        buttonRef.current.classList.remove('hide');
      } else {
        buttonRef.current.classList.add('hide');
      }
    };
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <button
      type='button'
      className='fixed bottom-5 right-5 p-2 z-30 text-slate-400 hover:text-indigo-300 hover:bg-slate-300/20 rounded-full'
      onClick={scrollToTop}
      ref={buttonRef}
    >
      <ChevronUpIcon
        className='w-4 h-4 md:w-6 md:h-6 font-black'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </button>
  );
}
