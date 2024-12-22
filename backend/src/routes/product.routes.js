import { Router } from "express";
 
import { addproduct } from "../controller/Product.controller.js";
import { upload } from "../middleware/multer.middleware.js";

 const router = Router()

router.route('/addproduct').post(upload.single('image'), addproduct)

export default router;