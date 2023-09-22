import Link from 'next/link';
import { notFound } from 'next/navigation';
import dateFormat from 'app/util/date';
import { allBlogs } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}
const CustomMdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export default function Page({ params }: any) {
  const slug = decodeURIComponent(params.slug);
  const blog = allBlogs.find((p) => p.slug === slug);

  if (!blog) return notFound();

  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div>
      <div className='mb-12 md:mb-16'>
        <span className='text-slate-500 text-sm md:text-base'>{dateFormat(blog.publishAt)}</span>
        <h1 className='mt-2 text-2xl md:text-3xl font-semibold opacity-90'>{blog.title}</h1>
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
      <div className='prose'>
        <MDXContent components={CustomMdxComponents} />
      </div>
    </div>
  );
}
