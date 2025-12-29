import { ReactNode } from 'react';
import Container from '@/components/Container';

interface NewslettersProps {
    children: ReactNode;
    frontMatter?: {
        title?: string;
        summary?: string;
    };
}

export default function Newsletters({ children, frontMatter }: NewslettersProps) {
    return (
        <Container
            title={frontMatter?.title || "Newsletters – Rohit Jacob Mathew"}
            description={frontMatter?.summary || "The newsletters I subscribe to and find the most valuable."}
        >
            <div className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full">
                {/* Header Section */}
                <div className="w-full text-center">
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
                        📬 Newsletters
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Last updated: December 2025
                    </p>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
                </div>

                {/* Description Section */}
                <div className="prose prose-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-none">
                    <p className="text-lg mb-0 leading-relaxed text-justify">
                        Full compilation of newsletters I have found interesting. My recommendations can be found {" "}
                        <a href="links#newsletters" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600 hover:border-blue-600 dark:hover:border-blue-300">
                            here
                        </a>.
                    </p>
                </div>

                {/* Content Section */}
                <div className="prose prose-lg dark:prose-invert w-full max-w-none mt-12">
                    <div className="[&>h2]:font-bold [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:tracking-tight [&>h2]:mb-6 [&>h2]:text-black [&>h2]:dark:text-white [&>h2>a]:text-black [&>h2>a]:dark:text-white [&>h2>a]:no-underline [&>h2>a]:font-bold [&>h2>a]:hover:text-black [&>h2>a]:dark:hover:text-white [&>h3]:font-semibold [&>h3]:text-lg [&>h3]:mb-4 [&>h3]:text-black [&>h3]:dark:text-white [&>h3>a]:text-black [&>h3>a]:dark:text-white [&>h3>a]:no-underline [&>h3>a]:font-semibold [&>h3>a]:hover:text-black [&>h3>a]:dark:hover:text-white [&>ul]:grid [&>ul]:gap-2 [&>ul]:list-none [&>ul]:p-0 [&>ul>li]:bg-white [&>ul>li]:dark:bg-gray-800/50 [&>ul>li]:p-6 [&>ul>li]:rounded-lg [&>ul>li]:shadow-sm [&>ul>li]:border [&>ul>li]:border-gray-100 [&>ul>li]:dark:border-gray-700 [&>ul>li]:hover:shadow-md [&>ul>li]:transition-shadow [&>ul>li]:duration-200 [&>ul>li>a]:text-blue-600 [&>ul>li>a]:dark:text-blue-400 [&>ul>li>a]:hover:text-blue-700 [&>ul>li>a]:dark:hover:text-blue-300 [&>ul>li>a]:transition-colors [&>ul>li>a]:font-medium [&>ul>li>a]:no-underline">
                        {children}
                    </div>
                </div>
            </div>
        </Container>
    );
}
