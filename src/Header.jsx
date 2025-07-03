import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Business</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
