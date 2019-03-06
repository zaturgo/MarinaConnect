'use strict';
var controleurTemperature = require('../controleur/controleurTemperature');

module.exports = function(app) {

    // pression Routes
app.get('/temperatures/tout' , (req, res) => {
        console.log('Routage pression : get toutes les temperatures');
       return controleurTemperature.listerTemperature(req, res);
});

app.get('/temperatures/jour' , (req, res) => {
        console.log('Routage pression : get toutes les temperatures jour');
       return controleurTemperature.listerTemperatureJour(req, res);
});

app.get('/temperatures/semaine' , (req, res) => {
        console.log('Routage pression : get toutes les temperatures semaine');
       return controleurTemperature.listerTemperatureSemaine(req, res);
});

app.get('/temperatures/mois' , (req, res) => {
        console.log('Routage pression : get toutes les temperatures mois');
       return controleurTemperature.listerTemperatureMois(req, res);
});

app.get('/temperatures/annee' , (req, res) => {
        console.log('Routage pression : get toutes les temperatures annee');
       return controleurTemperature.listerTemperatureAnnee(req, res);
});




    // pression Routes
app.get('/temperatures/tout/*' , (req, res) => {
        console.log('Routage pression : get toutes les temperatures');
       return controleurTemperature.listerTemperature(req, res);
});

app.get('/temperatures/jour/*' , (req, res) => {
        console.log('Routage pression : get toutes les temperatures jour');
       return controleurTemperature.listerTemperatureJour(req, res);
});

app.get('/temperatures/semaine/*' , (req, res) => {
        console.log('Routage pression : get toutes les temperatures semaine');
       return controleurTemperature.listerTemperatureSemaine(req, res);
});

app.get('/temperatures/mois/*' , (req, res) => {
        console.log('Routage pression : get toutes les temperatures mois');
       return controleurTemperature.listerTemperatureMois(req, res);
});

app.get('/temperatures/annee/*' , (req, res) => {
        console.log('Routage pression : get toutes les temperatures annee');
       return controleurTemperature.listerTemperatureAnnee(req, res);
});


}
