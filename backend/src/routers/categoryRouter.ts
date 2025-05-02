import { Router } from "express"
import { handleCreateCategory } from "../controllers/categoryController"

const router = Router()

router.post('/categories', handleCreateCategory)

export default router