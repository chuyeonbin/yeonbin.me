import Link from 'next/link';
import Image from 'next/image';
import { Blog } from 'contentlayer/generated';
import dateFormat from 'app/util/date';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <li className='p-3 border-b dark:border-slate-300/20'>
      <Link href={`blog/${blog.slug}`} className='group'>
        <div className='min-h-min md:grid grid-cols-12 gap-x-4'>
          <Image
            width={130}
            height={130}
            src={blog.thumbnailUrl}
            placeholder='blur'
            alt='thumbnail'
            className='hidden h-36 w-36 md:block col-span-3 rounded-lg'
            blurDataURL='data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII=
            '
          />
          <div className='col-span-9'>
            <span className='text-slate-500 text-sm md:text-base'>
              {dateFormat(blog.publishAt)}
            </span>
            <h3 className='mt-2 text-lg md:text-xl font-semibold group-hover:text-indigo-700 dark:group-hover:text-indigo-300 line-clamp-1'>
              {blog.title}
            </h3>
            <p className='mt-2 text-sm md:text-base text-slate-500 line-clamp-2'>
              {blog.description}
            </p>
            {blog.tags.length > 0 ? (
              <ul className='mt-5 flex flex-wrap text-xs md:text-sm  text-slate-500/60'>
                {blog.tags.map((tag) => (
                  <li className='mr-4' key={tag}>
                    #<span>{tag}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </Link>
    </li>
  );
}
