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
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-6 day\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}else{
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-6 day\') GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}
}


exports.listerTemperatureMois = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 month\'+ INTERVAL \'1 day\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}else{
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 month\'+ INTERVAL \'1 day\') GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}
}


exports.listerTemperatureAnnee = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 year\' + INTERVAL \'1 month\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'month\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}else{
		const SELECT_TEMPERATURES = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM temperature where date >= DATE(NOW() + INTERVAL \'-1 year\' + INTERVAL \'1 month\') GROUP BY date_trunc(\'month\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_TEMPERATURES);
	}
}



exports.ajouterTemperature = async function(requete) {
	if (typeof requete.body["valeur"] !== 'undefined' || typeof requete.body["marina"] !== 'undefined'){
		const INSERT_TEMPERATURE = 'INSERT into temperature(valeur,date,idmarina) VALUES ('+requete.body["valeur"]+',NOW(),'+requete.body["marina"]+');';
		return await baseDeDonnees.query(INSERT_TEMPERATURE);
	}else{
		console.log("error"+JSON.stringify(requete.body)); 
		return "error";
	}
}

exports.liveTemperature = async function(req) {
	if (typeof req.params[0] !== 'undefined'){
		const SELECT_DERNIERE_TEMPERATURE = 'SELECT * FROM temperature where idmarina = '+req.params[0]+' ORDER BY id DESC LIMIT 1';
		return await baseDeDonnees.query(SELECT_DERNIERE_TEMPERATURE)
	}else{
		console.log("error"+JSON.stringify(requete.body)); 
		return "error";
	}
}


