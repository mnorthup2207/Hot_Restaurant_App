var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;
var path = require("path");
var fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arrays
var reservations = [];
var tables = [
    {
        name: "Carl",
        phoneNumber: "303.333.3333",
        email: "email@gmail.com",
        uniqueID: "33"
    }
]
var waitList = [];
// Front End
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Back End
app.get("/api/reserve", function(req, res) {
    console.log("reservations")
    res.send("Reservations")
    // return res.json(reservations)
});
app.get("/api/tables", function(req, res) {
    console.log("tables")
    res.send(tables)
    // return res.json(reservations)
});



app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})