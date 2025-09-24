import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use('/data', express.static(path.join(__dirname, 'data')))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/movies/:slug', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'detail.html'))
})

app.get('/error/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})