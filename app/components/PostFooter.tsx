import { Blog, Record } from '.contentlayer/generated/types';
import React from 'react';

interface PostFooterProps {
  prevPost: Blog | Record | null;
  nextPost: Blog | Record | null;
}

export default function PostFooter({ prevPost, nextPost }: PostFooterProps) {
  const justify = prevPost ? 'justify-between' : 'justify-end';

  return (
    <div className={`flex ${justify}`}>
      {prevPost && (
        <a href={prevPost.slug} className='flex flex-col gap-1 text-xs md:text-sm group'>
          <div className='text-slate-400/60'>이전글</div>
          <div className='text-slate-600 dark:text-slate-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300'>
            {prevPost.title}
          </div>
        </a>
      )}
      {nextPost && (
        <a href={nextPost.slug} className='flex flex-col gap-1 text-xs md:text-sm group text-right'>
          <div className='text-slate-400/60'>다음글</div>
          <div className='text-slate-600 dark:text-slate-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300'>
            {nextPost.title}
          </div>
        </a>
      )}
    </div>
  );
}
