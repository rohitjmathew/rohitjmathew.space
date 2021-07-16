import Link from 'next/link';

import NowPlaying from '@/components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/iamrohitjmathew">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/rohitjmathew">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/rohitjmathew/">
            LinkedIn
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://medium.com/@rohitjmathew">
            Medium
          </ExternalLink>
          <ExternalLink href="https://dev.to/rohitjmathew">DEV</ExternalLink>
          <ExternalLink href="https://tinyletter.com/teamix">
            Teamix
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://open.spotify.com/user/21loszaq56ntdqmategugxofa?si=56YIorANSaeliPYWb5ulUQ">
            Spotify
          </ExternalLink>
          <ExternalLink href="https://scholar.google.co.in/citations?user=7moht3YAAAAJ&hl=en">Google Scholar</ExternalLink>
          <ExternalLink href="mailto:rohitjmathew+website@outlook.com">
            Email
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
