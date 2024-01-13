import { useState } from "react"



const EditPost = () => {
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])

    const addCategory = () =>{
        const updatedCategories = [...categories]
        updatedCategories.push(category)
        setCategory("")
        setCategories(updatedCategories)
    }

    const deleteCategory = (i) =>{
        const updatedCategories = [...categories]
        updatedCategories.splice(i)
        setCategories(updatedCategories)
    }

  return (
    <div className="px-6 md:px-[200px] mt-8">
      <h1 className="font-bold md:text-2xl text-xl ">Update post</h1>
      <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
        <input
          type="text"
          placeholder="Enter post title"
          className="px-4 py-2 outline-none"
        />
        <input type="file" className="px-4" />
        <div className="flex items-center space-x-4 md:space-x-8">
          <input
            type="text"
            className="px-4 py-2 outline-none"
            placeholder="Enter post category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <div onClick={addCategory} className="bg-black text-white px-4 py-2 font-semibold cursor-pointer">
            Add
          </div>
        </div>
        <div className="flex px-4 mt-3">
            {categories ? categories.map((c,i) => (
                <div className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-1 py-1 rounded-md" key={i}>
                    <p>{c}</p>
                    <p onClick={deleteCategory(i)} className="text-white bg-black rounded-full cursor-pointer p-1 text-sm">
                    <ImCross />
                    </p>
                </div>
            )) : ""}
        </div>
        <textarea cols={30} rows={15} placeholder="Enter post description" className="outline-none"/>
        <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">Update Post</button>
      </form>
    </div>
  )
}

export default EditPost
