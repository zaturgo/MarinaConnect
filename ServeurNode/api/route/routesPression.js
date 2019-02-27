'use strict';
var controleurPression = require('../controleur/controleurPression');

module.exports = function(app) {

    // pression Routes
app.get('/pressions' , (req, res) => {
        console.log('Routage pression : get toutes les pressions');
       return controleurPression.listerPression(req, res);
});

app.get('/pressions/jour' , (req, res) => {
        console.log('Routage pression : get toutes les pressions jour');
       return controleurPression.listerPressionJour(req, res);
});

app.get('/pressions/semaine' , (req, res) => {
        console.log('Routage pression : get toutes les pressions semaine');
       return controleurPression.listerPressionSemaine(req, res);
});

app.get('/pressions/mois' , (req, res) => {
        console.log('Routage pression : get toutes les pressions mois');
       return controleurPression.listerPressionMois(req, res);
});

app.get('/pressions/annee' , (req, res) => {
        console.log('Routage pression : get toutes les pressions annee');
       return controleurPression.listerPressionAnnee(req, res);
});

}
