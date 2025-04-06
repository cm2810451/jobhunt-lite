import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JobForm() {
  const [job, setJob] = useState({ company: '', title: '', location: '', status: 'Applied' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    localStorage.setItem('jobs', JSON.stringify([...jobs, job]));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
      <div>
        <label className="block font-semibold">Company</label>
        <input type="text" required className="w-full border rounded p-2" value={job.company}
          onChange={(e) => setJob({ ...job, company: e.target.value })} />
      </div>
      <div>
        <label className="block font-semibold">Job Title</label>
        <input type="text" required className="w-full border rounded p-2" value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })} />
      </div>
      <div>
        <label className="block font-semibold">Location</label>
        <input type="text" required className="w-full border rounded p-2" value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })} />
      </div>
      <div>
        <label className="block font-semibold">Status</label>
        <select className="w-full border rounded p-2" value={job.status}
          onChange={(e) => setJob({ ...job, status: e.target.value })}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save Job
      </button>
    </form>
  );
}
