(function () {
    Loader();
    var instance = this;
    this.initialiser = function () {
        this.donneeDAO = new DonneeDAO();
        // DAO init

        window.addEventListener("hashchange", naviguer);

        this.naviguer();
    };

    this.naviguer = function () {
        Loader();
        var hash = window.location.hash;

        if (!hash) {
            var vueHome = new VueHome();
            vueHome.afficher();

        } else if (hash.match(/^#marinas/)) {
            Loader();
            var vueMap = new VueMap();
            vueMap.afficher();

        } else if (hash.match(/^#settings/)) {

        } else if (hash.match(/^#contact/)) {

        } else if (hash.match(/^#marina\/([0-9]+)/)) {
            var idMarina = 1;
            //appelle bdd pour info de la marina

            donneeDAO.listerHumidites();
            var vueDetail = new VueDetail();
            vueDetail.afficher();

        }
    };

    var actionEnregistrerLivre = function (livre) {
        console.log(livre);
        this.livreDAO.ajouterLivre(livre);
        naviguerAccueil();
    };

    var actionModifierLivre = function (livre) {
        console.log(livre);
        this.livreDAO.modifierLivre(livre);
        naviguerAccueil();
    };

    var naviguerAccueil = function () {
        window.location.hash = "";
    };

    //initialiser();

})();