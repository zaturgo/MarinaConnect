var HumiditeDAO = function () {

    this.lister =async function (callBackHumidite, date) {
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
                    for (var i = 0; i < json.humidites.length; i++) {
                        var ligne = json.humidites[i];
                        listeHumidite.push(new Humidite(ligne.valeur, ligne.date));
                    }
                    console.log(listeHumidite)
                    callBackHumidite(listeHumidite, null);
                }
            )
            .catch(error => {
                console.error('Error:', error);
                new VueErreur('Erreur de connexion au service web', ' Vérifiez que être connectée à internet');
            });

    }
};