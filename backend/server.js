import express from "express"
import connectDB from './database.js'
import ProductModel from "./models/products.model.js"
import cors from "cors"
import dotenv from "dotenv";

dotenv.config()



const app = express()
app.use(cors({ origin: 'http://localhost:5173' }));

/* app.use((req, res) => {
    console.log('WE GOT A NEW REQUEST!!')   
    res.send('<h1> This is my webpage!!!</h2>')
}) */

app.get('/products', async (req, res) => {
    const response = await ProductModel.find()
    console.log(response)

    try{
        const products = await ProductModel.find({})
        res.status(200).json({success: true, products: products})
    } catch (err) {
        console.log("Can't get products...")
        res.status(500).json({success: false, message: "Server Error"})
    }
})



app.listen(3000, () => {
    connectDB();
    console.log("Listening on port 3000.....");
});