import Router from 'express'
import { loggedinUser, logoutuser, RefreshAccessToken, registeruser } from '../controller/user.controller.js'
import {upload} from '../middleware/multer.middleware.js'
import {verifyjwt} from '../middleware/auth.middleware.js'
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registeruser
    )

router.route('/loggedin').post(loggedinUser)
router.route('/logout').post(verifyjwt ,  logoutuser)
router.route('/refsreshaccesstoken').post(RefreshAccessToken)

export default router