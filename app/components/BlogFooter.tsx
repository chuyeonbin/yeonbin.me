import { Blog } from '.contentlayer/generated/types';
import React from 'react';

interface BlogFooterProps {
  prevBlog: Blog | null;
  nextBlog: Blog | null;
}

export default function BlogFooter({ prevBlog, nextBlog }: BlogFooterProps) {
  const justify = prevBlog ? 'justify-between' : 'justify-end';

  return (
    <div className={`flex ${justify}`}>
      {prevBlog && (
        <a href={prevBlog.slug} className='flex flex-col gap-1 text-xs md:text-sm group'>
          <div className='text-slate-400/60'>이전글</div>
          <div className='text-slate-600 dark:text-slate-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300'>
            {prevBlog.title}
          </div>
        </a>
      )}
      {nextBlog && (
        <a href={nextBlog.slug} className='flex flex-col gap-1 text-xs md:text-sm group text-right'>
          <div className='text-slate-400/60'>다음글</div>
          <div className='text-slate-600 dark:text-slate-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300'>
            {nextBlog.title}
          </div>
        </a>
      )}
    </div>
  );
}
