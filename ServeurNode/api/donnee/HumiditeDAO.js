var baseDeDonnees = require('./BaseDeDonnees').getInstance();

export const NOM_TABLE = "humidite";
export const NOM_CHAMP_ID = "id";
export const NOM_CHAMP_VALEUR = "valeur";
export const NOM_CHAMP_DATE = "date";

exports.listerHumidite = async function() {
    const SELECT_TOUTES_LES_HUMIDITES = 'select * from humidite';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}



exports.listerHumiditeJour = async function() {
    const SELECT_TOUTES_LES_HUMIDITES = 'SELECT * FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 day\');';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}


exports.listerHumiditeMois = async function() {
    const SELECT_TOUTES_LES_HUMIDITES = 'SELECT * FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 month\');';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}


exports.listerHumiditeAnnee = async function() {
    const SELECT_TOUTES_LES_HUMIDITES = 'SELECT * FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 year\');';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}



