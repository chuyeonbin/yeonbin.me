import { compareDesc } from 'date-fns';
import { allBlogs } from 'contentlayer/generated';
import HomeProfile from './components/HomeProfile';
import RecentWrapper from './components/RecentWrapper';
import BlogCard from './components/BlogCard';

export default function Home() {
  const blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.publishAt), new Date(b.publishAt)));
  return (
    <div>
      <HomeProfile />
      <RecentWrapper title='최신 글' href='/blog' linkTitle='all posts'>
        <ul>
          {blogs.slice(0, 5).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </ul>
      </RecentWrapper>
    </div>
  );
}
