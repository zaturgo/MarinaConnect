var marinaDAO = require('../donnee/MarinaDAO.js');

/**
 * Récupérer toutes les temperatures
 * @param {object} requete
 * @param {object} reponse
 * @returns {Promise<*|void>}
 */ 
exports.listerMarina = async function(requete, reponse) {
    try {
        const { rows : marina } = await marinaDAO.listerMarina();
        return reponse.status(200).send({ marina });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}
 
exports.live = async function(requete, reponse) {
    try {
        const { rows : valeurs } = await marinaDAO.live(requete);
        return reponse.status(200).send({ valeurs });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

