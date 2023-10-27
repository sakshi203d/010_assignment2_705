const express = require('express');
const app = express();
require('dotenv').config();
require('./db/connection');
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 8000;
const router = require('./routes/route');
// const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(router);

const Static_path = path.join(__dirname,'/public');
const partials_path = path.join(__dirname,'/views/partials');
app.use(express.static(Static_path));
app.set('view engine','hbs');
hbs.registerPartials(partials_path);

app.listen(port,()=>{
    console.log(`Server Running on ${port} PORT`);
});