import { Trash2, Search } from "lucide-react";


export default function Cohorts() {
  return (
    <>
      <div className="flex flex-col px-2 rounded-lg shadow-md max-w-7xl mx-auto overflow-auto space-y-6 w-full sm:px-4 md:px-8 bg-[#1E2939] ">
        {/* Title */}
        <div className="flex items-center justify-center sm:justify-start mb-0.5">
          <h1 className="text-2xl my-4 mb-2 font-semibold text-gray-600 text-center sm:text-left">Cohort List</h1>
        </div>

        {/* Search Bar */}
        <div className="flex flex-row items-center my-4 sm:w-1/2">
          <div className="relative flex flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search className="h-3 w-4 text-gray-400" />
            </span>
            <input
              className="w-1/2 pl-8 pr-2 rounded-sm border-0 outline-blue-700 h-6.5 text-gray-600 placeholder:text-gray-400 bg-gray-100 text-sm"
              type="text"
              placeholder="Search cohorts..."
            />
          </div>
          {/* <button className="ml-2 px-6 py-2 bg-[#432DD7] hover:bg-blue-300 text-white rounded-md transition-colors cursor-pointer">
            Search
          </button> */}
        </div>

        {/* Cohort Cards */}
        <div className="grid gap-4 flex-1 overflow-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-screen mb-4">
          {/* Card 1 */}
          <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-800 transition-all duration-500 hover:bg-blue-50 mt-2 flex flex-col justify-between h-56 min-h-56 max-h-56">
            <div>
              <h3 className="text-md font-semibold text-gray-800">Cohort 1</h3>
              <p className="text-gray-600 text-sm leading-tight">
                A group of talented entrepreneurs learning technology and business skills. This is a longer description to test card height consistency. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur suscipit quae vitae iusto impedit totam nulla facere magnam natus, a quos? Obcaecati, doloribus! Quisquam, dicta. 
              </p>
            </div>
            <div className="flex justify-end items-end mt-2">
              <button className="p-2 hover:-translate-y-1 transition-all duration-300">
                <Trash2 className="text-red-500 h-5 w-5 cursor-pointer" />
              </button>
            </div>
          </div>
          {/* Cohort 2 */}
          <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-800 transition-all duration-500 hover:bg-blue-50 mt-2 flex flex-col justify-between h-56 min-h-56 max-h-56">
            <div>
              <h3 className="text-md font-semibold text-gray-800">Cohort 2</h3>
              <p className="text-gray-600 text-sm leading-tight">Previous year's cohort with successful graduates and startups from EdTech. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum unde aliquid vel aperiam placeat veniam veritatis ad dolores dicta, sit quasi consequatur necessitatibus libero officia beatae debitis accusamus exercitationem aspernatur!</p>
            </div>
            <div className="flex justify-end items-end mt-2">
              <button className="p-2 hover:-translate-y-1 transition-all duration-300">
                <Trash2 className="text-red-500 h-5 w-5 cursor-pointer" />
              </button>
            </div>
          </div>
          {/* Cohort 3 */}
          <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-800 transition-all duration-500 hover:bg-blue-50 mt-2 flex flex-col justify-between h-56 min-h-56 max-h-56">
            <div>
              <h3 className="text-md font-semibold text-gray-800">Cohort 3</h3>
              <p className="text-gray-600 text-sm leading-tight">Alumni cohort with established businesses and success stories. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos totam repellendus hic. Et sint itaque quibusdam sequi, quas iusto. Numquam, ducimus ullam provident incidunt culpa impedit. Reiciendis consequuntur illum aliquam!</p>
            </div>
            <div className="flex justify-end items-end mt-2">
              <button className="p-2 hover:-translate-y-1 transition-all duration-300">
                <Trash2 className="text-red-500 h-5 w-5 cursor-pointer" />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-800 transition-all duration-500 hover:bg-blue-50 mt-2 flex flex-col justify-between h-56 min-h-56 max-h-56">
            <div>
              <h3 className="text-md font-semibold text-gray-800">Cohort 4</h3>
              <p className="text-gray-600 text-sm leading-tight">Alumni cohort with established businesses and success stories. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam perferendis enim molestiae. Earum officiis, quasi adipisci incidunt ratione at molestiae unde cupiditate dolorum ullam veniam possimus saepe quidem recusandae illum.</p>
            </div>
            <div className="flex justify-end items-end mt-2">
              <button className="p-2 hover:-translate-y-1 transition-all duration-300">
                <Trash2 className="text-red-500 h-5 w-5 cursor-pointer" />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-800 transition-all duration-500 hover:bg-blue-50 mt-2 flex flex-col justify-between h-56 min-h-56 max-h-56">
            <div>
              <h3 className="text-md font-semibold text-gray-800">Cohort 5</h3>
              <p className="text-gray-600 text-sm leading-tight">Alumni cohort with established businesses and success stories. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium neque quam minima molestiae eligendi vel saepe, quidem, amet aperiam ipsum ullam doloribus similique quis id. Repellendus doloribus expedita neque.</p>
            </div>
            <div className="flex justify-end items-end mt-2">
              <button className="p-2 hover:-translate-y-1 transition-all duration-300">
                <Trash2 className="text-red-500 h-5 w-5 cursor-pointer" />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-800 transition-all duration-500 hover:bg-blue-50 mt-2 flex flex-col justify-between h-56 min-h-56 max-h-56">
            <div>
              <h3 className="text-md font-semibold text-gray-800">Cohort 6</h3>
              <p className="text-gray-600 text-sm leading-tight">Alumni cohort with established businesses and success stories. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum tenetur accusantium aut animi voluptatum quas tempore eum dolore nostrum commodi et alias unde blanditiis beatae debitis, quo libero nisi quaerat.</p>
            </div>
            <div className="flex justify-end items-end mt-2">
              <button className="p-2 hover:-translate-y-1 transition-all duration-300">
                <Trash2 className="text-red-500 h-5 w-5 cursor-pointer" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
