import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {URL} from "../url.js"
import { UserContext } from "../context/userContext.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext)

  const handleLogin = async () => {
    try {
      const response = await axios.post(URL + "/auth/login", {
        username,
        password,
      },{withCredentials: true});
      setUser(response.data)
      navigate("/");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl font-bold text-left">Log in to your account</h1>
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
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:text-black hover:bg-gray-500">
          Log In
        </button>
        <div className="flex justify"></div>
        <p className="text-gray-500">
          New Here? <Link to="/register">Register</Link>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
