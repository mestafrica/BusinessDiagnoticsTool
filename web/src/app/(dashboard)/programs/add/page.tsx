import { Plus } from "lucide-react";

export default function AddProgram() {
  return (
    <>
      {/* <p>Add a new program page showing a form to fill and submit</p> */}
      <div className="bg-white shadow-lg border">
        <h1 className="text-black text-xl ml-6 mt-4 font-bold">Add New Program</h1>
        <p className="mt-2 ml-6 text-gray-700 text-sm">Create a new cohort program by filling out the information below</p>
        <div className="text-black w-[95%] mx-auto mt-6">
          <h2>Basic Information</h2>
          <form action="" className="space-y-6 mt-4">
            <div className=" flex flex-col justify-between">
              <label htmlFor="" className="text-sm text-gray-700 font-semibold">Program Name <span className="text-red-700">*</span></label>
              <input type="text" placeholder="e.g., Leadership Development Program" className="bg-gray-100 px-2 py-1 rounded-lg text-sm" />
            </div>
            <div className=" flex flex-col justify-between">
              <label htmlFor="" className="text-sm text-gray-700 font-semibold">Description <span className="text-red-700">*</span></label>
              <input type="text" placeholder="Provide a detailed description of the program..." className="bg-gray-100 px-2 py-3 rounded-lg text-sm" />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2  gap-8">
              <div className=" flex flex-col justify-between">
                <label htmlFor="" className="block text-sm font-semibold text-gray-700 mb-1">Cohort <span className="text-red-700">*</span></label>
                <input type="text" placeholder="e.g., 2025 cohort spring" className="bg-gray-100 px-2 py-1 rounded-lg text-sm w-full" />
              </div>
              <div className=" flex flex-col justify-between">
                <label htmlFor="" className=" block text-sm font-semibold text-gray-700 mb-1">Status <span className="text-red-700">*</span></label>
                <select name="" id="" className="w-full  rounded-md px-2 py-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">upcoming</option>
                  <option value="">active</option>
                  <option value="">complete</option>
                </select>
              </div>
            </div>

          </form>
        </div>
        <div className="mt-10 border border-t-gray-400  "></div>
        <div className="text-black mt-4 w-[95%] mx-auto" >
          <h2 className="">Schedule & Participants</h2>
          <form action="" className="grid grid-cols-3 gap-4 mt-4 ">
            <div className="text-sm flex flex-col justify-between gap-2">
              <label htmlFor="">Start Date <span className="text-red-700">*</span></label>
              <input type="date" name="" id=""  className="block bg-gray-100 px-2 py-1 rounded-lg w-full"/>
            </div>
            <div className="text-sm flex flex-col justify-between gap-2">
              <label htmlFor="" className="text-sm">End Date <span className="text-red-700">*</span></label>
              <input type="date" name="" id=""  className="block bg-gray-100 px-2 py-1 rounded-lg w-full"/>
            </div>
            <div className="text-sm flex flex-col justify-between gap-2">
              <label htmlFor="">Number of Participants <span className="text-red-700">*</span></label>
              <input type="number" name="" id="" className="block bg-gray-100 px-2 py-1 rounded-lg w-full" />
            </div>
          </form>
        </div>
         <div className="mt-10 border border-t-gray-400  "></div>
         <div className=" mt-4 w-[95%] mx-auto text-black ">
          <h2 >Program Objectives</h2>
          <div className="mt-2 flex justify-between gap-4 ">
            <input type="text" placeholder="Add a program objective..." className="bg-gray-100 px-4 py-3 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"  />
            <button className="flex gap-2 border px-3 py-1 rounded-lg items-center bg-white text-black cursor-pointer">
              <span><Plus /></span>
              <span>Add</span> 
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">Please Enter or Click Add to include an objective</p>
         </div>
          <div className="mt-10 border border-t-gray-400  "></div>
          <div className="text-black w-[95%] mx-auto mt-4">
            <h2>Image(Optional)</h2>
            <div>
              <input type="file"  placeholder=" https://example.com/image.jpg" className="bg-gray-100 px-4 py-3 rounded-lg text-sm w-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="mt-10 border border-t-gray-400  "></div>

          <div className="text-black flex  gap-6 w-[95%] mx-auto mt-6 mb-10">
            <button className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">Create program</button>
            <div className="px-4 py-2 rounded-lg border border-gray-600 cursor-pointer">Cancel</div>
          </div>
      </div>
    </>
  );
}
