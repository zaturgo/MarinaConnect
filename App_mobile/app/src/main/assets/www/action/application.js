(function () {
    var instance = this;

    this.initialiser = function () {
        // DAO init

        window.addEventListener("hashchange", naviguer);

        this.naviguer();
    };

    this.naviguer = function () {
        var hash = window.location.hash;

        if (!hash) {
            var vueHome = new VueHome();
            vueHome.afficher();

        }else if (hash.match(/^#livre\/([0-9]+)/)) {


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


    initialiser();
})();