import dotenv from 'dotenv';
var {Pool} = require('pg');
/*let dbNom="";
var dbPort = 5432;
var dbHote = 'localhost';
let dbUtilisateur = "postgres";
let dbMotDePasse = "postgres";*/

// let chaineDeConnection = 'postgres://'+dbUtilisateur+':'+dbMotDePasse+'@'+dbHote+':'+dbPort+'/'+dbNom;


var BaseDeDonnees = function () {
};

module.exports = BaseDeDonnees;

BaseDeDonnees.getInstance = function () {
    if (typeof BaseDeDonnees.db === 'undefined') {
        BaseDeDonnees.Initialiser();
    }
    return BaseDeDonnees.db;
}

BaseDeDonnees.Initialiser = function () {
    // BaseDeDonnees.db = new postgresql.Client(chaineDeConnection);
    BaseDeDonnees.db = new Pool({
        user: process.env.BDD_UTILISATEUR,
        host: process.env.BDD_HOTE,
        database: "marinacapteur",
        password: process.env.BDD_MOT_DE_PASSE,
        port: process.env.BDD_PORT,
    })

   // BaseDeDonnees.db.connect();
}

BaseDeDonnees.Disconnect = async function () {
    if (BaseDeDonnees.db) {
        BaseDeDonnees.db.close();
    }
}
