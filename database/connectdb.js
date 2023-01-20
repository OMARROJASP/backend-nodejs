
import mongoose from "mongoose";


try{
    await mongoose.connect(process.env.URI_MONGO)
    console.log("Connect db OK 👍👍👍")
}catch(error){
    console.log("Error in the connect 👎👎👎👎 :" + error)
} 