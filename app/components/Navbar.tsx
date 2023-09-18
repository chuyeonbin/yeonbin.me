import navList from '@/data/navList';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='text-slate-400 dark:text-indigo-300 text-sm'>
      <ul className='flex space-x-8'>
        {navList.map((navItem) => (
          <li key={navItem.title}>
            <Link
              className='hover:text-indigo-700 hover:underline underline-offset-4'
              href={navItem.link}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
