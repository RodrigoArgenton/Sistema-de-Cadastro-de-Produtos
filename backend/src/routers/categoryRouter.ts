import { Router } from "express"
import { handleCreateCategory } from "../controllers/categoryController"
import { getCategories } from '../controllers/categoryController'

const router = Router()

router.post('/categories', handleCreateCategory)
router.get('/categories', getCategories)

export default router