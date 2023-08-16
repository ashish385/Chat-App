import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";

const RightBar = () => {
  return (
    <>
      <div className="w-full flex flex-col  ">
        <div className="w-full border-2 shadow-lg ">
          <div className="group flex gap-2 items-center rounded-lg px-2 py-2 hover:bg-gray-100">
            <img
              className="shrink-0 h-11 w-11 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhtmBqlJilp6X2q2XsYxJ9DVYb_F8x17DjIOJcHtT&s"
              alt=""
            />
            <div className="ltr:ml-3 rtl:mr-3">
              <p className="text-sm font-medium text-slate-700 ">Ashish Soni</p>
            </div>
          </div>
        </div>
        <div className="  flex flex-col justify-between">
          <div className="flex flex-col gap-3 px-5">
            <div className="w-fit flex gap-5 items-center rounded-lg px-2 py-2 ">
              <img
                className="shrink-0 h-10 w-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhtmBqlJilp6X2q2XsYxJ9DVYb_F8x17DjIOJcHtT&s"
                alt=""
              />
              <div className="ltr:ml-3 rtl:mr-3 shadow-md px-3 py-3 rounded-xl bg-pink-300 ">
                <p className="text-sm font-medium text-slate-700  ">
                  How are you?
                </p>
              </div>
            </div>
            <div className="w-full flex gap-2 items-center justify-end rounded-lg px-2 py-2 hover:bg-gray-100">
              <div className=" rtl:mr-3 shadow-md px-3 py-3 rounded-xl bg-blue-300 ">
                <p className="text-sm font-medium text-slate-700 ">I am Fine</p>
              </div>
              <img
                className="shrink-0 h-10 w-10 rounded-full"
                src="https://previews.123rf.com/images/michaeljung/michaeljung1503/michaeljung150300181/37930818-handsome-young-male-photographer-with-dslr-camera-outdoors.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" h-[20%] w-full flex   justify-between items-center  px-8 border ">
          <div className="flex items-center gap-3">
            <BsEmojiSmile />
            <HiOutlinePlus />
          </div>
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
            <div>
                      <IoMdSend />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar;
