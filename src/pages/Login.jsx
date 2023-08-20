import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { app } from "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import { toast } from 'react-hot-toast';
const auth = getAuth(app);


const Login = () => {
  const navigate = useNavigate(); 
  const initialValues = {
    email: "",
    password: "",
  };

  const [formdata, setFormdata] = useState(initialValues);
  const [errorMsg, setErrorMsg] = useState(false);
   

  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if ( !formdata.email || !formdata.password) {
      setErrorMsg("Fill all fields!");
      return;
    }
    setErrorMsg("");

    
    signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then(async (res) => {
        
        console.log(res);
        toast.success("Login Successfully!")
        window.localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/dashboard");

      })
      .catch((err) => {

        setErrorMsg(err.message);
        console.log("error ", err);
        toast.error(err.message);
      });
    console.log(formdata);
  }
  return (
    <>
      <div className="w-full h-screen  flex justify-center items-center bg-gray-200">
        <div className=" w-[80%] md:w-[45%] h-fit flex flex-col mx-auto justify-center items-center px-6 py-4 rounded-xl bg-white">
          <h1 className="  font-bold text-xl py-2">Log In</h1>
          <div className=" w-full flex flex-col justify-center gap-5">
            <label htmlFor="email" className="flex flex-col gap-2">
              <span className="font-[400] text-gray-700">Email:</span>
              <input
                type="email"
                name="email"
                value={formdata?.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 bg-gray-100 focus:ring-slate-300 text-gray-500"
              />
            </label>
            <label htmlFor="password" className="flex flex-col gap-2">
              <span className="font-[400] text-gray-700">Password: </span>
              <input
                type="password"
                name="password"
                value={formdata?.password}
                onChange={handleChange}
                placeholder="*********"
                className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 bg-gray-100 focus:ring-slate-300 text-gray-500"
              />
            </label>
            <p className="px-2 text-pink-600 text-center">{errorMsg}</p>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 border rounded-lg bg-blue-500 hover:bg-blue-600 text-gray-300"
            >
              Login
            </button>
          </div>
          <p className="mt-2 text-sm">
            New user?{" "}
            <Link
              to={"/signup"}
              className="hover:underline text-violet-700 hover:text-violet-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login
