var CategorieDAO = function () {

   /* this.lister = function () {
        var c1 = new Categorie("mugs", "12", "20", "mug canada");
        var listeCategorie = [];
        listeCategorie.push(c1);
        var c2 = new Categorie("verre", "15", "34", "verre canada");
        listeCategorie.push(c2);
        var c3 = new Categorie("bol", "30", "80", "bol canada");
        listeCategorie.push(c3);
        var c4 = new Categorie("thermos", "23", "120", "thermos canada");
        listeCategorie.push(c4);
        return listeCategorie;
    }*/
    this.lister =async function (callBackCategorie, pays) {
        let url;
        if (pays === ""){
            console.log("global");
            url = API_URL+'/statistique/categorie/';
        }else{
            console.log(pays);
            url = API_URL+'/statistique/categorie/'+pays;
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
                    listeCategories= [];
                    for (var i = 0; i < json.stats.length; i++) {
                        var ligne = json.stats[i];
                        listeCategories.push(new Categorie(ligne.nom,ligne.prix_moyenne_vente_produit ,ligne.prix_min ,ligne.prix_max ,ligne.bénéfice_total ,ligne.nombre_produit_vendus ,ligne.nombre_produit, ligne.nom_meilleur_produit, ligne.nombre_vente_meilleur_produit));
                    }

                    callBackCategorie(listeCategories, null);
                }
            )
            .catch(error => {
                console.error('Error:', error);
                new VueErreur('Erreur de connexion au service web', ' Vérifiez que être connectée à internet');
            });

    }
    };
