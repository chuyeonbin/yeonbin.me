import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';

const options: Options = {
  theme: {
    dark: 'github-dark',
    light: 'material-theme-palenight',
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  contentType: 'mdx',
  filePathPattern: `blog/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    publishAt: { type: 'date', required: true },
    description: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
      default: [],
    },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '') },
  },
}));

export const Log = defineDocumentType(() => ({
  name: 'Log',
  contentType: 'mdx',
  filePathPattern: `log/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    publishAt: { type: 'date', required: true },
    description: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
      default: [],
    },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '') },
  },
}));

export default makeSource({
  contentDirPath: './posts',
  documentTypes: [Blog, Log],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [rehypePrettyCode, options],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          content: undefined,
          properties: {
            className: ['anchor'],
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener', 'noreferrer'],
        },
      ],
    ],
  },
});
