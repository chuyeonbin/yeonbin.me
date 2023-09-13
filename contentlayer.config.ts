import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `*.mdx`,
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
    slug: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` },
  },
}));

export default makeSource({
  contentDirPath: './posts',
  documentTypes: [Post],
});
