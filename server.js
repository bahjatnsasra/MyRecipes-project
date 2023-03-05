const express = require('express')
const recipesApi = require('./routes/recipesApi')
const path = require('path')

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/',recipesApi)

const port = 3000
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})