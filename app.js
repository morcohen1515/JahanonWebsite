const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');

//handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(express.static('public/images'));

app.get('/', (req, res) => {res.render('index');})

app.get('/about', (req, res) => res.render('about'));

app.get('/menu', (req, res) => res.render('menu'));

app.get('/order', (req, res) => res.render('order'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('conecct'))
