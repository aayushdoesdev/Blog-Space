const HomePost = ({post}) => {
  return (
    <div className="w-full flex mt-8 space-x-[50px] justify-center items-center">
      {/* left */}
      <div className="w-[20%] h-[200px] flex justify-center items-center">
        <img src={post.photo} />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-400 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(15, 25)}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          {post.description.slice(0,200) + " ...read more"}
        </p>
      </div>
    </div>
  );
};

export default HomePost;
