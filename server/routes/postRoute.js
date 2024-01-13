import {Router} from "express"
import {createPost, updatePost, deletePost, getUserPost, searchPost, getPostDetails} from "../controllers/post.js"
import { verifyToken } from "../verifyToken.js"

const router = Router()

router.post("/create", createPost)


router.put("/update/:id", updatePost)


router.delete("/delete/:id",verifyToken, deletePost)


router.get("/", searchPost)

// router.get("/all", getPost)


router.get("/user/:userID", getUserPost)

router.get("/:id", getPostDetails)


export {router as postRouter}

