import { useMDXComponent } from 'next-contentlayer/hooks';

interface MDXPostProps {
  code: string;
}

export default function MDXPost({ code }: MDXPostProps) {
  const MDXContent = useMDXComponent(code);

  return (
    <div className='prose dark:prose-invert max-w-none  prose-a:text-indigo-400 prose-a:underline-offset-4 prose-a:decoration-2 hover:prose-a:text-indigo-600 prose-code:text-indigo-600  prose-code:before:content-[] prose-code:after:content-[] prose-pre:mt-0 '>
      <MDXContent />
    </div>
  );
}
