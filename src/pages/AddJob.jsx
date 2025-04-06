import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddJob() {
  const [job, setJob] = useState({
    company: '', title: '', location: '', status: 'Applied',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const jobs = JSON.parse(localStorage.getItem('jobhunt-lite-jobs')) || []
    localStorage.setItem('jobhunt-lite-jobs', JSON.stringify([...jobs, job]))
    navigate('/')
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🎯 Add a New Job</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          name="company" value={job.company} onChange={handleChange}
          placeholder="Company" required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="title" value={job.title} onChange={handleChange}
          placeholder="Job Title" required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="location" value={job.location} onChange={handleChange}
          placeholder="Location" required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="status" value={job.status} onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 bg-white"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save Job
        </button>
      </form>
    </div>
  )
}
