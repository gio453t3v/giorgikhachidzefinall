import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("მთავარი | ჩვენი კომპანია");

  return (
    <section className="space-y-16">
      <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
          alt="ბიზნესი"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl font-bold text-center">
            თქვენი იდეა, ჩვენი განხორციელება
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border dark:border-gray-700 text-center">
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          კეთილი იყოს თქვენი მობრძანება ჩვენს ვებსაიტზე. აქ ჩვენ გთავაზობთ სანდო
          და ხარისხიან მომსახურებას, თქვენი ბიზნესის ზრდისა და
          განვითარებისათვის.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center max-w-6xl mx-auto">
        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow">
          <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold text-xl mb-2">
            გამოცდილება
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            მრავალწლიანი პრაქტიკა სხვადასხვა სფეროში.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow">
          <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold text-xl mb-2">
            სანდოობა
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            თქვენს საჭიროებებს ვუსმენთ და სრულად ვაკეთებთ.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow">
          <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold text-xl mb-2">
            ხარისხი
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            შედეგი, რომელიც ფასეულობას გიქმნით.
          </p>
        </div>
      </div>

      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg text-lg transition"
        >
          დაგვიკავშირდით
        </a>
      </div>
    </section>
  );
}
