import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 font-inter">
        <nav className="bg-white shadow sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">🚀 JobHunt Lite</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-600 font-medium">Dashboard</Link>
            <Link to="/add" className="hover:text-blue-600 font-medium">+ Add Job</Link>
          </div>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddJob />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
