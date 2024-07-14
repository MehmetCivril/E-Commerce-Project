const express = require("express")
const app = express() //Express uygulama nesnesini oluşturur. express() fonksiyonu çağrılarak bir app nesnesi yaratılır.

app.get("/", (req, res) => {
  res.send("Your first API")
}) //Callback fonksiyonunda((req, res) => { ... }), gelen isteğe(req) "Your first API" yanıtını(res) gönderir.

app.listen(9000, () => {
  console.log("listening on")
})
