import React from 'react'

import Topbar from '../components/Topbar';
import LeftBar from '../components/LeftBar';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div
        data-theme="light"
        className="w-full h-screen flex  justify-center items-center mx-auto"
      >
        <button className="px-14 py-2 border rounded-lg shadow-lg bg-blue-500 hover:bg-blue-700 text-gray-100 ">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
      ;
    </>
  );
}

export default Home
