import { Bars3Icon } from '@heroicons/react/24/solid';
import React from 'react';

interface ToggleButtonProps {
  onClick: React.MouseEventHandler<HTMLSpanElement>;
}

function ToggleButton({ onClick }: ToggleButtonProps) {
  return (
    <span
      onClick={onClick}
      className='absolute right-4 top-5 inline-block md:hidden cursor-pointer'
    >
      <Bars3Icon className='h-6 w-6' />
    </span>
  );
}

export default ToggleButton;
