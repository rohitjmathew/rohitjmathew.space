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
      description="My ever growing bookshelf which are mostly physical books."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full">
        {/* Header Section */}
        <div className="w-full text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
            📚 Bookshelf
          </h1>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto md:mx-0 mb-8"></div>
        </div>

        {/* Description Section */}
        <div className="prose prose-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-none">
          <p className="text-lg mb-6 leading-relaxed text-justify">
            My ever growing bookshelf which are mostly physical books as I haven't made the switch to a Kindle yet.
            Truthfully, I find a different joy in reading a physical book with a glass of chai in my garden.
          </p>
          <p className="mb-0">
            Other books I have read: {" "}
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
          <div className="[&>h1]:font-bold [&>h1]:text-3xl [&>h1]:md:text-4xl [&>h1]:tracking-tight [&>h1]:mb-6 [&>h1]:text-black [&>h1]:dark:text-white [&>h1>a]:text-black [&>h1>a]:dark:text-white [&>h1>a]:no-underline [&>h1>a]:font-bold [&>h1>a]:hover:text-black [&>h1>a]:dark:hover:text-white [&>h1>a]:cursor-text [&>h2]:font-bold [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:tracking-tight [&>h2]:mb-6 [&>h2]:text-black [&>h2]:dark:text-white [&>h2>a]:text-black [&>h2>a]:dark:text-white [&>h2>a]:no-underline [&>h2>a]:font-bold [&>h2>a]:hover:text-black [&>h2>a]:dark:hover:text-white [&>h2>a]:cursor-text [&>h3]:font-semibold [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:mb-4 [&>h3]:text-black [&>h3]:dark:text-white [&>h3>a]:text-black [&>h3>a]:dark:text-white [&>h3>a]:no-underline [&>h3>a]:font-semibold [&>h3>a]:hover:text-black [&>h3>a]:dark:hover:text-white [&>h3>a]:cursor-text [&>h4]:font-medium [&>h4]:text-base [&>h4]:mb-3 [&>h4]:text-black [&>h4]:dark:text-white [&>h4>a]:text-black [&>h4>a]:dark:text-white [&>h4>a]:no-underline [&>h4>a]:font-medium [&>h4>a]:hover:text-black [&>h4>a]:dark:hover:text-white [&>h4>a]:cursor-text [&>h5]:font-medium [&>h5]:text-sm [&>h5]:mb-2 [&>h5]:text-black [&>h5]:dark:text-white [&>h5>a]:text-black [&>h5>a]:dark:text-white [&>h5>a]:no-underline [&>h5>a]:font-medium [&>h5>a]:hover:text-black [&>h5>a]:dark:hover:text-white [&>h5>a]:cursor-text [&>h6]:font-medium [&>h6]:text-xs [&>h6]:mb-2 [&>h6]:text-black [&>h6]:dark:text-white [&>h6>a]:text-black [&>h6>a]:dark:text-white [&>h6>a]:no-underline [&>h6>a]:font-medium [&>h6>a]:hover:text-black [&>h6>a]:dark:hover:text-white [&>h6>a]:cursor-text [&>ul]:grid [&>ul]:gap-4 [&>ul]:list-none [&>ul]:p-0 [&>ul>li]:bg-white [&>ul>li]:dark:bg-gray-800/50 [&>ul>li]:p-6 [&>ul>li]:rounded-lg [&>ul>li]:shadow-sm [&>ul>li]:border [&>ul>li]:border-gray-100 [&>ul>li]:dark:border-gray-700 [&>ul>li]:hover:shadow-md [&>ul>li]:transition-shadow [&>ul>li]:duration-200 [&>ul>li>a]:text-blue-600 [&>ul>li>a]:dark:text-blue-400 [&>ul>li>a]:hover:text-blue-700 [&>ul>li>a]:dark:hover:text-blue-300 [&>ul>li>a]:transition-colors [&>ul>li>a]:font-medium [&>ul>li>a]:no-underline">
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
}
