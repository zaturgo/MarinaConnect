var MoisDAO = function () {

    /*this.lister = function () {
        var m1 = new Mois("Janvier", "12", "20", "mug canada");
        var listeMois = [];
        listeMois.push(m1);
        var m2 = new Mois("Février", "15", "34", "verre canada");
        listeMois.push(m2);
        var m3 = new Mois("Mars", "30", "80", "bol canada");
        listeMois.push(m3);
        var m4 = new Mois("Avril", "23", "120", "thermos canada");
        listeMois.push(m4);
        return listeMois;
    }*/
    this.lister =async function (callBackMois, pays) {
        let url;
        if (pays === ""){
            url = API_URL+'/statistique/mois/';
        }else{
            url = API_URL+'/statistique/mois/'+pays;
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
                    listeMois= [];
                    for (var i = 0; i < json.stats.length; i++) {
                        var ligne = json.stats[i];
                        listeMois.push(new Mois(ligne.idMois, ligne.min, ligne.max, ligne.benefice, ligne.moyenne, ligne.nombre_produits));
                    }

                    callBackMois(listeMois, null);
                }
            )
            .catch(error => {
                console.error('Error:', error);
                new VueErreur('Erreur de connexion au service web', ' Vérifiez que être connectée à internet');
            });

    }
};