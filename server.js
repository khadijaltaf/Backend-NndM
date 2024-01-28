import express from 'express'
import colors from  'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'

dotenv.config()
connectDB();

const app = express()

app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth' , authRoute)



//rest api
app.get('/', (req ,res)=> {
    res.send({
        message:"Welcome To Ninos&Minos"
    })
})


const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`.bgRed )
})