import { Router } from "express"
import { handleCreateProduct } from "../controllers/productController"

const router = Router()

router.post('/products', handleCreateProduct)

export default router