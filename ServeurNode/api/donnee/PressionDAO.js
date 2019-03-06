var baseDeDonnees = require('./BaseDeDonnees').getInstance();

export const NOM_TABLE = "pression";
export const NOM_CHAMP_ID = "id";
export const NOM_CHAMP_VALEUR = "valeur";
export const NOM_CHAMP_DATE = "date";

exports.listerPression = async function() {
	const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM pression GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
    return await baseDeDonnees.query(SELECT_PRESSIONS);
}



exports.listerPressionJour = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM pression where date >= DATE(NOW()) and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}else{
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM pression where date >= DATE(NOW()) GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}
}



exports.listerPressionSemaine = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-7 day\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}else{
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-7 day\') GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}
}



exports.listerPressionMois = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-1 month\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}else{
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-1 month\') GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}
}



exports.listerPressionAnnee = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-1 year\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'month\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}else{
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-1 year\') GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}
}

/*exports.listerPressionJour = async function() {
 * const SELECT_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-1 day\');';
 * return await baseDeDonnees.query(SELECT_PRESSIONS);
 } 


exports.listerPressionSemaine = async function() {
    const SELECT_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-7 day\');';
    return await baseDeDonnees.query(SELECT_PRESSIONS);
}


exports.listerPressionMois = async function() {
    const SELECT_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-1 month\');';
    return await baseDeDonnees.query(SELECT_PRESSIONS);
}


exports.listerPressionAnnee = async function() {
    const SELECT_PRESSIONS = 'SELECT * FROM pression where date >= DATE(NOW() + INTERVAL \'-1 year\');';
    return await baseDeDonnees.query(SELECT_PRESSIONS);
}




*/

