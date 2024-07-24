import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import connectDB from './config/databse.js'

dotenv.config({path: './config/config.env'})
const app = express()

connectDB()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST" , "DELETE" , "PUT"],
    credentials: true,
}))

app.listen(process.env.PORT , () => {
    console.log(`server is working on PORT:${process.env.PORT}`)
})