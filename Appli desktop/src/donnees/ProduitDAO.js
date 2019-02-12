var ProduitDAO = function () {

    /*this.lister = function () {
        var c1 = new Produit("mugsCanada", "12", "20", "Janvier");
        var listeProduit = [];
        listeProduit.push(c1);
        var c2 = new Produit("verre Canada", "15", "34", "Août");
        listeProduit.push(c2);
        var c3 = new Produit("bol Canada", "30", "80", "Mars");
        listeProduit.push(c3);
        var c4 = new Produit("thermos Canada", "23", "120", "Decembre");
        listeProduit.push(c4);
        return listeProduit;
    }*/
    this.lister =async function (callBackProduit, pays) {
        let url;
        if (pays === ""){
            url = API_URL+'/statistique/produit/';
        }else{
            url = API_URL+'/statistique/produit/'+pays;
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
                    listeProduit= [];
                    for (var i = 0; i < json.stats.length; i++) {
                        var ligne = json.stats[i];
                        listeProduit.push(new Produit(ligne.nom, ligne.nb_vente, ligne.total));
                    }

                    callBackProduit(listeProduit, null);
                }
            )
            .catch(error => {
                console.error('Error:', error);
                new VueErreur('Erreur de connexion au service web', ' Vérifiez que être connectée à internet');
            });

    }
};