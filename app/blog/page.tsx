import BlogCard from '@/components/BlogCard';
import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '블로그',
  description: '다양한 개발 지식을 공유하기 위해서 작성하는 블로그 입니다.',
  openGraph: {
    title: 'yeonbin 블로그',
    description: '다양한 개발 지식을 공유하기 위해서 작성하는 블로그 입니다.',
    url: 'blog',
    siteName: 'yeonbin blog',
    images: [
      {
        url: 'images/base.jpeg',
        width: 800,
        height: 600,
      },
      {
        url: 'images/base.jpeg',
        width: 1800,
        height: 1600,
        alt: 'yeonbin blog',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function Blog() {
  const blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.publishAt), new Date(b.publishAt)));

  return (
    <section className='min-h-screen/2'>
      <div className='mb-16'>
        <h1 className='text-xl md:text-2xl font-semibold'>
          All Posts <span className='text-base'>({blogs.length})</span>
        </h1>
        <p className='mt-2 text-sm md:text-base text-slate-500 dark:text-slate-300'>
          다양한 개발 지식을 공유하기 위해서 작성하는 블로그 입니다. 📖📚🔥
        </p>
      </div>
      <ul>
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </ul>
    </section>
  );
}
