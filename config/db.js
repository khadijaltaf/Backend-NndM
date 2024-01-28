import mongoose from 'mongoose'
import color from 'colors'

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB);
        console.log(`DB is connected on ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`error in mongoDB is ${error}`.bgGreen.white);
    }
}

export default connectDB