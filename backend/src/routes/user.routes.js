import Router from 'express'
import { changecurrentpassword, getCurrentUser, loggedinUser, logoutuser, RefreshAccessToken, registeruser, updateaccountdetail } from '../controller/user.controller.js'
import {upload} from '../middleware/multer.middleware.js'
import {verifyjwt} from '../middleware/auth.middleware.js'
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
         
    ]),
    registeruser
    )

router.route('/loggedin').post(loggedinUser)
router.route('/logout').post(verifyjwt ,  logoutuser)
router.route('/refsreshaccesstoken').post(RefreshAccessToken)
router.route('/changepassword').post(  changecurrentpassword)
router.route('/updatedetail').patch(verifyjwt , updateaccountdetail)
router.route('/profile').get( verifyjwt ,  getCurrentUser)


export default router