'use strict';
var controleurMarina = require('../controleur/controleurMarina.js');

module.exports = function(app) {

    app.get('/marina' , (req, res) => {
        console.log('Routage pression : get toutes les marina');
       return controleurMarina.listerMarina(req, res);
});

    app.get('/marina/live/*' , (req, res) => {
        console.log('Routage pression : get dernières valeurs');
       return controleurMarina.live(req, res);
});


}
