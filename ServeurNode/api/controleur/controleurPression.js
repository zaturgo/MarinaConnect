var pressionDAO = require('../donnee/PressionDAO');

/**
 * Récupérer toutes les pressions
 * @param {object} requete
 * @param {object} reponse
 * @returns {Promise<*|void>}
 */ 
exports.listerPression = async function(requete, reponse) {
    try {
        const { rows : pression } = await pressionDAO.listerPression();
        return reponse.status(200).send({ pression });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}
   
exports.listerPressionJour = async function(requete, reponse) {
    try {
        const { rows : pression } = await pressionDAO.listerPressionJour();
        return reponse.status(200).send({ pression });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

  
exports.listerPressionSemaine = async function(requete, reponse) {
    try {
        const { rows : pression } = await pressionDAO.listerPressionSemaine();
        return reponse.status(200).send({ pression });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.listerPressionMois = async function(requete, reponse) {
    try {
        const { rows : pression } = await pressionDAO.listerPressionMois();
        return reponse.status(200).send({ pression });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.listerPressionAnnee = async function(requete, reponse) {
    try {
        const { rows : pression } = await pressionDAO.listerPressionAnnee();
        return reponse.status(200).send({ pression });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

