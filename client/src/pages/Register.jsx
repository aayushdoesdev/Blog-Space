import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import {URL} from "../url.js"

const Register = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleRegister = async () =>{
    try {
      const response = await axios.post(URL + "/auth/register", {username, password, email})
      console.log(response)
      setUsername("")
      setPassword("")
      setEmail("")
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl font-bold text-left">Create new account</h1>
        <input
          type="text"
          className="w-full px-4 py-2 border-2 border-black outline-0"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full px-4 py-2 border-2 border-black outline-0"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          className="w-full px-4 py-2 border-2 border-black outline-0"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:text-black hover:bg-gray-500">
          Register
        </button>
        <div className="flex justify"></div>
        <p className="text-gray-500">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
