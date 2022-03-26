import { MDXRemote } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import Newsletters from '@/layouts/newsletters';

export default function LinksPage({ mdxSource, frontMatter }) {
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
