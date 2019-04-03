'use strict';
var controleurTemperature = require('../controleur/controleurTemperature');

module.exports = function(app) {

    // temperature Routes
app.get('/temperatures/tout' , (req, res) => {
        console.log('Routage temperature : get toutes les temperatures');
       return controleurTemperature.listerTemperature(req, res);
});

app.get('/temperatures/jour' , (req, res) => {
        console.log('Routage temperature : get toutes les temperatures jour');
       return controleurTemperature.listerTemperatureJour(req, res);
});

app.get('/temperatures/semaine' , (req, res) => {
        console.log('Routage temperature : get toutes les temperatures semaine');
       return controleurTemperature.listerTemperatureSemaine(req, res);
});

app.get('/temperatures/mois' , (req, res) => {
        console.log('Routage temperature : get toutes les temperatures mois');
       return controleurTemperature.listerTemperatureMois(req, res);
});

app.get('/temperatures/annee' , (req, res) => {
        console.log('Routage temperature : get toutes les temperatures annee');
       return controleurTemperature.listerTemperatureAnnee(req, res);
});




    // temperature Routes
app.get('/temperatures/tout/*' , (req, res) => {
        console.log('Routage temperature : get toutes les temperatures');
       return controleurTemperature.listerTemperature(req, res);
});

app.get('/temperatures/jour/*' , (req, res) => {
        console.log('Routage temperature : get toutes les temperatures jour');
       return controleurTemperature.listerTemperatureJour(req, res);
});

app.get('/temperatures/semaine/*' , (req, res) => {
        console.log('Routage temperature : get toutes les temperatures semaine');
       return controleurTemperature.listerTemperatureSemaine(req, res);
});

app.get('/temperatures/mois/*' , (req, res) => {
        console.log('Routage temperature : get toutes les temperatures mois');
       return controleurTemperature.listerTemperatureMois(req, res);
});

app.get('/temperatures/annee/*' , (req, res) => {
        console.log('Routage temperature : get toutes les temperatures annee');
       return controleurTemperature.listerTemperatureAnnee(req, res);
});


app.get('/temperatures/live/*' , (req, res) => {
        console.log('Routage temperature : get live temperature');
       return controleurTemperature.liveTemperature(req, res);
});


app.post('/temperatures' , (req, res) => {
	console.log('Routage temperature : ajoute temperature : '+req.body["valeur"]+"°C");
       return controleurTemperature.ajouterTemperature(req, res);
});

}
