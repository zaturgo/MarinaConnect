'use strict';
var controleurMarina = require('../controleur/controleurMarina.js');

module.exports = function(app) {

    // pression Routes
    app.get('/marina' , (req, res) => {
        console.log('Routage pression : get toutes les marina');
       return controleurMarina.listerMarina(req, res);
});

}
