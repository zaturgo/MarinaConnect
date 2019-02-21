var HumiditeDAO = function () {

    this.lister =async function (callBackHumidite, pays) {
        let url;
            console.log(date);
            url = API_URL+'/humidites/'+date;

        fetch(url, {
            method: 'GET',
            headers: {
                'authentification': 'paul',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())

            .then(response => {
                    let str = JSON.stringify(response);
                    let json = JSON.parse(str);
                    listeHumidite= [];
                    for (var i = 0; i < json.stats.length; i++) {
                        var ligne = json.stats[i];
                        listeHumidite.push(new Humidite(ligne.id,ligne.valeur ,ligne.date ,ligne.idmarina));
                    }

                    callBackHumidite(listeHumidite, null);
                }
            )
            .catch(error => {
                console.error('Error:', error);
                new VueErreur('Erreur de connexion au service web', ' Vérifiez que être connectée à internet');
            });

    }
};