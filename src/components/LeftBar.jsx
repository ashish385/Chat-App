import React from 'react'
import ChatUser from './ChatUser';
import SearchUser from './SearchUser';

const LeftBar = () => {
  return (
    <>
      <div className=" w-full    shadow-lg bg-gray-100">
        <div className="pb-3 md:pb-4 px-2 shadow-lg pt-2">
          <SearchUser />
        </div>
        <hr />
        <div className="py-2">
          <div className="flex  flex-col gap-3 h-[90vh] overflow-y-auto pl-4 bg-gray-200">
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
           
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftBar
