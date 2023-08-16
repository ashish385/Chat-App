import React from 'react'

const LeftBar = () => {
  return (
    <>
      <div className=" w-full h-screen px-4 py-4 shadow-lg">
        <div className="pb-4">
          <p className="text-sm mb-1 font-semibold text-gray-900">
            Search Message{" "}
          </p>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>
        <hr />
        <div className="py-2">
          <h1 className="text-sm mb-1 font-semibold text-gray-900">
            Recent Chat
          </h1>

          <div className="flex flex-col gap-3">
            <div className="group flex gap-2 items-center rounded-lg px-2 py-2 hover:bg-gray-100">
              <img
                className="shrink-0 h-11 w-11 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhtmBqlJilp6X2q2XsYxJ9DVYb_F8x17DjIOJcHtT&s"
                alt=""
              />
              <div className="ltr:ml-3 rtl:mr-3">
                <p className="text-sm font-medium text-slate-700 ">
                  Ashish Soni
                </p>
                <p className="text-sm font-medium text-slate-500 group-hover:text-slate-400">
                  good night
                </p>
              </div>
            </div>
            <div className="group flex gap-2 items-center rounded-lg px-2 py-2 hover:bg-gray-100">
              <img
                className="shrink-0 h-11 w-11 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhtmBqlJilp6X2q2XsYxJ9DVYb_F8x17DjIOJcHtT&s"
                alt=""
              />
              <div className="ltr:ml-3 rtl:mr-3">
                <p className="text-sm font-medium text-slate-700 ">
                  Ashish Soni
                </p>
                <p className="text-sm font-medium text-slate-500 group-hover:text-slate-400">
                  good night
                </p>
              </div>
            </div>
            <div className="group flex gap-2 items-center rounded-lg px-2 py-2 hover:bg-gray-100">
              <img
                className="shrink-0 h-11 w-11 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhtmBqlJilp6X2q2XsYxJ9DVYb_F8x17DjIOJcHtT&s"
                alt=""
              />
              <div className="ltr:ml-3 rtl:mr-3">
                <p className="text-sm font-medium text-slate-700 ">
                  Ashish Soni
                </p>
                <p className="text-sm font-medium text-slate-500 group-hover:text-slate-400">
                  good night
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftBar
