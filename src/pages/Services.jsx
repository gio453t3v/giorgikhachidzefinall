import useDocumentTitle from "../hooks/useDocumentTitle";
import services from "../data/products.json";

export default function Services() {
  useDocumentTitle("სერვისები | ჩემი ბიზნესი");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">ჩვენი სერვისები</h2>
      <ul className="space-y-4">
        {services.map(({ id, name, description, price }) => (
          <li
            key={id}
            className="border p-4 rounded shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
            <p className="font-bold text-indigo-600 dark:text-indigo-400">
              ₾{price.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
