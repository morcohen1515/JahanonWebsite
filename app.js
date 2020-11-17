const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const http = require('http');
const fs = require('fs');

//handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {res.render('index');})

app.get('/about', (req, res) => res.render('about'));

app.get('/menu', (req, res) => res.render('menu'));

app.get('/order', (req, res) => res.render('order'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('conecct'))
