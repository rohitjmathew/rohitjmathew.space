import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import UsesLayout from '@/layouts/uses';

interface UsesProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: {
    title?: string;
    summary?: string;
  };
}

export default function Uses({ mdxSource, frontMatter }: UsesProps) {
  return (
    <UsesLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </UsesLayout>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('uses');

  return { props: uses };
}
