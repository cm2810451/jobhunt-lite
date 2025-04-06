import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700">JobHunt Lite</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
          <Link to="/add" className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">
            + Add Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
