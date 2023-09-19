import Link from 'next/link';

interface RecentWrapperProps {
  title: string;
  href: string;
  linkTitle: string;
  children: React.ReactNode;
}

export default function RecentWrapper({ title, href, linkTitle, children }: RecentWrapperProps) {
  return (
    <div>
      <div className='py-12 flex justify-between items-center'>
        <h1 className='text-xl md:text-2xl font-semibold'>{title}</h1>
        <Link
          href={href}
          className='px-2 py-3 rounded-lg hover:bg-slate-100 text-slate-500 dark:hover:bg-slate-800 dark:hover:text-indigo-300'
        >
          {linkTitle}
          {'  '}
          {'->'}
        </Link>
      </div>
      {children}
    </div>
  );
}
