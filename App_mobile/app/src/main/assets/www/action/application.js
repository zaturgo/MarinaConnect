(function () {
    Loader();
    var instance = this;
    var map;
    this.initialiser = function () {
        this.donneeDAO = new DonneeDAO();

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

            donneeDAO.listerMarina(callbackMarina);

        } else if (hash.match(/^#settings/)) {

        } else if (hash.match(/^#contact/)) {

        } else if (hash.match(/^#marina\/([0-9]+)/)) {
            var id = hash;
            donneeDAO.listerHumidites(callbackHumidite);
        }
    };

    var callbackHumidite = function callbackHumidite(result) {
        var donnees = JSON.parse(result).humidites;
        var vueDetail = new VueDetail();
        vueDetail.afficher(donnees);
    };

    var callbackMarina = function (result) {
        var marinas = JSON.parse(result).marina;
        console.log("Marina : "+marinas);

        var vueMap = new VueMap();
        vueMap.afficher(marinas);
    };

    var naviguerAccueil = function () {
        window.location.hash = "";
    };

    //initialiser();

})();