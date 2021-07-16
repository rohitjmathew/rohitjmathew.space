import Link from 'next/link';
import Container from '../components/Container';

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Rohit Jacob Mathew
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          A Software Engineer from India working on building SecOps products at <a target="_blank" rel="noreferrer" href="https://www.mcafee.com/enterprise/en-us/home.html">McAfee</a>.
          I am also an <a target="_blank" rel="noreferrer" href="https://auth0.com/ambassador-program">Auth0 Ambassador</a>, a former Senior Software Engineer at <a target="_blank" rel="noreferrer" href="https://www.turtlemint.com/">Turtlemint</a> and a former SDE Intern at <a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/">HackerRank</a>.
          <br/><br/>
          While my interests currently lie in the development of scalable solutions, DevOps, Developer Relations/Dev Evangelism as well as smart AI based system, I&apos;m excited by almost anything in tech.
          <br/><br/>
          {`Come learn a bit more `}
          <Link href="/about">
            <a>about me</a>
          </Link>
        </h2>
      </div>
    </Container>
  );
}
