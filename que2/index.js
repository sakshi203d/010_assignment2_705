const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
const port = 8000;

app.use(express.urlencoded({extended:false}));
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized: true,
    store: new (require('session-file-store')(session))(),
}))

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"./view/login.html"));
})

app.post("/login",(req,res) => {
    var username = req.body.username;
    var password = req.body.password;
    if(username && password)
    {
        req.session.loggedIn = true;
        req.session.username = username;
        console.log(req.session.username);
        res.send("Login SuccessFully");
    }
})

app.get("/home", (req,res) => {
    if(req.session.loggedIn)
    {
        // req.session.loggedIn = "";
        console.log(req.session.loggedIn);
        res.sendFile(path.join(__dirname,"./view/home.html"));
    }
    else
    {
        res.sendFile(path.join(__dirname,"./view/login.html"));
    }
})

app.listen(port,() => {
    console.log(`Port is running on port number ${port} `);
})