import { comments } from "../models/comment.model.js";

// CREATE COMMENT
export const createComment = async (req, res) => {
  try {
    const newComment = new comments(req.body);
    await newComment.save();
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
export const updateComment = async (req, res) => {
  try {
    const updatedComment = await comments.findByIdAndUpdate(
      req.params.postID,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE
export const deleteComment = async (req, res) => {
  try {
    const deletedComment = await comments.findByIdAndDelete(req.params.postID);
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET USER POSTS
// export const getUserComment = async (req, res) =>{
//     try {
//         const userComment = await comments.find({postID: req.params.postID})
//         res.status(200).json(userComment)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }
