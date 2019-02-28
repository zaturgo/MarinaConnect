'use strict';
var controleurHumidite = require('../controleur/controleurHumidite');

module.exports = function(app) {

    // humidite Routes
app.get('/humidites' , (req, res) => {
        console.log('Routage humidite : get toutes les humidites');
       return controleurHumidite.listerHumite(req, res);
});

app.get('/humidites/jour' , (req, res) => {
        console.log('Routage humidite : get toutes les humidites jour');
       return controleurHumidite.listerHumiteJour(req, res);
});

app.get('/humidites/semaine' , (req, res) => {
        console.log('Routage humidite : get toutes les humidites semaine');
       return controleurHumidite.listerHumiteSemaine(req, res);
});

app.get('/humidites/mois' , (req, res) => {
        console.log('Routage humidite : get toutes les humidites mois');
       return controleurHumidite.listerHumiteMois(req, res);
});

app.get('/humidites/annee' , (req, res) => {
        console.log('Routage humidite : get toutes les humidites Annee');
       return controleurHumidite.listerHumiteAnnee(req, res);
});

}
