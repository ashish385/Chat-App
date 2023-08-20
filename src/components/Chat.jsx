import React, { useState, useEffect, useRef } from "react";

import Message from "./Message";
import SendMessage from "./SendMessage";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, db } from "../firebase";



const RightBar = () => {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState('')
  const scroll = useRef();

  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.displayName);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data()  ,id:doc.id})
      })
      setMessages(messages);
      // console.log("messages", messages);
      console.log("current user", currentUser);
      
    })
    return () => unsuscribe()
  },[])
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
                  <h1>{currentUser.name }</h1>
                </p>
              </div>
            </div>
          </div>
          <div className="h-[70vh] overflow-y-auto px-4 pt-4 pb-10 mb-5 bg-gray-200 ">
            {messages &&
              messages.map((message) => (
                <Message key={message.id} message={message} setCurrentUser={setCurrentUser} />
              ))}
          </div>
        </div>
        <SendMessage scroll={scroll} />
        <span ref={scroll}></span>
      </div>
    </>
  );
};

export default RightBar;
