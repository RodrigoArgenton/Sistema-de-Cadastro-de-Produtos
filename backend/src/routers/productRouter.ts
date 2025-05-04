import { Router } from "express"
import { handleCreateProduct } from "../controllers/productController"
import { getProductsController } from "../controllers/productController"

const router = Router()

router.post('/products', handleCreateProduct)
router.get('/products', getProductsController)

export default router