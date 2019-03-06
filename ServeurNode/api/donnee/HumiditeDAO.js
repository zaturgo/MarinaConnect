var baseDeDonnees = require('./BaseDeDonnees').getInstance();

export const NOM_TABLE = "humidite";
export const NOM_CHAMP_ID = "id";
export const NOM_CHAMP_VALEUR = "valeur";
export const NOM_CHAMP_DATE = "date";

exports.listerHumidite = async function(requete) {
    const SELECT_TOUTES_LES_HUMIDITES = 'select * from humidite';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}


exports.listerHumiditeJour = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM humidite where date >= DATE(NOW()) and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		console.log(SELECT_TOUTES_LES_HUMIDITES);
		return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}else{
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM humidite where date >= DATE(NOW()) GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}
}


exports.listerHumiditeSemaine = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-7 day\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		console.log(SELECT_TOUTES_LES_HUMIDITES);
		return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}else{
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-7 day\') GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}
}


exports.listerHumiditeMois = async function(requete) { 
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 month\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		console.log(SELECT_TOUTES_LES_HUMIDITES);
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}else{
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 month\') GROUP BY date_trunc(\'day\', date) ORDER BY date;';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}

}


exports.listerHumiditeAnnee = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 year\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'month\', date) ORDER BY date;';
		console.log(SELECT_TOUTES_LES_HUMIDITES);
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}else{
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 year\') GROUP BY date_trunc(\'month\', date) ORDER BY date;';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}
}











exports.listerHumiditeMarina = async function(marina) {
	const SELECT_TOUTES_LES_HUMIDITES = 'select * from humidite where idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}


exports.listerHumiditeJourMarina = async function(marina) {
	const SELECT_TOUTES_LES_HUMIDITES = 'SELECT * FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 day\') AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}


exports.listerHumiditeSemaineMarina = async function(marina) {
	const SELECT_TOUTES_LES_HUMIDITES = 'SELECT * FROM humidite where date >= DATE(NOW() + INTERVAL \'-7 day\') AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}


exports.listerHumiditeMoisMarina = async function(marina) {
	const SELECT_TOUTES_LES_HUMIDITES = 'SELECT * FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 month\') AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}


exports.listerHumiditeAnneeMarina = async function(marina) {
	const SELECT_TOUTES_LES_HUMIDITES = 'SELECT * FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 year\')  AND idmarina='+marina;
	return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}

