import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    image: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    discounted: {
        type: Number,
        required: false
    }
},
{
    timestamps: true
})

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;