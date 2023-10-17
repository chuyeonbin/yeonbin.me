'use client';

import { useState } from 'react';
import useIntersectionObserver from 'app/hooks/useIntersectionObserver';

interface TocProps {
  headings: JSON;
}

export default function Toc({ headings }: TocProps) {
  const [headingId, setHeadingId] = useState('');
  const tocHeadings = JSON.parse(JSON.stringify(headings)) as {
    level: string;
    text: string;
    slug: string;
  }[];
  useIntersectionObserver(setHeadingId);

  return (
    <div className='fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-16 overflow-y-auto hidden xl:block text-sm text-slate-500/60 dark:text-slate-500/80'>
      <ul>
        {tocHeadings.map((heading) => (
          <li className='mb-3' key={heading.slug}>
            <a
              className={`data-[level=two]:pl-2 data-[level=three]:pl-6 hover:text-indigo-400 ${
                headingId === heading.slug ? 'text-indigo-400' : ''
              }`}
              data-level={heading.level}
              href={`#${heading.slug}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
