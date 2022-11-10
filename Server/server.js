const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json)
app.use(cors())

app.get("/api/park", getPark);



const PORT = 4500
app.listen(PORT, () => console.log(`Server running on ${PORT}`))