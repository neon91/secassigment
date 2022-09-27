const secwork = require("express");

const app = secwork();


app.get("", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.get("/Home", (req, res) => {
    res.sendFile(__dirname + "/home.html")
})

app.get("/Step1", (req, res) => {
    res.sendFile(__dirname + "/Step1.html")
})

app.get("/Step2", (req, res) => {
    res.sendFile(__dirname + "/Step2.html")
})

app.get("/Step3", (req, res) => {
    res.sendFile(__dirname + "/Step3.html")
})


app.listen(8080, () => {
    console.log("Sever starting up at: port:8080")
})