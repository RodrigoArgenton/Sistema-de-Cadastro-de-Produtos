import { Category } from "../models/Category"

export const createCategory = async (name: string, parentId?: string | null) => {
    const category = new Category({ name, parentId: parentId || null})
    return await category.save()
}