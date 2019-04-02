var humiditeDAO = require('../donnee/HumiditeDAO');

/**
 * Récupérer toutes les humidités
 * @param {object} requete
 * @param {object} reponse
 * @returns {Promise<*|void>}
 */ 
exports.listerHumite = async function(requete, reponse) {
    try {
        const { rows : humidites } = await humiditeDAO.listerHumidite(requete);
        return reponse.status(200).send({ humidites });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.listerHumiteJour = async function(requete, reponse) {
    try {
        const { rows : humidites } = await humiditeDAO.listerHumiditeJour(requete);
        return reponse.status(200).send({ humidites });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

  
exports.listerHumiteSemaine = async function(requete, reponse) {
    try {
        const { rows : humidites } = await humiditeDAO.listerHumiditeSemaine(requete);
        return reponse.status(200).send({ humidites });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.listerHumiteMois = async function(requete, reponse) {
    try {
        const { rows : humidites } = await humiditeDAO.listerHumiditeMois(requete);
        return reponse.status(200).send({ humidites });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.listerHumiteAnnee = async function(requete, reponse) {
    try {
        const { rows : humidites } = await humiditeDAO.listerHumiditeAnnee(requete);
        return reponse.status(200).send({ humidites });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.ajouterHumidite = async function(requete, reponse) {
    try {
        await humiditeDAO.ajouterHumidite(requete);
        return reponse.status(200).send();
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.liveHumidite = async function(requete, reponse) {
	try {
		const { rows : humidites } = await humiditeDAO.liveHumidite(requete);
		return reponse.status(200).send({humidites});
	} catch(error) {
		console.log(error);
		return reponse.status(400).send(error);
	}
}
