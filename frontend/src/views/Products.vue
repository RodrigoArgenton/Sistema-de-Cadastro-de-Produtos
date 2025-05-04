<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'


interface Category {
  _id: string
  name: string
  parentId: string | null
  children?: Category[]
}

interface Product {
  _id: string
  name: string
  description: string
  categoryId: string
}

interface ProductWithCategoryName extends Product {
  nameCategory: string
}

interface CategoryOption {
  title: string
  value: string
}

const categories = ref<Category[]>([])
const categoryOptions = ref<CategoryOption[]>([])
const product = ref<Product[]>([])
const search = ref('')

const fetchCategories = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/categories')
    categories.value = res.data
    categoryOptions.value = flattenCategories(categories.value)
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
  }
}

const fetchProducts = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/products')
    product.value = res.data
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
  }
}

const flattenCategories = (
  list: Category[],
  parentPath = ''
): CategoryOption[] => {
  return list.flatMap(category => {
    const path = parentPath ? `${parentPath} > ${category.name}` : category.name
    const current = [{ title: path, value: category._id }]
    const children = category.children ? flattenCategories(category.children, path) : []
    return [...current, ...children]
  })
}

const productsWithCategoryName = computed<ProductWithCategoryName[]>(() =>
  product.value.map(prod => {
    const category = categoryOptions.value.find(item => item.value === prod.categoryId)
    return {
      ...prod,
      nameCategory: category ? category.title : 'Categoria não encontrada'
    }
  })
)

const headers = [
    {
      align: 'start' as const,
      value: 'name',
      sortable: false,
      title: 'Produtos',
    },
    { value: 'nameCategory', title: 'categoria' },
  ]

onMounted(fetchCategories)
onMounted(fetchProducts)
</script>
<template>
    <v-container>
      <v-card
        title="Lista de produtos"
        flat
      >
        <template v-slot:text>
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
          ></v-text-field>
        </template>

        <v-data-table
          :headers="headers"
          :items="productsWithCategoryName"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
</template>