import React from "react";

import Message from "./Message";
import SendMessage from "./SendMessage";

const RightBar = () => {
  return (
    <>
      <div className="relative  h-[90vh]">
        <div>
          <div className="w-full border-2 shadow-lg ">
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
              </div>
            </div>
          </div>
          <div className="h-[70vh] overflow-y-auto px-4 pt-4 pb-10 mb-5 bg-gray-200 ">
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
        </div>
        <SendMessage />
      </div>
    </>
  );
};

export default RightBar;
