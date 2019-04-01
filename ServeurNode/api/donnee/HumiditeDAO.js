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
		return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}else{
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'hour\',date) as date FROM humidite where date >= DATE(NOW()) GROUP BY date_trunc(\'hour\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}
}


exports.listerHumiditeSemaine = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-7 day\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}else{
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-7 day\') GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}
}


exports.listerHumiditeMois = async function(requete) { 
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 month\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'day\', date) ORDER BY date;';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}else{
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 month\') GROUP BY date_trunc(\'day\', date) ORDER BY date;';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}

}


exports.listerHumiditeAnnee = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 year\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'month\', date) ORDER BY date;';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}else{
		const SELECT_TOUTES_LES_HUMIDITES = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM humidite where date >= DATE(NOW() + INTERVAL \'-1 year\') GROUP BY date_trunc(\'month\', date) ORDER BY date;';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
	}
}


exports.ajouterHumidite = async function(requete) {
	if (typeof requete.body["valeur"] !== 'undefined' || typeof requete.body["marina"] !== 'undefined'){
		const INSERT_HUMIDITE = 'INSERT into humidite(valeur,date,idmarina) VALUES ('+requete.body["valeur"]+',NOW(),'+requete.body["marina"]+');';
		return await baseDeDonnees.query(INSERT_HUMIDITE);
	}else{
		console.log("error"+JSON.stringify(requete.body)); 
		return "error";
	}
}


