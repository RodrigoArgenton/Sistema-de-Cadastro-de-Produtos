import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Products from "@/views/Products.vue"
import ProductForm from "@/views/ProductForm.vue"

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/products', name: 'Products', component: Products},
    { path: '/productform', name: 'ProductForm', component: ProductForm}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router