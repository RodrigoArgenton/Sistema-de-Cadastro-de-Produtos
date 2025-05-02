import express from 'express'
import { connectToDatabase } from './database'
import categoryRoutes from './src/routers/categoryRoutes'

const app = express()
app.use(express.json())

connectToDatabase()

app.use('/api', categoryRoutes)

app.listen(3000, () => {
    console.log('Api rodando...')
})