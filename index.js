const express = require('express')
const app = express()
const impportDB = require('./db.json')
const categoriesDB = require('./categories.json')
const categoryPlaylistsDB = require('./categoryPlaylists.json')
const featuredPlayListsDB = require('./featuredPlaylists.json')
const newReleasesDB = require('./newReleases.json')

let port = process.env.PORT || 3000

app.get("/", (req, res) => {
    // res.send("Welcome to Music Api")
    res.send(impportDB)
})

app.get("/categories", (req, res) => {
    res.send(categoriesDB)
})

app.get("/categoryPlaylists", (req, res) => {
    res.send(categoryPlaylistsDB)
})

app.get("/featuredPlayLists", (req, res) => {
    res.send(featuredPlayListsDB)
})

app.get("/newReleases", (req, res) => {
    res.send(newReleasesDB)
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})