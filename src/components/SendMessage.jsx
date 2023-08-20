import React, { useState } from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";
import { auth,db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


const SendMessage = ({scroll}) => {

  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter message')
      return
    }
    console.log("message sent", input);
    const { uid, displayName } = auth.currentUser
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp:serverTimestamp()
    })
    console.log("sent");
    setInput('');
    scroll.current.scrollIntoView({behavior:'smooth'})

  }

  return (
    <div>
      <footer className="absolute bottom-0 left-0 z-20 w-full p-4  border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 bg-[#052b65]  dark:border-gray-600">
        <ul className=" w-full flex flex-wrap items-center mt-3 text-sm md:text-lg font-medium  text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="flex flex-none gap-1 md:gap-4 px-6  md:text-2xl">
            <BsEmojiSmile className=" cursor-pointer" />
            <HiOutlinePlus className=" cursor-pointer" />
          </li>
          <li className="flex-1 px-6">
            <form onSubmit={handleSubmit} className="flex justify-between">
              <label className="w-full relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
                <input
                  value={input}
                  onChange={(e) =>setInput(e.target.value)}
                  className=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1  md:pl-6 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
                  placeholder="Type a message"
                  type="text"
                  name="search"
                />
              </label>
              <button type='submit' onSubmit={handleSubmit} className="text-2xl w-10 h-10 pl-3 hover:opacity-10 hover:bg-gray-50 hover:text-[#052b65] rounded-full">
                <IoMdSend className=" cursor-pointer " />
              </button>
            </form>
          </li>
          {/* <li className="flex-none px-6 text-2xl"></li> */}
        </ul>
      </footer>
    </div>
  );
}

export default SendMessage
