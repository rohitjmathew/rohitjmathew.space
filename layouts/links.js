import Container from '@/components/Container';

export default function Links({ children }) {
  return (
    <Container
      title="Links – Rohit Jacob Mathew"
      description="Random compilation of links I have found interesting"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Links
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Random compilation of newsletters, podcasts, articles and videos I have found interesting.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
