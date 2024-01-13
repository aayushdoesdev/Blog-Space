import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    userID:{
        type: String,
        required: true,
    },
    categories:{
        type: Array,
    },
},{timestamps: true})


export const posts = mongoose.model("posts", postSchema)