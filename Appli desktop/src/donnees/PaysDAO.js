var PaysDAO = function () {

    var listePays = null;

    this.lister =async function (callBackPays) {
        let url = API_URL+'/vente/pays';
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
                    listePays= [];
                    for (var i = 0; i < json.pays.length; i++) {
                        var ligne = json.pays[i];
                        listePays.push(new Pays(ligne.region));
                    }
                    callBackPays(listePays, null);
                }
            )
            .catch(error => {
                console.error('Error:', error);
                new VueErreur('Erreur de connexion au service web', ' Vérifiez que être connectée à internet');
            });

    }

    this.getListePays = function(){
            return listePays;
        }


};