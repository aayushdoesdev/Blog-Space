import {Router} from 'express'
import {userRegister, userLogin, userLogout} from "../controllers/auth.js"

const router = Router()

router.post("/register", userRegister)

router.post("/login", userLogin)

router.get("/logout", userLogout)


export {router as authRouter}