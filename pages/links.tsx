import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import Links from '@/layouts/links';

interface LinksPageProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: {
    title?: string;
    summary?: string;
  };
}

export default function LinksPage({ mdxSource, frontMatter }: LinksPageProps) {
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
