const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Welcome to michaelkallies.ca")
})

app.get("/test", (req, res) => {
  res.set("X-Custom-Header", "wooooo")
  res.status(418).send("blah")
})

app.listen(port, () => console.log(`app running on port ${port}`))
