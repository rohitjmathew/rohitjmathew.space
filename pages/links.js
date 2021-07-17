import { MDXRemote } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import Links from '@/layouts/links';

export default function LinksPage({ mdxSource, frontMatter }) {
  return (
    <Links frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </Links>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('links');

  return { props: uses };
}
