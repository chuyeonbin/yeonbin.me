import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';

interface MDXPostProps {
  code: string;
}
const CustomMdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export default function MDXPost({ code }: MDXPostProps) {
  const MDXContent = useMDXComponent(code);

  return (
    <div className='prose'>
      <MDXContent components={CustomMdxComponents} />
    </div>
  );
}
