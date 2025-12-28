import Link from 'next/link';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Rohit Jacob Mathew">
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
        <div className="mb-8 flex justify-center">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW9iN3N1NndqNzQ2cWN3YW5mdXpkZzFjbms0YmdqeGplZDlicW1xaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bsoUDDuaSi2rV9T2F7/giphy.gif"
            alt="Error animation"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white text-center">
          ERROR!!! WHAT HAPPENED?
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
          It seems you&apos;ve found something that used to exist, or you spelled something
          wrong. I&apos;m guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Return Home
        </Link>
      </div>
    </Container>
  );
}
