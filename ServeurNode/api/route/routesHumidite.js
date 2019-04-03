'use strict';
var controleurHumidite = require('../controleur/controleurHumidite');

module.exports = function(app) {
	
	// humidite Routes
	
	
	app.get('/humidites/jour/' , (req, res) => {
		console.log('Routage humidite : get toutes les humidites jour');
		return controleurHumidite.listerHumiteJour(req, res);
	});
	
	app.get('/humidites/semaine/' , (req, res) => {
		console.log('Routage humidite : get toutes les humidites semaine');
		return controleurHumidite.listerHumiteSemaine(req, res);
	});
	
	app.get('/humidites/mois/' , (req, res) => {
		console.log('Routage humidite : get toutes les humidites mois');
		return controleurHumidite.listerHumiteMois(req, res);
	});
	
	app.get('/humidites/annee/' , (req, res) => {
		console.log('Routage humidite : get toutes les humidites Annee');
		return controleurHumidite.listerHumiteAnnee(req, res);
	});
	
	app.get('/humidites/tout/' , (req, res) => {
		console.log('Routage humidite : get toutes les humidites');
		return controleurHumidite.listerHumite(req, res);
	});
	
	
	
	app.get('/humidites/tout/*' , (req, res) => {
		console.log('Routage humidite : get toutes les humidites avec id');
		return controleurHumidite.listerHumite(req, res);
	});
	
	app.get('/humidites/jour/*' , (req, res) => {
		console.log('Routage humidite : get toutes les humidites jour avec id');
		return controleurHumidite.listerHumiteJour(req, res);
	});
	
	app.get('/humidites/semaine/*' , (req, res) => {
		console.log('Routage humidite : get toutes les humidites semaine avec id');
		return controleurHumidite.listerHumiteSemaine(req, res);
	});
	
	app.get('/humidites/mois/*' , (req, res) => {
		console.log('Routage humidite : get toutes les humidites mois avec id');
		return controleurHumidite.listerHumiteMois(req, res);
	});
	
	app.get('/humidites/annee/*' , (req, res) => {
		console.log('Routage humidite : get toutes les humidites Annee avec id');
		return controleurHumidite.listerHumiteAnnee(req, res);
	});
	
	app.get('/humidites/live/*' , (req, res) => {
		console.log('Routage temperature : get live humidite');
	return controleurHumidite.liveHumidite(req, res);
	});
	
	app.post('/humidites' , (req, res) => {
		console.log('Routage humidite : ajoute humidite : '+req.body["valeur"]+"%");
		return controleurHumidite.ajouterHumidite(req, res);
	});
}
