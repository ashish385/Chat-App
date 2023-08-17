import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../components/Topbar';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import Dummy from '../components/Dummy';

const LandingPage = () => {
  return (
    <>
      <div data-theme="light" className="w-full flex flex-col ]">
        <div className="fixed top-0 left-0 right-0 z-20">
          <Topbar />
        </div>

        <div
          data-theme="light"
          className="flex mt-16 fixed top-0 left-0 right-0 "
        >
          <div className="w-[40%] border">
            <LeftBar />
          </div>
          <div className="  w-[60%] ">
            <RightBar />
            {/* <Dummy /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
