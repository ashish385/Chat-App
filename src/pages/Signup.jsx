import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  auth, db, storage } from "../firebase"; 
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { LuImagePlus } from "react-icons/lu";
import { doc, setDoc } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// const auth = getAuth(app);

const Signup = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault();
    
   const displayName = e.target[0].value;
   const email = e.target[1].value;
   const password = e.target[2].value;
  //  const file = e.target[3].files[0];
    if (!displayName || !email || !password) {
      setErrorMsg("All field required!")
      return
    }

    try {
      // create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // update user
      const update = await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      const user = res.user;

      setDoc(doc(db, "users", user.uid), {
        displayName: displayName,
        email: email,
        userId: user.uid,
        timestamp: new Date(),
      })
      navigate("/login")
      }
      catch(error) {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      }
    
    
    
  };
  return (
    <>
      <div className="w-full h-screen  flex justify-center items-center bg-gray-200">
        <div className="w-[80%] md:w-[45%]  h-fit flex flex-col mx-auto justify-center items-center px-6 py-4 rounded-xl bg-white">
          <h1 className="  font-bold text-xl py-2">Sign Up</h1>
          <form onSubmit={handleSubmit} className=" w-full flex flex-col justify-center gap-5">
            <label htmlFor="name" className="flex flex-col gap-2">
              <span className="font-[400] text-gray-700">Name:</span>
              <input
                type="text"
                name="displayName"
                // value={formdata?.name}
                // onChange={handleChange}
                placeholder="Enter your name"
                className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 bg-gray-100 focus:ring-slate-300 text-gray-500"
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-2">
              <span className="font-[400] text-gray-700">Email:</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 bg-gray-100 focus:ring-slate-300 text-gray-500"
              />
            </label>
            <label htmlFor="password" className="flex flex-col gap-2">
              <span className="font-[400] text-gray-700">Password: </span>
              <input
                type="password"
                name="password"
                placeholder="*********"
                className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 bg-gray-100 focus:ring-slate-300 text-gray-500"
              />
            </label>
            {/* <label
              htmlFor="file"
              className="flex cursor-pointer px-4 py-1 hover:text-blue-400 hover:bg-gray-100 gap-2"
            >
            <input
              type="file"
              name="file"
              id="file"
              placeholder="*********"
              style={{ display: "none" }}
            />
              <div className="w-10 h-10 ">
                <LuImagePlus className="w-full text-5xl" />
              </div>
              <span className=" py-2 px-2">Add an Avatar</span>
            </label> */}
            <p className="px-2 text-pink-600 text-center">{errorMsg}</p>
            <button
              className="px-4 py-2 border disabled:bg-gray-300 rounded-lg bg-blue-500 hover:bg-blue-600 text-gray-300"
            >
              Register
            </button>
            {/* {errorMsg && <span>Something went wrong!</span>} */}
          </form>
          <p className="mt-2 text-sm">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="hover:underline text-violet-700 hover:text-violet-500"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
