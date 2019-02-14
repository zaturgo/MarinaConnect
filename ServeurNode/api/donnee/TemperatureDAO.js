var baseDeDonnees = require('./BaseDeDonnees').getInstance();

export const NOM_TABLE = "temperature";
export const NOM_CHAMP_ID = "id";
export const NOM_CHAMP_VALEUR = "valeur";
export const NOM_CHAMP_DATE = "date";

exports.listerTemperature = async function() {
    const SELECT_TOUTES_LES_TEMPERATURES = 'select * from temperature';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}



exports.listerTemperatureJour = async function() {
    const SELECT_TOUTES_LES_TEMPERATURES = 'SELECT * FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 day\');';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}


exports.listerTemperatureMois = async function() {
    const SELECT_TOUTES_LES_TEMPERATURES = 'SELECT * FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 month\');';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}


exports.listerTemperatureAnnee = async function() {
    const SELECT_TOUTES_LES_TEMPERATURES = 'SELECT * FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 year\');';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}



