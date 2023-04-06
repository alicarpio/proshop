import express from 'express'// nodejs modules
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import colors from 'colors'
import productsRoutes from "./routes/productsRoutes.js";

dotenv.config()

connectDB()

const app = express()


const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('API is running...');
})

app.use('/api/products', productsRoutes)

app.use((err,req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
})


app.listen(
    PORT,() =>
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold)
)