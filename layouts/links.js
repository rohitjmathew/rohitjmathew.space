import Container from '@/components/Container';

export default function Links({ children }) {
  return (
    <Container
      title="Links – Rohit Jacob Mathew"
      description="Random compilation of newsletters, podcasts, articles and videos I have found interesting."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Links
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          I tweet every week with interesting things I find. You can find them <a target="_blank" rel="noreferrer" href="https://twitter.com/search?q=(%23RohitsWeeklyDiscovery)&src=typed_query&f=live" className="text-blue-700 dark:text-blue-300">here</a>.
          You can see the full compilation of <a href="newsletters" className="text-blue-700 dark:text-blue-300">newsletters</a>
          , <a href="podcasts" className="text-blue-700 dark:text-blue-300">podcasts</a>
          , and <a href="links#articles" className="text-blue-700 dark:text-blue-300">articles</a> I have found interesting.<br/><br/> A few of recommendations are:
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
