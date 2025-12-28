import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import BooksLayout from '@/layouts/books';

interface BookshelfProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: {
    title?: string;
    summary?: string;
  };
}

export default function Bookshelf({ mdxSource, frontMatter }: BookshelfProps) {
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
