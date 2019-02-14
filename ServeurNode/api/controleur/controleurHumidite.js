var humiditeDAO = require('../donnee/HumiditeDAO');

/**
 * Récupérer toutes les humidités
 * @param {object} requete
 * @param {object} reponse
 * @returns {Promise<*|void>}
 */ 
exports.listerHumite = async function(requete, reponse) {
    try {
        const { rows : humidites } = await humiditeDAO.listerHumidite();
        return reponse.status(200).send({ humidites });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}
   
exports.listerHumiteJour = async function(requete, reponse) {
    try {
        const { rows : humidites } = await humiditeDAO.listerHumiditeJour();
        return reponse.status(200).send({ humidites });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.listerHumiteMois = async function(requete, reponse) {
    try {
        const { rows : humidites } = await humiditeDAO.listerHumiditeMois();
        return reponse.status(200).send({ humidites });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.listerHumiteAnnee = async function(requete, reponse) {
    try {
        const { rows : humidites } = await humiditeDAO.listerHumiditeAnnee();
        return reponse.status(200).send({ humidites });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

