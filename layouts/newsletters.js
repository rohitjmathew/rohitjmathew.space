import Container from '@/components/Container';

export default function Newsletters({ children }) {
    return (
        <Container
            title="Newsletters – Rohit Jacob Mathew"
            description="All the newsletters I find interesting"
        >
            <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Newsletters
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
                    Full compilation of newsletters I have found interesting. 
                    My recommendations can be found <a href="links" className="text-blue-700 dark:text-blue-300">here</a>.
                </p>
                <div className="prose dark:prose-dark w-full">{children}</div>
            </article>
        </Container>
    );
}
