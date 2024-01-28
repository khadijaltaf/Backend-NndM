import  express  from "express";
import {registerController} from '../controllers/authController.js'
import { loginController } from "../controllers/authController.js";
import { testController } from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
//route
const router = express.Router()
//routing 
//REGISTER || post method => 1st 
 router.post('/register', registerController);


 //LOGIN 
 router.post('/login' , loginController);

 //test
 router.get('/test' , requireSignin, isAdmin, testController)

export default router 