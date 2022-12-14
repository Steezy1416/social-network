const express = require("express")
const moongoose = require("mongoose")
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(require("./routes"))

moongoose.connect("mongodb://127.0.0.1:27017/social-network",
{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

app.listen(PORT, () => console.log("========== CONNECTED TO SERVER =========="))
