import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import { dateFormat } from 'app/util/date';

interface RecentPostProps {
  post: Post;
}

export default function RecentPost({ post }: RecentPostProps) {
  return (
    <li className='p-3 border-b dark:border-slate-300/20'>
      <Link href={`blog/${post.slug}`} className='group'>
        <div className='h-32 md:h-40 md:grid grid-cols-12 gap-x-4'>
          <img
            src='test'
            alt='thumbnail'
            className='hidden md:block col-span-3 rounded-lg bg-slate-500'
          />
          <div className='col-span-9'>
            <span className='text-slate-500 text-sm md:text-base'>
              {dateFormat(post.publishAt)}
            </span>
            <h3 className='mt-2 text-lg md:text-xl font-semibold group-hover:text-indigo-700 dark:group-hover:text-indigo-300 line-clamp-1'>
              {post.title}
            </h3>
            <p className='mt-2 text-sm md:text-base font-semibold text-slate-400 line-clamp-2'>
              {post.description}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
