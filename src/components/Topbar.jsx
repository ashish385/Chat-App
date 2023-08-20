import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';


const Topbar = () => {
  
  
  return (
    <>
      <div data-theme="aqua" className="drawer  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full h-10 navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-lg">Chat App</div>
            <div className="flex-none  lg:block">
              <ul className="menu menu-horizontal ">
                {/* Navbar menu content here */}
                <li>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://static.fotor.com/app/features/img/aiface/advance/2.png" alt='avatar' />
                    </div>
                  </div>
                </li>
                <li>
                  
                  <Link
                    className="h-10  btn-outline btn-success mt-2 border "
                    to={"/"}
                    onClick={(e) => localStorage.clear()}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar
