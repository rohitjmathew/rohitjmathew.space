import { ReactNode } from 'react';
import Container from '@/components/Container';

interface BooksLayoutProps {
  children: ReactNode;
  frontMatter?: {
    title?: string;
    summary?: string;
  };
}

export default function BooksLayout({ children }: BooksLayoutProps) {
  return (
    <Container
      title="Bookshelf – Rohit Jacob Mathew"
      description="Curated collection of books that have shaped my thinking on life, work, and personal growth. Physical books with thoughtful perspectives."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full">
        {/* Header Section */}
        <div className="w-full text-center">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
            📚 Bookshelf
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Last updated: December 2025
          </p>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>
        </div>

        {/* Description Section */}
        <div className="prose prose-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-none">
          <p className="text-lg mb-6 leading-relaxed text-justify">
            My curated collection of books that have shaped how I think about life, work, and everything in between.
            I'm a strong believer in physical books — there's something special about reading with a cup of chai
            in hand, completely disconnected from screens. Each book here has influenced my perspective on
            personal growth, creativity, or how to navigate the world more thoughtfully.
          </p>
          <p className="mb-0">
            You can also find my complete reading journey and reviews on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600 hover:border-blue-600 dark:hover:border-blue-300"
              href='https://www.goodreads.com/user/show/140566214-rohit-mathew'
            >
              GoodReads
            </a>.
          </p>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg dark:prose-invert w-full max-w-none">
          <div className="[&>h1]:font-bold [&>h1]:text-3xl [&>h1]:md:text-4xl [&>h1]:tracking-tight [&>h1]:mb-6 [&>h1]:text-black [&>h1]:dark:text-white [&>h1>a]:text-black [&>h1>a]:dark:text-white [&>h1>a]:no-underline [&>h1>a]:font-bold [&>h1>a]:transition-colors [&>h1>a]:duration-200 [&>h1>a]:cursor-pointer [&>h1>a]:inline-block hover:[&>h1>a]:text-gray-600 hover:[&>h1>a]:dark:text-gray-400 [&>h2]:font-bold [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:tracking-tight [&>h2]:mb-6 [&>h2]:text-black [&>h2]:dark:text-white [&>h2>a]:text-black [&>h2>a]:dark:text-white [&>h2>a]:no-underline [&>h2>a]:font-bold [&>h2>a]:transition-colors [&>h2>a]:duration-200 [&>h2>a]:cursor-pointer [&>h2>a]:inline-block hover:[&>h2>a]:text-gray-600 hover:[&>h2>a]:dark:text-gray-400 [&>h3]:font-semibold [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:mb-4 [&>h3]:text-black [&>h3]:dark:text-white [&>h3>a]:text-black [&>h3>a]:dark:text-white [&>h3>a]:no-underline [&>h3>a]:font-semibold [&>h3>a]:transition-colors [&>h3>a]:duration-200 [&>h3>a]:cursor-pointer [&>h3>a]:inline-block hover:[&>h3>a]:text-gray-600 hover:[&>h3>a]:dark:text-gray-400 [&>h4]:font-medium [&>h4]:text-base [&>h4]:mb-3 [&>h4]:text-black [&>h4]:dark:text-white [&>h4>a]:text-black [&>h4>a]:dark:text-white [&>h4>a]:no-underline [&>h4>a]:font-medium [&>h4>a]:transition-colors [&>h4>a]:duration-200 [&>h4>a]:cursor-pointer [&>h4>a]:inline-block hover:[&>h4>a]:text-gray-600 hover:[&>h4>a]:dark:text-gray-400 [&>h5]:font-medium [&>h5]:text-sm [&>h5]:mb-2 [&>h5]:text-black [&>h5]:dark:text-white [&>h5>a]:text-black [&>h5>a]:dark:text-white [&>h5>a]:no-underline [&>h5>a]:font-medium [&>h5>a]:transition-colors [&>h5>a]:duration-200 [&>h5>a]:cursor-pointer [&>h5>a]:inline-block hover:[&>h5>a]:text-gray-600 hover:[&>h5>a]:dark:text-gray-400 [&>h6]:font-medium [&>h6]:text-xs [&>h6]:mb-2 [&>h6]:text-black [&>h6]:dark:text-white [&>h6>a]:text-black [&>h6>a]:dark:text-white [&>h6>a]:no-underline [&>h6>a]:font-medium [&>h6>a]:transition-colors [&>h6>a]:duration-200 [&>h6>a]:cursor-pointer [&>h6>a]:inline-block hover:[&>h6>a]:text-gray-600 hover:[&>h6>a]:dark:text-gray-400 [&>ul]:grid [&>ul]:gap-2 [&>ul]:list-none [&>ul]:p-0 [&>ul]:mb-8 [&>ul>li]:bg-white [&>ul>li]:dark:bg-gray-800/50 [&>ul>li]:p-6 [&>ul>li]:rounded-lg [&>ul>li]:shadow-sm [&>ul>li]:border [&>ul>li]:border-gray-100 [&>ul>li]:dark:border-gray-700 [&>ul>li]:text-gray-700 [&>ul>li]:dark:text-gray-300 [&>ul>li]:leading-relaxed [&>ul>li>a]:text-blue-600 [&>ul>li>a]:dark:text-blue-400 [&>ul>li>a]:transition-colors [&>ul>li>a]:font-medium [&>ul>li>a]:no-underline [&>ul>li>a:hover]:text-blue-700 [&>ul>li>a:hover]:dark:text-blue-300">
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
}
