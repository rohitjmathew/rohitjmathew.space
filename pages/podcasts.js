import { MDXRemote } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import Podcasts from '@/layouts/podcasts';

export default function LinksPage({ mdxSource, frontMatter }) {
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
