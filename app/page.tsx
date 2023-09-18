import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className='mb-8'>
      <h3>안녕하세요!🚞</h3>
      <h2 className='text-3xl font-bold underline'>
        <Link href={post.slug} className='text-red-900 dark:text-blue-400'>
          {post.title} 🚞
        </Link>
      </h2>
      <time dateTime={post.publishAt} className='mb-2 block text-xs text-gray-600'>
        {format(parseISO(post.publishAt), 'LLLL d, yyyy')}
      </time>
      <MDXContent />
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishAt), new Date(b.publishAt)));
  return (
    <div className='mx-auto max-w-xl py-8'>
      <h1 className='mb-8 text-center text-2xl font-black'>Next.js + Contentlayer Example</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
}
