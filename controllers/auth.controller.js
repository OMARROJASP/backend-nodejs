import { validationResult } from "express-validator";
//req: lo que envia el usuario como peticion y el res es la respuesta
export const register = (req, res) =>{
    const errors= validationResult(req)
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

   console.log( req.body)
    res.json({ok: 'register'});
}

export const login =  (req, res) =>{
    res.json({ok: 'login'});
}

