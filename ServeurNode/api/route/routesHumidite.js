'use strict';
var controleurHumidite = require('../controleur/controleurHumidite');

module.exports = function(app) {

    // humidite Routes
    app.get('/humidites' , (req, res) => {
        console.log('Routage humidite : get toutes les humidites');
       return controleurHumidite.listerHumite(req, res);
});
}
