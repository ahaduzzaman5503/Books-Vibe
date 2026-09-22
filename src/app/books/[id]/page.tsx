import { IBook } from "@/Components/Common/Types/books.types";
import Image from "next/image";

interface IBookDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data: IBook[] = await response.json();
  return data;
};

const BookDetailpage = async ({ params,}: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find((book:IBook) => String(book.bookId) === String(id)) as IBook;

  console.log(book, "book data found");

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="card lg:card-side max-w-6xl mx-auto overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-xl">
        <figure className="relative flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 p-8 lg:w-1/2">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="relative flex h-[450px] w-full items-center justify-center rounded-2xl bg-white/70 p-6 shadow-inner backdrop-blur-sm">
            <Image
              src={book?.image}
              alt={book?.bookName}
              width={500}
              height={600}
              className="h-full w-full object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
            />
          </div>
        </figure>

        <div className="card-body lg:w-1/2 lg:p-10">

          <div className="mb-2">
            <span className="rounded-full bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
              {book?.category}
            </span>
          </div>


          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            {book?.bookName}
          </h2>


          <p className="mt-2 text-sm text-gray-500">
            By{" "}
            <span className="font-semibold text-gray-800">
              {book?.author}
            </span>
          </p>


          <div className="my-4 h-px bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200" />


          <div>
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-800">
              Review
            </h3>

            <p className="text-sm leading-7 text-gray-500">
              {book?.review}
            </p>
          </div>


          <div className="mt-5">

            <span className="mb-2 block text-sm font-bold text-gray-800">
              Tags
            </span>

            <div className="flex flex-wrap gap-2">

              {book?.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600 transition hover:bg-purple-100"
                >
                  #{tag}
                </span>
              ))}

            </div>

          </div>


          <div className="my-5 h-px bg-gray-100" />


          <div className="space-y-3 text-sm">

            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 transition hover:bg-orange-50">

              <span className="text-gray-500">
              </span>

              <span className="font-bold text-gray-800">
                {book?.totalPages}
              </span>

            </div>


            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 transition hover:bg-orange-50">

              <span className="text-gray-500">
                Publisher
              </span>

              <span className="max-w-[55%] text-right font-bold text-gray-800">
                {book?.publisher}
              </span>

            </div>


            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 transition hover:bg-orange-50">

              <span className="text-gray-500">
                Year of Publishing
              </span>

              <span className="font-bold text-gray-800">
                {book?.year}
              </span>

            </div>


            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 transition hover:bg-orange-50">

              <span className="text-gray-500">
                Rating
              </span>

              <span className="flex items-center gap-1 font-bold text-gray-800">
                <span className="text-lg text-yellow-400">
                  ★
                </span>

                {book?.rating}
              </span>

            </div>

          </div>


          <div className="card-actions mt-6 flex gap-3">

            <button className="btn rounded-xl border-gray-300 bg-white px-6 text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md">
              Read
            </button>


            <button className="btn rounded-xl border-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-7 text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Wishlist
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetailpage;