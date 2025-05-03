import mongoose, {Schema} from "mongoose"

const ProductSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    }
})

export const Product = mongoose.model('products', ProductSchema)