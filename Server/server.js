const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const {getPark} = require("./controller.js")
app.get("/api/park/:team", getPark);



const PORT = 4500
app.listen(PORT, () => console.log(`Server running on ${PORT}`))