const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.PORT || process.env.DEV_PORT || 8080

app.use(express.static(path.join(__dirname, "public")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, () => {
  console.log(`[v0] ISO 27001 Control Center prototype running on port ${PORT}`)
})
