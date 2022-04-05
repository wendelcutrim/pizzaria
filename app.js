const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const PizzasRouter = require('./routes/PizzasRouter');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', PizzasRouter);

app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`));