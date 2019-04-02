var baseDeDonnees = require('./BaseDeDonnees').getInstance();

export const NOM_TABLE = "pression";
export const NOM_CHAMP_ID = "id";
export const NOM_CHAMP_VALEUR = "valeur";
export const NOM_CHAMP_DATE = "date";

exports.listerPression = async function() {
	const SELECT_PRESSIONS = 'SELECT valeur, date FROM pression;';
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
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-6 day\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}else{
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-6 day\') GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}
}



exports.listerPressionMois = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-1 month\' + INTERVAL \'1 day\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}else{
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'day\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-1 month\' + INTERVAL \'1 day\') GROUP BY date_trunc(\'day\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}
}



exports.listerPressionAnnee = async function(requete) {
	if (typeof requete.params[0] !== 'undefined'){
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-1 year\' + INTERVAL \'1 month\') and idmarina='+requete.params[0]+' GROUP BY date_trunc(\'month\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}else{
		const SELECT_PRESSIONS = 'SELECT avg(valeur) as valeur, date_trunc(\'month\',date) as date FROM pression where date >= DATE(NOW() + INTERVAL \'-1 year\' + INTERVAL \'1 month\') GROUP BY date_trunc(\'month\', date) ORDER BY date;';
		return await baseDeDonnees.query(SELECT_PRESSIONS);
	}
}

exports.ajouterPression = async function(requete) {
	if (typeof requete.body["valeur"] !== 'undefined' || typeof requete.body["marina"] !== 'undefined'){
		const INSERT_PRESSION = 'INSERT into pression(valeur,date,idmarina) VALUES ('+requete.body["valeur"]+',NOW(),'+requete.body["marina"]+');';
		return await baseDeDonnees.query(INSERT_PRESSION);
	}else{
		console.log("error"+JSON.stringify(requete.body)); 
		return "error";
	}
}

exports.livePression = async function(req) {
	if (typeof req.params[0] !== 'undefined'){
		const SELECT_DERNIERE_PRESSION = 'SELECT * FROM pression where idmarina = '+req.params[0]+' ORDER BY id DESC LIMIT 1';
		return await baseDeDonnees.query(SELECT_DERNIERE_PRESSION)
	}else{
		console.log("error"+JSON.stringify(requete.body)); 
		return "error";
	}
}


