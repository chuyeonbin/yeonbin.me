import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';

const options: Options = {
  theme: {
    dark: 'github-dark-dimmed',
    light: 'github-light',
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
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
