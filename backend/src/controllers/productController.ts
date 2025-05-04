import { Request, Response } from "express"
import { createProduct } from "../services/productService"
import { getProducts } from "../services/productService"

export const handleCreateProduct = async (req: Request, res: Response): Promise<any> => {
    const {name, description, categoryId} = req.body

    try {
        const newProduct = await createProduct(name, description, categoryId)
        return res.status(201).json(newProduct)
    } catch (err) {
        return res.status(500).json({
            message: 'Erro ao criar o produto',
            error: err
        })
    }
}

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const data = await getProducts()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos' })
  }
}