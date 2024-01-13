import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../url.js";
import { useEffect, useState } from "react";

const PostDetails = () => {

  const [post, setPost] = useState({})

  const postID = useParams().id
  console.log(postID)

  const fetchPost = async() =>{
    try {
      const res = await axios.get(URL + "/posts/" + postID)
      setPost(res.data)
    } catch (err) {
      console.error(err)
    }
  }
useEffect(() =>{
  fetchPost()

}, [postID])


  return (
    <div className="px-8 md:px-[200px] mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black md:text-3xl">
          {post.title}
        </h1>
        <div className="flex items-center justify-center space-x-2">
          <p>
            <BiEdit />
          </p>
          <p className="text-red-600">
            <MdDelete />
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@{post.username}</p>
        <div className="flex space-x-2">
          <p>11/01/2024</p>
          <p>14:21</p>
        </div>
      </div>
      <img src={post.photo} />
      <p className="mx-auto mt-8">
        {post.description}
      </p>
      <div className="flex items-center mt-8 space-x-4 font-semibold ">
        <p>Categories:</p>
        <div className="flex justify-center items-center space-x-2">
          <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
          <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
      </div>
      {/* comment section */}
      <Comment />
      <Comment />
      {/* write a comment */}
      <div className="w-full flex flex-col mt-4 md:flex-row">
        <input
          type="text"
          placeholder="Write a comment"
          className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
        />
        <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
