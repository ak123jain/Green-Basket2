import { Router } from "express";
 
import { addproduct, getproduct } from "../controller/Product.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { payment } from "../controller/Payment.controller.js";

 const router = Router()

router.route('/addproduct').post(upload.single('image'), addproduct)
router.route('/getproduct').get(getproduct)
 

export default router;