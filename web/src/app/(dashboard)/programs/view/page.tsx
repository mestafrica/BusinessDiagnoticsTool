export default function ViewProgram() {
  return (
    <>
      <div className="p-6 sm:p-10 min-h-screen bg-gray-100 dark:bg-[#0b0c10] text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
          Program Details
        </h1>

        <div className="flex flex-wrap gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
            Edit Program
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition">
            Delete Program
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-white dark:bg-[#1a1d24] p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-lg font-semibold mb-5 text-gray-800 dark:text-gray-200">
          Summary Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 text-sm">
          <div>
            <p className="text-gray-500 dark:text-gray-400">Program Name</p>
            <p className="font-semibold">Tech for Growth</p>
          </div>

          <div>
            <p className="text-gray-500 dark:text-gray-400">Start Date</p>
            <p className="font-semibold">January 5, 2025</p>
          </div>

          <div>
            <p className="text-gray-500 dark:text-gray-400">End Date</p>
            <p className="font-semibold">June 30, 2025</p>
          </div>

          <div>
            <p className="text-gray-500 dark:text-gray-400">Number of Cohorts</p>
            <p className="font-semibold">3</p>
          </div>

          <div>
            <p className="text-gray-500 dark:text-gray-400">Status</p>
            <p className="font-semibold text-green-600 dark:text-green-400">
              Active
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white dark:bg-[#1a1d24] p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
          Description
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          This program is designed to support participants in building innovative digital
          solutions and business strategies. It offers a combination of technical training,
          mentorship, and project-based collaboration to encourage real-world problem solving.
        </p>
      </div>
    </div>
    </>
  );
}
