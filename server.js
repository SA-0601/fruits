const express = require('express');

// Data or Models
const fruits = require('./models/fruits');

const app = express();
const PORT = 3000;

// ======Configuration=====
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//setting a middleware to run in the app which is a function which will
//run in between the request and response cycle
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})

//parses the data from the request
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Fruits page</h1>')
})

/**
 * Index Route: (return a list of fruits)
 */

app.get('/fruits', (req, res) => {
    // res.send(fruits);
    res.render('Index', {fruits: fruits})
})

/**
 * POST method route (accept data from the form)
 */
app.post('/fruits',(req,res) => {
    
    console.log(req.body);
    //if checked, req.body.readyToEat is set to 'on'
    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
})

/**
 * New Route : (return a form to create a new fruit)
 */
app.get('/fruits/new', (req,res) => {
    res.render('New');
})

/**
 * Show Route: (returns a specific fruit)
 */

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    console.log(req.params);
    // res.send(fruits[req.params.indexOfFruitsArray])
    res.render('Show', {fruit: fruits[req.params.indexOfFruitsArray]});
})

//
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(3000, () => {
    console.log('listening....');
})