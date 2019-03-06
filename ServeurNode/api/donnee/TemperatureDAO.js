var baseDeDonnees = require('./BaseDeDonnees').getInstance();

export const NOM_TABLE = "temperature";
export const NOM_CHAMP_ID = "id";
export const NOM_CHAMP_VALEUR = "valeur";
export const NOM_CHAMP_DATE = "date";

exports.listerTemperature = async function() {
    const SELECT_TOUTES_LES_TEMPERATURES = 'select * from temperature';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}


exports.listerTemperatureJour = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM temperature where date >= DATE(NOW()) and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}else{
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM temperature where date >= DATE(NOW()) GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}
}


exports.listerTemperatureSemaine = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-7 day\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}else{
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-7 day\') GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}
}


exports.listerTemperatureMois = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 month\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}else{
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 month\') GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}
}


exports.listerTemperatureAnnee = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 year\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'month\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}else{
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 year\') GROUP BY date_trunc(\'month\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}
}
/*


exports.listerTemperatureJour = async function() {
    const SELECT_TOUTES_LES_TEMPERATURES = 'SELECT * FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 day\');';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}


exports.listerTemperatureSemaine = async function() {
    const SELECT_TOUTES_LES_TEMPERATURES = 'SELECT * FROM temperature where date >= DATE(NOW() + INTERVAL \'-7 day\');';
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









exports.listerTemperatureMarina = async function(marina) {
	const SELECT_TOUTES_LES_TEMPERATURES = 'select * from temperature where idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}


exports.listerTemperatureJourMarina = async function(marina) {
	const SELECT_TOUTES_LES_TEMPERATURES = 'SELECT * FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 day\') AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}


exports.listerTemperatureSemaineMarina = async function(marina) {
	const SELECT_TOUTES_LES_TEMPERATURES = 'SELECT * FROM temperature where date >= DATE(NOW() + INTERVAL \'-7 day\') AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}


exports.listerTemperatureMoisMarina = async function(marina) {
	const SELECT_TOUTES_LES_TEMPERATURES = 'SELECT * FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 month\') AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}


exports.listerTemperatureAnneeMarina = async function(marina) {
	const SELECT_TOUTES_LES_TEMPERATURES = 'SELECT * FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 year\')  AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_TEMPERATURES);
}



*/

