import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">სერვისის დეტალები</h1>
      <p className="text-lg">
        არჩეული სერვისის ID: <strong>{id}</strong>
      </p>
    </div>
  );
}
