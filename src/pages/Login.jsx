import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="w-full h-screen  flex justify-center items-center bg-gray-200">
        <div className=" w-[30%] h-fit flex flex-col mx-auto justify-center items-center px-6 py-4 rounded-xl bg-white">
          <h1 className="  font-bold text-xl py-2">Log In</h1>
          <div className=" w-full flex flex-col justify-center gap-5">
            <label htmlFor="email" className="flex flex-col gap-2">
              <span className="font-[400] text-gray-700">Email:</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 bg-gray-100 focus:ring-slate-300 text-gray-500"
              />
            </label>
            <label htmlFor="password" className="flex flex-col gap-2">
              <span className="font-[400] text-gray-700">Password: </span>
              <input
                type="password"
                name="password"
                placeholder="*********"
                className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 bg-gray-100 focus:ring-slate-300 text-gray-500"
              />
            </label>
            <button className="px-4 py-2 border rounded-lg bg-blue-500 hover:bg-blue-600 text-gray-300">
              Login
            </button>
          </div>
          <p className="mt-2 text-sm">
            New user? <Link to={"/signup"} className='hover:underline text-violet-700 hover:text-violet-500'>Register here</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login
