import mongoose, {Schema} from "mongoose"

const CategorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    }
})

export const Category = mongoose.model('categories', CategorySchema)