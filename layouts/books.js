import Container from '@/components/Container';

export default function BooksLayout({ children }) {
  return (
    <Container
      title="Bookshelf – Rohit Jacob Mathew"
      description="My ever growing bookshelf which are mostly physical books."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Bookshelf
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          My ever growing bookshelf which are mostly physical books. I find a different joy in reading a physical book with a glass of chai in my garden and have still not made the switch to a Kindle
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
