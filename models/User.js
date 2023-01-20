import {Schema, model} from 'mongoose'


//metodos que impone mongodb
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true, //limpiar los espacios vacios
        unique:true, //unicos
        lowercase: true, //mayuscula
        index: {indique: true}, // busqueda mas rapida para enorme proyectos
    },

    password: {
        type: String,
        required: true
    }

})

export const User = model('User', userSchema)