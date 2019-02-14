require('babel-register')({
    presets: [ 'env' ]
})
import express from 'express';
import "@babel/polyfill";

var dotenv = require('dotenv');
dotenv.load();
dotenv.config();
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authentification");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send('Vous êtes bien connecté au serveur');
});

let routesHumidites =require('./api/route/routesHumidite');

app.get('/', (req, res) => {
    return res.status(200).send('Vous êtes bien connecté au serveur');
});

routesHumidites(app);

app.listen(8085);
console.log('Le serveur tourne sur le port ', 8085);
