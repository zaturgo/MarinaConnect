(function () {
    this.listePays = [];

    window.API_URL = "http://54.39.145.59:8080";

    var initialiser = function () {
        this.categorieDAO = new CategorieDAO();
        this.produitDAO = new ProduitDAO();
        this.paysDAO = new PaysDAO();
        this.moisDAO = new MoisDAO();
        this.statsDAO = new StatsDAO();
        this.paysDAO.lister(callBackUtilisateur);

    }
    var callBackUtilisateur = function (reponse) {
        this.listePays = reponse;
        window.addEventListener("hashchange", naviguer);
        naviguer();

    }
    var callbackStats = function (reponse){
        this.listeStats = reponse;
        this.moisDAO.lister(callBackMois, this.pays);


    }

    var callBackCategorie = function (reponse) {
        this.listeCategorie = reponse;
        this.statsDAO.lister(callbackStats, this.pays);
        // this.produitDAO.lister(callBackProduit, this.pays);
    }
    var callBackProduit = function (reponse) {
        this.listeProduit = reponse;
        var global = new VuePrincipale();
        if (this.pays === "") {
            global.afficher(this.listeCategorie, this.listeMois, this.listeProduit, "globales", this.listePays, this.listeStats);
        } else {
            global.afficher(this.listeCategorie, this.listeMois, this.listeProduit, this.pays, this.listePays, this.listeStats);
        }
        // this.moisDAO.lister(callBackMois, this.pays);
    }
    var callBackMois = function (reponse) {
        this.listeMois = reponse;
        this.produitDAO.lister(callBackProduit, this.pays);

    }

    var listerPays = function () {
        this.categorieDAO.lister(callBackCategorie, this.pays);
    }

    var naviguer = function () {
        var hash = window.location.hash;
        var regex = /%20/gi;

        console.log(hash);
        if (!hash) {
            this.pays = "";
            listerPays();
        } else {
            var string = hash.replace(regex, ' ');
            console.log(string);
            for (i = 0; i < listePays.length; i++) {
                if (string === "#"+listePays[i].region) {
                    this.pays = listePays[i].region;
                    listerPays();
                }
            }
        }
    }
    initialiser();
})();
