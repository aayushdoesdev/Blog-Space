import UserPost from "../components/UserPost.jsx"

const Profile = () => {
  return (
    <div>
      <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse">
        <div className="flex flex-col md:w-[70%] w-full">
          <h1 className="text-xl font-bold nb-4">Your Posts:</h1>
          <UserPost/>
          <UserPost/>
          <UserPost/>
          <UserPost/>
          <UserPost/>
        </div>
        <div className="md:sticky md:top-16 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-start">
          <div className="flex flex-col space-y-4 items-start">
          <h1 className="text-xl font-bold mb-4">Profile</h1>
          <input type="text" className="outline-none px-4 py-2 text-gray-500" placeholder="Your username" />
          <input type="password" className="outline-none px-4 py-2 text-gray-500" placeholder="Your password" />
          <input type="text" className="outline-none px-4 py-2 text-gray-500" placeholder="Your email" />
          <div className="flex items-center space-x-4 mt-8">
            <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Update</button>
            <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Delete</button>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Profile
