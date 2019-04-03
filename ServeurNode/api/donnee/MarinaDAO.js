var baseDeDonnees = require('./BaseDeDonnees').getInstance();

exports.listerMarina = async function() {
    const SELECT_TOUTES_LES_MARINA = 'select * from marina';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_MARINA);
}

exports.live = async function(req) {
    var temperature = await baseDeDonnees.query(SELECT_DERNIERE_TEMPERATURE);
    var pression = await baseDeDonnees.query(SELECT_DERNIERE_TEMPERATURE);
	return {temperature,pression};
}

