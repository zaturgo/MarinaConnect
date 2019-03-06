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


exports.listerPressionSemaine = async function() {
    const SELECT_TOUTES_LES_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-7 day\');';
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








exports.listerPressionMarina = async function(marina) {
	const SELECT_TOUTES_LES_PRESSIONS = 'select * from pression where idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_PRESSIONS);
}


exports.listerPressionJourMarina = async function(marina) {
	const SELECT_TOUTES_LES_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-1 day\') AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_PRESSIONS);
}


exports.listerPressionSemaineMarina = async function(marina) {
	const SELECT_TOUTES_LES_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-7 day\') AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_PRESSIONS);
}


exports.listerPressionMoisMarina = async function(marina) {
	const SELECT_TOUTES_LES_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-1 month\') AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_PRESSIONS);
}


exports.listerPressionAnneeMarina = async function(marina) {
	const SELECT_TOUTES_LES_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-1 year\')  AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_PRESSIONS);
}





