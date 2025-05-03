import { Product } from "../models/productModel"

export const createProduct = async (name: string, description: string, categoryId: string) => {
    const product = new Product({name, description, categoryId})
    return await product.save()
}