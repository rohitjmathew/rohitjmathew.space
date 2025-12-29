import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Container from '../components/Container';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rohit Jacob Mathew",
    "jobTitle": "Staff Software Development Engineer",
    "description": "Software Engineer based in India specializing in SecOps products, DevOps, and Cybersecurity",
    "url": "https://rohitjmathew.space",
    "image": "https://rohitjmathew.space/static/images/rohit.webp",
    "sameAs": [
      "https://twitter.com/iamrohitjmathew",
      "https://github.com/rohitjmathew",
      "https://linkedin.com/in/rohitjmathew"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Trellix",
      "url": "https://www.trellix.com/"
    },
    "knowsAbout": [
      "Software Engineering",
      "DevOps",
      "Cybersecurity",
      "SecOps",
      "Developer Relations"
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "HackerRank"
      },
      {
        "@type": "Organization",
        "name": "Turtlemint"
      }
    ],
    "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full">
          {/* Header Section */}
          <div className="w-full text-center">

            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img
                  src="/static/images/rohit.webp?v=3"
                  alt="Rohit Jacob Mathew"
                  className="rounded-lg shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-cover ring-4 ring-blue-100 dark:ring-blue-900/30"
                />
              </div>
            </div>

            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
              Hey, I'm Rohit Jacob Mathew 👋
            </h1>

            <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>
          </div>

          {/* Bio Section */}
          <div className="prose prose-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-none mb-8">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-xl leading-relaxed">
                  <strong className="text-blue-600 dark:text-blue-400">Staff Software Engineer</strong> building security-first platforms at scale.
                </p>
              </div>

              <div className="text-left space-y-4">
                <p className="text-lg leading-relaxed text-justify">
                  I work in SecOps and platform engineering at{" "}
                  <a target="_blank" rel="noreferrer" href="https://www.trellix.com/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600">
                    Trellix
                  </a>, supporting systems used by Fortune 500 companies and federal organizations. I’m a former{" "}
                  <a target="_blank" rel="noreferrer" href="https://auth0.com/ambassador-program" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600">
                    Auth0 Ambassador
                  </a>, and previously helped scale{" "}
                  <a target="_blank" rel="noreferrer" href="https://www.turtlemint.com/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600">
                    Turtlemint
                  </a>{" "}from 20k to 1M+ users. Earlier in my career, I interned at{" "}
                  <a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600">
                    HackerRank
                  </a>.
                </p>

                <p className="text-lg leading-relaxed text-justify">
                  This site is my{" "}
                  <strong className="text-gray-800 dark:text-gray-200">digital garden</strong>—a space where I share thoughts on security, privacy, scalable systems, and occasionally, the interests that shape how I think beyond work.
                </p>
              </div>

              <div className="text-center pt-2">
                <Link href="/about" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-lg group">
                  Learn more about my journey
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Internal Links Section */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                  Explore my curated collections and ongoing projects:
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  <Link href="https://blog.rohitjmathew.space" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm sm:text-base">
                    ✍️ Blog
                  </Link>
                  <Link href="/bookshelf" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm sm:text-base">
                    📚 Reading List
                  </Link>
                  <Link href="/links" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm sm:text-base">
                    🔗 Curated Resources
                  </Link>
                  <Link href="/uses" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm sm:text-base">
                    ⚙️ Things I Use
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
