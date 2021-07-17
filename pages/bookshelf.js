import { MDXRemote } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import BooksLayout from '@/layouts/books';

export default function Bookshelf({ mdxSource, frontMatter }) {
  return (
    <BooksLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </BooksLayout>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('books');

  return { props: uses };
}
