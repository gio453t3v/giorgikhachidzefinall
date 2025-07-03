import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("კონტაქტი | ჩემი ბიზნესი");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">დაგვიკავშირდით</h2>
      <p className="mb-2">
        ელ. ფოსტა:{" "}
        <a
          href="mailto:giorgi.khachidze.1@btu.edu.ge"
          className="text-blue-600 hover:underline"
        >
          giorgi.khachidze.1@btu.edu.ge
        </a>
      </p>
      <p>ტელეფონის ნომერი: 568-83-45-93</p>
    </div>
  );
}
