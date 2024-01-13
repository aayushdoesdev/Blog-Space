import {Router} from "express"
import {createComment, updateComment, deleteComment} from "../controllers/comment.js"
import { verifyToken } from "../verifyToken.js"

const router = Router()


router.post("/create",verifyToken, createComment)


router.put("/update/:postID",verifyToken, updateComment)


router.delete("/delete/:postID",verifyToken, deleteComment)


// router.get("/user/:userID", getUserComment)


export {router as commentRouter}
