import  Router  from "express";
import { payment } from "../controller/Payment.controller.js";

const router = Router()

router.route('/payment').post(payment)

export default router;