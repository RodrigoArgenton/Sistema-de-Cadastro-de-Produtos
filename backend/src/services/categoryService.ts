import { Category } from "../models/categoryModel"

export const createCategory = async (name: string, parentId?: string | null) => {
    const category = new Category({ name, parentId: parentId || null})
    return await category.save()
}
export const getCategoryTree = async () => {
  const categories = await Category.find().lean()
  const categoryMap: Record<string, any> = {}
  const tree: any[] = []

  categories.forEach((cat) => {
    categoryMap[cat._id.toString()] = { ...cat, children: [] }
  })

  categories.forEach((cat) => {
    if (cat.parentId) {
      const parent = categoryMap[cat.parentId.toString()]
      if (parent) {
        parent.children.push(categoryMap[cat._id.toString()])
      }
    } else {
      tree.push(categoryMap[cat._id.toString()])
    }
  })

  return tree
}