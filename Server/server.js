const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

app.use(express.json())
app.use(cors())

const {getPark, randomPark, addListItem, deleteListItem} = require("./controller.js")
app.get("/api/park/:team", getPark);
app.get("/api/random", randomPark);
app.post('/api/listItems', addListItem);
//app.delete('http://localhost:4500/api/listItems:id', deleteListItem);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/styles.css"))
})

app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/main.js"))
})

const port = process.env.PORT||4500
app.listen(port, () => console.log(`Server running on ${port}`))