import Link from 'next/link';
import Container from '../components/Container';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full">
        {/* Header Section */}
        <div className="w-full text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
            Hey, I'm Rohit Jacob Mathew 👋
          </h1>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto md:mx-0 mb-8"></div>
        </div>

        {/* Bio Section */}
        <div className="prose prose-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-none mb-8">
          <div className="space-y-6 text-justify">
            <p className="text-lg leading-relaxed">
              A Staff Software Development Engineer from India working on building SecOps products at{" "}
              <a target="_blank" rel="noreferrer" href="https://www.trellix.com/en-us/index.html" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600 hover:border-blue-600 dark:hover:border-blue-300">
                Trellix
              </a>. I am also a former {" "}
              <a target="_blank" rel="noreferrer" href="https://auth0.com/ambassador-program" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium">
                Auth0 Ambassador
              </a>
              , a Senior Software Engineer at {" "}
              <a target="_blank" rel="noreferrer" href="https://www.turtlemint.com/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium">
                Turtlemint
              </a>
              {" "} and SDE Intern at {" "}
              <a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium">
                HackerRank
              </a>.
            </p>
            <p>
              While my interests currently lie in the development of scalable solutions, DevOps, Developer Relations as well as Cybersecurity, I&apos;m excited by almost anything in tech.
            </p>
            <p>
              Come learn a bit more {" "}
              <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium">
                about me →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
