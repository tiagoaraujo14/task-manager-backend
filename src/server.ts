import express from 'express'
import routes from './routes/router'
import './database/connect'
import 'reflect-metadata'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log('server started at http://localhost:3333'))
