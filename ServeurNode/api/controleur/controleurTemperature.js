var temperatureDAO = require('../donnee/TemperatureDAO');

/**
 * Récupérer toutes les temperatures
 * @param {object} requete
 * @param {object} reponse
 * @returns {Promise<*|void>}
 */ 
exports.listerTemperature = async function(requete, reponse) {
    try {
        const { rows : temperature } = await temperatureDAO.listerTemperature();
        return reponse.status(200).send({ temperature });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}
   
exports.listerTemperatureJour = async function(requete, reponse) {
    try {
        const { rows : temperature } = await temperatureDAO.listerTemperatureJour();
        return reponse.status(200).send({ temperature });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.listerTemperatureMois = async function(requete, reponse) {
    try {
        const { rows : temperature } = await temperatureDAO.listerTemperatureMois();
        return reponse.status(200).send({ temperature });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.listerTemperatureAnnee = async function(requete, reponse) {
    try {
        const { rows : temperature } = await temperatureDAO.listerTemperatureAnnee();
        return reponse.status(200).send({ temperature });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

