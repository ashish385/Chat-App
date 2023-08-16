import React from 'react'

import Topbar from '../components/Topbar';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';

const Home = () => {
  return (
    <>
      <div className='fixed w-full'>
        <Topbar />

        <div className="flex ">
          <div className="w-[20%] border">
            <LeftBar />
          </div>
          <div className="w-[80%]">
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
