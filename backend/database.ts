import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGO_URI as string

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri, {
            dbName: 'PietaTech'
        })
        console.log('Banco de dados conectado')
    }catch(err){
        console.error('Erro ao conectar no banco de dados', err)
        process.exit(1)
    }
}