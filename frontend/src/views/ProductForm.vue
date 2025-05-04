<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Category {
  _id: string
  name: string
  parentId: string | null
  children?: Category[]
}

interface CategoryOption {
  title: string
  value: string
}

interface Product{
  name: string
  description: string
  categoryId: string
}

const categories = ref<Category[]>([])
const categoryOptions = ref<CategoryOption[]>([])
const product = ref<Product>({
  name: '',
  description: '',
  categoryId: ''
})

const fetchCategories = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/categories')
    categories.value = res.data
    categoryOptions.value = flattenCategories(categories.value)
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

const submitProduct = async () => {
  try {
    await axios.post('http://localhost:3000/api/products', product.value)
    console.log('Produto enviado para o banco de dados')
    resetProduct()
  } catch (err) {
    console.error('Erro ao enviar os dados', err)
  }
}

const resetProduct = () => {
  return product.value = {
    name: '',
    description: '',
    categoryId: ''
  }
}

onMounted(fetchCategories)

</script>

<template>
  <v-container>
    <v-form>
      <v-text-field label="Nome do produto" v-model="product.name"/>
      <v-text-field label="Descrição do produto" v-model="product.description"/>
      <v-select
        v-model="product.categoryId"
        :items="categoryOptions"
        item-title="title"
        item-value="value"
        label="Selecione a categoria do item"
      />
    </v-form>
    <v-btn class="me-4" @click="submitProduct">Enviar</v-btn>
    <v-btn @click="resetProduct">Limpar</v-btn>
  </v-container>
</template>
