import express from 'express'
import { connectToDatabase } from './database'
import categoryRoutes from './src/routers/categoryRouter'
import productRouter from './src/routers/productRouter'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

connectToDatabase()

app.use('/api', categoryRoutes)
app.use('/api', productRouter)

app.listen(3000, () => {
    console.log('Api rodando...')
})