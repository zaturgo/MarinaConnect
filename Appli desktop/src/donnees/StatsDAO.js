var StatsDAO = function () {


    this.lister =async function (callBackStats, pays) {
        let url;
        if (pays === ""){
            url = API_URL+'/statistique/';
        }else{
            url = API_URL+'/statistique/'+pays;
        }
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
                    listeStats= [];
                    for (var i = 0; i < json.stats.length; i++) {
                        var ligne = json.stats[i];
                        listeStats.push(new Stats(ligne.benefice, ligne.nb_categorie, ligne.nb_produit));
                    }

                    callBackStats(listeStats, null);
                }
            )
            .catch(error => {
                console.error('Error:', error);
                new VueErreur('Erreur de connexion au service web', ' Vérifiez que être connectée à internet');
            });

    }


};