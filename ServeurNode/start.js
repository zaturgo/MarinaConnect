// On bablise notre code pour utiliser la syntax Es6
require('babel-register')({
    presets: [ 'env' ]
})

// Import du serveur
module.exports = require('./serveur.js');
