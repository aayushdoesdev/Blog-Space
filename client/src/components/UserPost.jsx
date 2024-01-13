
const UserPost = () => {
  return (
    <div className="w-full flex mt-8 space-x-[50px] justify-center items-center">
    {/* left */}
    <div className="w-[20%] h-[200px] flex justify-center items-center">
      <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D" className="h-full w-full object-cover" />
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
        10 Uses of Artificial Intelligence in Day to Day Life
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-400 items-center justify-between md:mb-4">
        <p>@aayushdoesdev</p>
        <div className="flex space-x-2">
          <p>11/01/2024</p>
          <p>14:21</p>
        </div>
      </div>
      <p className="text-sm md:text-lg">
        Technology is the ever-evolving force shaping our modern world. From
        the advent of the internet to artificial intelligence, it continually
        revolutionizes how we live, work, and communicate. It empowers us with
        unprecedented connectivity, efficiency, and innovation, driving
        progress across diverse fields. Technology is the catalyst propelling
        humanity into an era of boundless possibilities.
      </p>
    </div>
  </div>
  )
}

export default UserPost
