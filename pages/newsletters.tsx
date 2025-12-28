import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import Newsletters from '@/layouts/newsletters';

interface NewslettersPageProps {
    mdxSource: MDXRemoteSerializeResult;
    frontMatter: {
        title?: string;
        summary?: string;
    };
}

export default function LinksPage({ mdxSource, frontMatter }: NewslettersPageProps) {
    return (
        <Newsletters frontMatter={frontMatter}>
            <MDXRemote {...mdxSource} />
        </Newsletters>
    );
}

export async function getStaticProps() {
    const uses = await getFileBySlug('newsletters');

    return { props: uses };
}
