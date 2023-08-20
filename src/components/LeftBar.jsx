import React, { useEffect, useState } from 'react'
import ChatUser from './ChatUser';
import SearchUser from './SearchUser';
import { collection, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth, db, storage } from '../firebase';
import { getStorage, ref, listAll } from "firebase/storage";

const LeftBar = () => {
  const [chats, setChats] = useState([]);
  const [tasks, setTasks] = useState([]);

   const currentUser = JSON.parse(localStorage.getItem("user"));
  //  console.log("chat user", currentUser.uid);

 

  useEffect(() => {
    const getData = async () => {
      const data = await query(collection(auth, "users"));

      onSnapshot(data, (querySnapshot) => {
        const databaseInfo = [];
        const dataIds = [];

        querySnapshot.forEach((doc) => {
          databaseInfo.push(doc.data().testData);
          dataIds.push(doc.id);
        });

        setTasks(dataIds);
        setChats(databaseInfo);
      });
    }
    getData();
    console.log("tasks", tasks);
 },[])
 
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
