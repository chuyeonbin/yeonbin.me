import BlogCard from '@/components/BlogCard';
import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Blog() {
  const blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.publishAt), new Date(b.publishAt)));

  return (
    <div>
      <h1 className='text-xl md:text-2xl font-semibold'>
        All Posts <span className='text-base'>({blogs.length})</span>
      </h1>
      <ul className='mt-12'>
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}
