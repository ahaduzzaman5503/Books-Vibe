import books from "@/assests/books.jpg";
import Image from "next/image";

const Bannar = () => {
  return (
    <section className="container mx-auto px-4 py-10 md:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-white to-violet-50 px-6 py-12 shadow-sm md:px-12 lg:px-16">
        
        <div className="grid items-center gap-10 md:grid-cols-2">
          
          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              📚 Discover Your Next Read
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Books that
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                inspire you
              </span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Explore amazing books, discover new stories, and find your next
              favorite read. Build your personal collection and enjoy the
              wonderful world of books.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                Explore Books →
              </button>

              <button className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition duration-300 hover:border-orange-400 hover:text-orange-500">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-300/30 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-violet-300/30 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
              <Image
                src={books}
                alt="A collection of books"
                width={700}
                height={500}
                className="h-[300px] w-full object-cover transition duration-500 hover:scale-105 md:h-[400px]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bannar;