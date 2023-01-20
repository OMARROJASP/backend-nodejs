import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import {body} from "express-validator"

//!!!!!!!validacion es obligatorio......
//poara la autentificacion
const router = express.Router()


//req: lo que envia el usuario como peticion y el res es la respuesta

//se sugiere que el trim este primero
router.post("/register",[
    body('email',"Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "minimo 6 caracteres")
        .trim()
        .isLength({min:6}),
    body("password", "formato de password incorercta")
        .custom((value,{req})=>{
            if(value !== req.body.repasword){
                throw new Error('No coinciden las contraseñas')
            }
            return value
        })

], register)

router.post("/login",[
    body('email',"Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "minimo 6 caracteres")
        .trim()
        .isLength({min:6}),
],
 login)


export default router;