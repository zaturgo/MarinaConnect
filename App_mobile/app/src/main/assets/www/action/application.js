(function () {

    /* var mainNavbar = document.getElementById("main-navbar").innerHTML;
     document.getElementById("body").innerHTML = mainNavbar;*/

    //Loader();
    var instance = this;
    var idMarina;

    var donneeHumidite;
    var donneeTemp;
    var donneePression;
    var donneeMaree;
    var latReelle;
    var lngReelle;
    var marinas = [];

    this.initialiser = function () {
        this.marinaDAO = new MarinaDAO();
        this.humiditesDAO = new HumiditesDAO();
        this.pressionDAO = new PressionDAO();
        this.temperatureDAO = new TemperatureDAO();

        idMarina = 0;
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

            marinaDAO.listerMarina(callbackMarina);

        } else if (hash.match(/^#settings/)) {

        } else if (hash.match(/^#contact/)) {
            var vueContact = new VueContact();
            vueContact.afficher();
        } else if (hash.match(/^#marina\/([0-9]+)/)) {
            var navigation = hash.match(/^#marina\/([0-9]+)/);
            idMarina = navigation[1];

            humiditesDAO.listerHumiditesAnnee(callbackHumidite, idMarina);
        }
    };

    var callbackHumidite = function callbackHumidite(result) {
        donneeHumidite = JSON.parse(result).humidites;
        temperatureDAO.listerTemperatureAnnee(callbackTemperature, idMarina);
    };

    var callbackTemperature = function (result) {
        donneeTemp = JSON.parse(result).temperature;
        var l1 = chercherLatParId(idMarina);
        var l2 = chercherLngParId(idMarina);
        mareeDAO.listerMarees(callBackMaree, l1,l2 );
    };

    var callBackMaree = function (result, lat, lng) {
        donneeMaree = result;
        latReelle = lat;
        lngReelle = lng;
        pressionDAO.listerPressionAnnee(callbackPression, idMarina);
    };

    var callbackPression = function (result) {
        donneePression = JSON.parse(result).pression;

        var vueDetail = new VueDetail();
        vueDetail.afficher(donneeHumidite, donneeTemp, donneePression, donneeMaree,latReelle,lngReelle, idMarina);
    };

    var callbackMarina = function (result) {
        var marinas = JSON.parse(result).marina;
        console.log("Marina : " + marinas);

        var vueMap = new VueMap();
        vueMap.afficher(marinas);
    };

    var chercherLatParId = function(id){
        for (let i = 0; i < marinas.length; i++) {
            if (marinas[i].id == id){
                return marinas[i].latitude;
            }
        }
        return null;

    }

    var chercherLngParId = function(id){
        for (let i = 0; i < marinas.length; i++) {
            if (marinas[i].id == id){
                return marinas[i].longitude;
            }
        }
        return null;
    }

    var naviguerAccueil = function () {
        window.location.hash = "";
    };

})();