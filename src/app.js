import express from 'express'
import { conn } from './db.js'

const app = express()

//Activacion del puerto
app.listen(3000)
console.log("Serber runing on port 3000")


app.get('/', (req, res) =>{
    res.send("Eriker Tj")
})

app.get('/pingdb',async(req, res)=>{
    const result = await conn.query('SELECT "Entrada de la base de datos" as RESULT')
    console.log(result)
    res.send("Database")
})

