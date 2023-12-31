import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dateFormat from 'app/util/date';
import { allBlogs } from 'contentlayer/generated';
import MDXPost from '@/components/MDXPost';
import Giscus from '@/components/Giscus';
import PostFooter from '@/components/PostFooter';
import Toc from '@/components/Toc';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = allBlogs.find((p) => p.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  return {
    metadataBase: new URL('https://yeonbin.me'),
    description: blog.description,
    title: blog.title,
    openGraph: {
      url: `blog/${blog.slug}`,
      description: blog.description,
      images: [
        {
          url: blog.thumbnailUrl,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
      tags: blog.tags,
    },
  };
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const blog = allBlogs.find((p) => p.slug === slug);
  const postIndex = allBlogs.findIndex((v) => v.slug === slug);

  if (!blog || postIndex === -1) return notFound();

  const index = allBlogs.indexOf(blog);

  return (
    <section>
      <div className='mb-12 md:mb-16'>
        <span className='text-slate-500 text-sm md:text-base'>{dateFormat(blog.publishAt)}</span>
        <h1 className='mt-2 text-2xl md:text-3xl font-semibold opacity-90'>{blog.title}</h1>
        {blog.tags.length > 0 ? (
          <ul className='mt-5 flex flex-wrap text-xs md:text-sm  text-slate-500/60 dark:text-slate-500/80'>
            {blog.tags.map((tag) => (
              <li className='mr-4' key={tag}>
                #<span>{tag}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <MDXPost code={blog.body.code} />
      <hr className='mt-12 mb-5' />
      <PostFooter prevPost={allBlogs[index - 1] ?? null} nextPost={allBlogs[index + 1] ?? null} />
      <Toc headings={blog.headings} />
      <Giscus />
    </section>
  );
}
