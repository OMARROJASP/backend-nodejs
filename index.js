import 'dotenv/config'
import "./database/connectdb.js";
import authRouter from './routers/auth.route.js';
import express from "express"; //lo usamos con el type: module del package
//const express = requiere('express') //no necesita type: module


const app = express()
app.use(express.json())//habilitando poder leer solicitudes en json

app.use('/api/v1/', authRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT,() => console.log("hay caray 😂😂😂😂por fin http://localhost:" +PORT))
