import Link from 'next/link';
import { Blog } from 'contentlayer/generated';
import { dateFormat } from 'app/util/date';

interface RecentBlogProps {
  blog: Blog;
}

export default function RecentBlog({ blog }: RecentBlogProps) {
  return (
    <li className='p-3 border-b dark:border-slate-300/20'>
      <Link href={`blog/${blog.slug}`} className='group'>
        <div className='min-h-min md:grid grid-cols-12 gap-x-4'>
          <img
            src='test'
            alt='thumbnail'
            className='hidden md:block col-span-3 rounded-lg bg-slate-500'
          />
          <div className='col-span-9'>
            <span className='text-slate-500 text-sm md:text-base'>
              {dateFormat(blog.publishAt)}
            </span>
            <h3 className='mt-2 text-lg md:text-xl font-semibold group-hover:text-indigo-700 dark:group-hover:text-indigo-300 line-clamp-1'>
              {blog.title}
            </h3>
            <p className='mt-2 text-sm md:text-base font-semibold text-slate-500 line-clamp-2'>
              {blog.description}
            </p>
            {blog.tags.length > 0 ? (
              <ul className='mt-5 flex flex-wrap space-x-2 text-xs md:text-sm  text-slate-500/60'>
                {blog.tags.map((tag) => {
                  return (
                    <li key={tag}>
                      #<span>{tag}</span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </Link>
    </li>
  );
}
