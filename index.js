const express = require('express')
const app = express()
const impportDB = require('./db.json')

let port = process.env.PORT || 3000

app.get("/", (req, res) => {
    // res.send("Welcome to Music Api")
    res.send(impportDB)
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})