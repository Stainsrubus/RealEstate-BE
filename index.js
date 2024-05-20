import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Routes from './src/routes/index.js'


dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use('/',Routes)


app.listen(PORT,()=>console.log(`App is listening ${PORT}`))