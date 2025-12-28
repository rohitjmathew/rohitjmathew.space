import { ReactNode } from 'react';
import NowPlaying from '@/components/NowPlaying';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const ExternalLink = ({ href, children, className = "" }: ExternalLinkProps) => (
  <a
    className={`text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ${className}`}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full mt-8 sm:mt-8 px-6 sm:px-0">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-700 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6 pb-8 sm:pb-6">
        <div className="flex flex-col space-y-3 items-start">
          <ExternalLink href="https://twitter.com/iamrohitjmathew">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/rohitjmathew">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://open.spotify.com/user/21loszaq56ntdqmategugxofa?si=56YIorANSaeliPYWb5ulUQ" className="lg:hidden">
            Spotify
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-3 items-start">
          <ExternalLink href="https://www.linkedin.com/in/rohitjmathew/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://scholar.google.co.in/citations?user=7moht3YAAAAJ&hl=en" className="lg:hidden">
            Google Scholar
          </ExternalLink>
          <ExternalLink href="https://blog.rohitjmathew.space/series/teamix" className="lg:hidden">
            Teamix
          </ExternalLink>
          <ExternalLink href="https://open.spotify.com/user/21loszaq56ntdqmategugxofa?si=56YIorANSaeliPYWb5ulUQ" className="hidden lg:block">
            Spotify
          </ExternalLink>
        </div>
        <div className="hidden lg:flex flex-col space-y-3 items-start">
          <ExternalLink href="https://scholar.google.co.in/citations?user=7moht3YAAAAJ&hl=en">
            Google Scholar
          </ExternalLink>
          <ExternalLink href="https://blog.rohitjmathew.space/series/teamix">
            Teamix
          </ExternalLink>
        </div>
      </div>

      {/* Unified Footer Section */}
      <div className="w-full pt-6 pb-4 mt-4">
        <div className="flex flex-col space-y-4">
          {/* Copyright and License Row */}
          <div className="flex flex-col justify-center items-center text-center text-sm text-gray-500 dark:text-gray-400 space-y-2">
            <p>
              © {new Date().getFullYear()} Rohit Jacob Mathew
            </p>
            <div className="text-xs">
              Content licensed under{" "}
              <ExternalLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="text-xs">
                CC BY-NC-SA 4.0
              </ExternalLink>
            </div>
            <div className="text-xs">
              Built with Next.js & Tailwind
            </div>
            <div className="text-xs">
              No AI Training
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
