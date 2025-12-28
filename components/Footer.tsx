import { ReactNode } from 'react';
import NowPlaying from '@/components/NowPlaying';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a
    className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
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
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 pb-6 sm:pb-4">
        <div className="flex flex-col space-y-3 sm:space-y-3">
          <ExternalLink href="https://twitter.com/iamrohitjmathew">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/rohitjmathew">
            GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-3 sm:space-y-3">
          <ExternalLink href="https://open.spotify.com/user/21loszaq56ntdqmategugxofa?si=56YIorANSaeliPYWb5ulUQ">
            Spotify
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/rohitjmathew/">
            LinkedIn
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-3 sm:space-y-3">
          <ExternalLink href="https://scholar.google.co.in/citations?user=7moht3YAAAAJ&hl=en">
            Google Scholar
          </ExternalLink>
          <ExternalLink href="https://blog.rohitjmathew.space/series/teamix">
            Teamix
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
