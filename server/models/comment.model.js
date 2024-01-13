import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    postID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const comments = mongoose.model("comments", commentSchema);
