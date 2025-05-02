import express from 'express'
import { connectToDatabase } from './database'

const app = express()
app.use(express.json())

connectToDatabase()

app.listen(3000, () => {
    console.log('Api rodando...')
})