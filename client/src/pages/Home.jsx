import axios from "axios";
import HomePost from "../components/HomePost.jsx";
import { URL } from "../url.js";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import { UserContext } from "../context/userContext.jsx";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [loader, setLoader] = useState(false);
  const {user} = useContext(UserContext)

  const { search } = useLocation();

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/posts" + search);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResult(true);
      } else {
        setNoResult(false);
      }
      setLoader(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [search]);

  return (
    <div className="px-8 md:px-[200px]">
      {loader ? (
        <div className="h-[40vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : !noResult ? (
        posts.map((post) => <Link to={user ? `/posts/post/${post._id}` : "/login"}><HomePost key={post._id} post={post} /></Link>)
      ) : (
        <h3 className="text-center font-bold mt-16">No post avaliable</h3>
      )}
    </div>
  );
};

export default Home;
