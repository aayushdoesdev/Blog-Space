import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import {URL} from "../url"
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const [prompt, setPrompt] = useState("")


  const handleLogout = async () =>{
    try {
      const response = await axios.get(URL + "/auth/logout", {withCredentials: true})
      console.log(response)
      setUser(null)
      navigate("/login")
    } catch (err) {
      console.error(err)
    }
  }

 

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-xl font-extrabold">
        <Link to="/">Blog Space</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p className="cursor-pointer">
          <BsSearch onClick={() => navigate(prompt ? "/posts?search=" + prompt : navigate("/"))}/>
        </p>
        <input
          type="text"
          className="outline-none px-3"
          placeholder="Search Post"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3>
            <Link to="/create">Create</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <h3>
            <Link to="/profile">Profile</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/register">Register</Link>
          </h3>
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="w-full px-2 py-2 text-sm font-bold text-white bg-black rounded-lg hover:text-black hover:bg-gray-500" >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
