import React, { useState } from 'react';
import { collection, query, where, getDocs, getDoc, setDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';


const SearchUser = () => {
  const [username, setUsername] = useState("");
  const [client, setClient] = useState(null);
  const [err, setErr] = useState('')

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.uid);

  const handleSearch = async () => {
    const q = query(collection(db, 'users'),
      where("displayName", "==", username));
    console.log(q);
    
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setClient(doc.data());
        console.log("client",client);
      });
    } catch (error) {
      setErr("User not found!");
      console.log(error);
    }
  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  }

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      user.uid > client.uid
        ? user.uid + client.uid
        : client.uid + user.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: client.uid,
            displayName: client.displayName,
            photoURL: client.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", client.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setClient(null);
    setUsername("");
  };
  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 md:pl-6 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>
      <div className="flex justify-center items-center py-4">
        {err && <span className="text-red-500">{err}</span>}

        {/* <img src="" alt="" /> */}
        {client && (
          <>
            <div onClick={handleSelect} className={`${!client?'appearance-none h-0':"block cursor-pointer"}`}>
              {/* <img src={client.photoURL} alt="" /> */}
              <span>{client.displayName}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchUser
