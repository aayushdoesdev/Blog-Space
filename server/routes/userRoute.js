import {Router} from "express"
import {updateUser, deleteUser, getUser} from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js"

const router = Router() 

// UPDATE
router.put("/update/:id",verifyToken, updateUser)



// DELETE
router.delete("/delete/:id",verifyToken, deleteUser)



// GET USERS
router.get("/:id", getUser)




export {router as userRouter}