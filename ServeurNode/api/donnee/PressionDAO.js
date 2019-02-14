var baseDeDonnees = require('./BaseDeDonnees').getInstance();

export const NOM_TABLE = "pression";
export const NOM_CHAMP_ID = "id";
export const NOM_CHAMP_VALEUR = "valeur";
export const NOM_CHAMP_DATE = "date";

exports.listerPression = async function() {
    const SELECT_TOUTES_LES_PRESSIONS = 'select * from pression';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_PRESSIONS);
}



exports.listerPressionJour = async function() {
    const SELECT_TOUTES_LES_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-1 day\');';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_PRESSIONS);
}


exports.listerPressionMois = async function() {
    const SELECT_TOUTES_LES_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-1 month\');';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_PRESSIONS);
}


exports.listerPressionAnnee = async function() {
    const SELECT_TOUTES_LES_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-1 year\');';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_PRESSIONS);
}



