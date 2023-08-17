import React from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";

const SendMessage = () => {
  return (
    <div>
      <footer className="absolute bottom-0 left-0 z-20 w-full p-4  border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 bg-[#052b65]  dark:border-gray-600">
        <ul className=" w-full flex flex-wrap items-center mt-3 text-sm md:text-lg font-medium  text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="flex flex-none gap-1 md:gap-4 px-6  md:text-2xl">
            <BsEmojiSmile className=" cursor-pointer" />
            <HiOutlinePlus className=" cursor-pointer" />
          </li>
          <li className="flex-1 px-6">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1  md:pl-6 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
                placeholder="Type a message"
                type="text"
                name="search"
              />
            </label>
          </li>
          <li className="flex-none px-6 text-2xl">
            <IoMdSend className=" cursor-pointer" />
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default SendMessage
