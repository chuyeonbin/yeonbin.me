// import Link from 'next/link';
// import { compareDesc, format, parseISO } from 'date-fns';
// import { allPosts, Post } from 'contentlayer/generated';
// import { useMDXComponent } from 'next-contentlayer/hooks';
import HomeProfile from './components/HomeProfile';
import RecentWrapper from './components/RecentWrapper';

// interface PostCardProps {
//   post: Post;
// }

// function PostCard({ post }: PostCardProps) {
//   const MDXContent = useMDXComponent(post.body.code);

//   return (
//     <div className='mb-8'>
//       <h3>안녕하세요!🚞</h3>
//       <h2 className='text-3xl font-bold underline'>
//         <Link href={post.slug} className='text-red-900 dark:text-blue-400'>
//           {post.title} 🚞
//         </Link>
//       </h2>
//       <time dateTime={post.publishAt} className='mb-2 block text-xs text-gray-600'>
//         {format(parseISO(post.publishAt), 'LLLL d, yyyy')}
//       </time>
//       <MDXContent />
//     </div>
//   );
// }

export default function Home() {
  // const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishAt), new Date(b.publishAt)));
  return (
    <div className='py-14'>
      <HomeProfile />
      <RecentWrapper title='Recent Posts' href={'/blog'} linkTitle='all posts'>
        <div>asd</div>
      </RecentWrapper>
      <RecentWrapper title='Recent Logs' href={'/log'} linkTitle='all logs'>
        <div>asd</div>
      </RecentWrapper>
    </div>
  );
}
