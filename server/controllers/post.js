import { posts } from "../models/post.model.js";

// CREATE POST
export const createPost = async (req, res) => {
  try {
    const newPost = new posts(req.body);
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
export const updatePost = async (req, res) => {
  try {
    const updatedPost = await posts.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE
export const deletePost = async (req, res) => {
  try {
    const deletedPost = await posts.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};


// GET POST
export const searchPost = async (req, res) => {
  try {
    const query = req.query
    const searchFilter = {
      title: {$regex: query.search, $options: "i"}
    }
    const post = await posts.find(query.search ? searchFilter : null);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};


// GET USER POSTS
export const getUserPost = async (req, res) =>{
    try {
        const userPosts = await posts.find({userID: req.params.userID})
        res.status(200).json(userPosts)
    } catch (err) {
        res.status(500).json(err)
    }
}

// GET POST DETAILS
export const getPostDetails = async (req, res) =>{
  try {
    const post = await posts.findById(req.params.id)
    res.status(200).json(post)
  } catch (err) {
    console.error(err)
  }
}





// export const getPost = async (req, res) => {
//   try {
   
//     const post = await posts.find();
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
