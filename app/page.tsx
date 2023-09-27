import { compareDesc } from 'date-fns';
import { allBlogs, allLogs } from 'contentlayer/generated';
import HomeProfile from './components/HomeProfile';
import RecentWrapper from './components/RecentWrapper';
import BlogCard from './components/BlogCard';
import RecentLog from './components/RecentLog';

export default function Home() {
  const blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.publishAt), new Date(b.publishAt)));
  const logs = allLogs.sort((a, b) => compareDesc(new Date(a.publishAt), new Date(b.publishAt)));

  return (
    <div>
      <HomeProfile />
      <RecentWrapper title='Recent Posts' href='/blog' linkTitle='all posts'>
        <ul>
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </ul>
      </RecentWrapper>
      <RecentWrapper title='Recent Logs' href='/log' linkTitle='all logs'>
        <ul>
          {logs.map((log) => (
            <RecentLog key={log._id} log={log} />
          ))}
        </ul>
      </RecentWrapper>
    </div>
  );
}
