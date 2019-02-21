var PressionDAO = function () {

    this.lister =async function (callBackPression, date) {
        let url;
        console.log(date);
        url = API_URL+'/pressions/'+date;

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
                    listePression= [];
                    for (var i = 0; i < json.pression.length; i++) {
                        var ligne = json.pression[i];
                        listePression.push(new Pression(ligne.id,ligne.valeur ,ligne.date ,ligne.idmarina));
                    }

                    callBackPression(listePression, null);
                }
            )
            .catch(error => {
                console.error('Error:', error);
                new VueErreur('Erreur de connexion au service web', ' Vérifiez que être connectée à internet');
            });

    }
};