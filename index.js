const express = require('express')
const app = express()
const port = 3000
const mongojs = require('mongojs')
const db = mongojs('Move-Maker', ['Products'])

app.get('/', (req, res) => {
    db.Products.find((err, moveProperties) => {
        res.json(moveProperties)
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
