import { notFound } from 'next/navigation';
import dateFormat from 'app/util/date';
import { allNotes } from 'contentlayer/generated';
import MDXPost from '@/components/MDXPost';
import PostFooter from '@/components/PostFooter';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const note = allNotes.find((p) => p.slug === params.slug);

  if (!note) {
    return notFound();
  }

  return {
    metadataBase: new URL('https://yeonbin.me'),
    description: note.description,
    title: note.title,
    openGraph: {
      url: `note/${note.slug}`,
      description: note.description,
      tags: note.tags,
    },
  };
}

export async function generateStaticParams() {
  return allNotes.map((note) => ({
    slug: note.slug,
  }));
}

function Page({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const blog = allNotes.find((p) => p.slug === slug);
  const postIndex = allNotes.findIndex((v) => v.slug === slug);

  if (!blog || postIndex === -1) return notFound();

  const index = allNotes.indexOf(blog);

  return (
    <div>
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
      <PostFooter prevPost={allNotes[index - 1] ?? null} nextPost={allNotes[index + 1] ?? null} />
    </div>
  );
}

export default Page;
