export default function JobCard({ job }) {
    return (
      <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
        <h3 className="text-lg font-bold text-blue-700">{job.title}</h3>
        <p className="text-gray-700">{job.company}</p>
        <p className="text-sm text-gray-500">{job.location}</p>
        <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-100 rounded-full">
          {job.status}
        </span>
      </div>
    );
  }
  