var TemperatureDAO = function () {

    this.lister =async function (callBackTemperature, date) {
        let url;
        console.log(date);
        url = API_URL+'/temperature/'+date;

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
                    listeTemperature= [];
                    for (var i = 0; i < json.stats.length; i++) {
                        var ligne = json.stats[i];
                        listeTemperature.push(new Temperature(ligne.id,ligne.valeur ,ligne.date ,ligne.idmarina));
                    }

                    callBackTemperature(listeTemperature, null);
                }
            )
            .catch(error => {
                console.error('Error:', error);
                new VueErreur('Erreur de connexion au service web', ' Vérifiez que être connectée à internet');
            });

    }
};