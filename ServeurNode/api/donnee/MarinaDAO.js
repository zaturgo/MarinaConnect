var baseDeDonnees = require('./BaseDeDonnees').getInstance();

exports.listerMarina = async function() {
    const SELECT_TOUTES_LES_MARINA = 'select * from marina';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_MARINA);
}

