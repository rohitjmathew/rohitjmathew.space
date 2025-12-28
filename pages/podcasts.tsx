import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import Podcasts from '@/layouts/podcasts';

interface PodcastsPageProps {
    mdxSource: MDXRemoteSerializeResult;
    frontMatter: {
        title?: string;
        summary?: string;
    };
}

export default function LinksPage({ mdxSource, frontMatter }: PodcastsPageProps) {
    return (
        <Podcasts frontMatter={frontMatter}>
            <MDXRemote {...mdxSource} />
        </Podcasts>
    );
}

export async function getStaticProps() {
    const uses = await getFileBySlug('podcasts');

    return { props: uses };
}
