import Image from "next/image";
import { IBook } from "./Types/books.types";
import Link from "next/link";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div>
      <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-72 overflow-hidden bg-slate-100">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 shadow backdrop-blur">
              {book.category}
            </span>
          </div>

          <div className="absolute right-4 top-4">
            <span className="flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
              ⭐ {book.rating}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-orange-500">
            {book.bookName}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            by{" "}
            <span className="font-medium text-slate-700">
              {book.author}
            </span>
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="my-4 border-t border-slate-100" />

          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>📄 {book.totalPages} pages</span>
            <span>📅 {book.yearOfPublishing}</span>
          </div>

            <Link href={`/books/${book.bookId}`} >
                          <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:brightness-105 hover:shadow-lg">
            View Details →
          </button>        
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;