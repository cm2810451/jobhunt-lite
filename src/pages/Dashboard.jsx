import { useEffect, useState } from "react";

export default function Dashboard() {
  const [jobs, setJobs] = useState(() => {
    const stored = localStorage.getItem("jobhunt-lite-jobs");
    return stored ? JSON.parse(stored) : [];
  });

  // 🔄 Save to localStorage when jobs change
  useEffect(() => {
    localStorage.setItem("jobhunt-lite-jobs", JSON.stringify(jobs));
  }, [jobs]);

  // 🗑 Delete Job
  const deleteJob = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs.splice(index, 1);
    setJobs(updatedJobs);
  };

  // 🔄 Update Status
  const updateStatus = (index, newStatus) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = newStatus;
    setJobs(updatedJobs);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📋 Your Applications</h2>

      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs yet. Start by adding one!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition relative"
            >
              <div className="text-lg font-semibold text-blue-700">{job.title}</div>
              <div className="text-sm text-gray-500">{job.company}</div>
              <div className="text-sm text-gray-400">{job.location}</div>
              <span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 uppercase font-semibold tracking-wide">
                {job.status}
              </span>

              <div className="mt-4 flex flex-col gap-2">
                <select
                  value={job.status}
                  onChange={(e) => updateStatus(index, e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1"
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>

                <button
                  onClick={() => deleteJob(index)}
                  className="bg-red-500 text-white text-sm py-1 px-3 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
