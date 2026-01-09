import Image from "next/image";

export default function BooksPage() {
  const books = [
    { title: "Modern CSS with Tailwind", src: "/images/book1.png" },
    { title: "The Next.js Handbook", src: "/images/book2.png" },
    { title: "Mindset", src: "/images/book3.jpg" },
  ];

  return (
    <section className="min-h-[80vh] px-6 py-12 animate-fade">
      <h2 className="text-4xl font-semibold mb-8 text-zinc-900 text-center">
        Book Recommendations
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={book.src}
              alt={book.title}
              width={300}
              height={400}
              className="rounded-xl"
            />
            <h3 className="mt-4 font-medium text-zinc-900 text-lg text-center">
              {book.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
