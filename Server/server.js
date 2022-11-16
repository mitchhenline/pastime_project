const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const {getPark, randomPark, addListItem, deleteListItem} = require("./controller.js")
app.get("/api/park/:team", getPark);
// app.get("/api/random", randomPark);
app.post('/api/listItems', addListItem);
app.delete('http://localhost:4500/api/listItems:id', deleteListItem);



const PORT = 4500
app.listen(PORT, () => console.log(`Server running on ${PORT}`))