import React, { useEffect, useState } from 'react';
import {app, db} from '../firebase'
import "firebase/auth";
import { doc, onSnapshot } from 'firebase/firestore';



const ChatUser = () => {
  
 
  
  return (
    <div>
      <div className="group flex gap-2 items-center rounded-lg px-2 py-2 hover:bg-gray-100">
        <img
          className="shrink-0 h-11 w-11 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhtmBqlJilp6X2q2XsYxJ9DVYb_F8x17DjIOJcHtT&s"
          alt=""
        />
        <div className="ltr:ml-3 rtl:mr-3">
          <p className="text-sm font-medium text-slate-700 "></p>
          <p className="text-sm font-medium text-slate-500 group-hover:text-slate-400">
            good night
          </p>
        </div>
      </div>
      {/* users.map((chat,index) => (
        <>
          <div key={chat[0]}>
            <span>{}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </>
      ))} */}
    </div>
  );
}

export default ChatUser
