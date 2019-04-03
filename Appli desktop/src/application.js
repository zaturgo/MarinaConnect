(function () {

    /* var mainNavbar = document.getElementById("main-navbar").innerHTML;
     document.getElementById("body").innerHTML = mainNavbar;*/

    //Loader();
    var idMarina;
    var marineActive;
    var donneeHumidite;
    var donneeTemp;
    var donneePression;

    var donneeHumiditeLive;
    var donneeTempLive;
    var donneePressionLive;
    var donneeMareeLive;
    var donneeMeteo;
    var image;

    var donneeMaree;
    var latReelle;
    var lngReelle;
    var listeMarinas = [];

    this.initialiser = function () {
        this.marinaDAO = new MarinaDAO();
        this.humiditesDAO = new HumiditesDAO();
        this.pressionDAO = new PressionDAO();
        this.temperatureDAO = new TemperatureDAO();
        this.meteoDAO = new MeteoDAO();
        this.mareeDAO = new MareeDAO();

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

            humiditesDAO.listerHumiditesJours(callbackHumidite, idMarina);
        }
    };

    var callbackHumidite = function callbackHumidite(result) {
        donneeHumidite = JSON.parse(result).humidites;
        temperatureDAO.listerTemperatureJours(callbackTemperature, idMarina);
    };

    var callbackTemperature = function (result) {
        donneeTemp = JSON.parse(result).temperature;
        marineActive = chercherMarina(listeMarinas, idMarina);
        var lat = marineActive.latitude;
        var lng = marineActive.longitude;
        mareeDAO.listerMarees(callBackMaree, lat, lng);
    };

    var callBackMaree = function (result, lat, lng) {
        donneeMaree = result;
        latReelle = lat;
        lngReelle = lng;
        pressionDAO.listerPressionJours(callbackPression, idMarina);
    };

    var callbackPression = function (result) {

        donneePression = JSON.parse(result).pression;
        humiditesDAO.getHumiditesLive(callbackLiveHumidite, idMarina);
    };

    var callbackLiveHumidite = function (result) {
        donneeHumiditeLive = result;

        pressionDAO.getPressionLive(callbackLivePression, idMarina);
    };

    var callbackLivePression = function (result) {
        donneePressionLive = result;

        mareeDAO.niveauActuel(callbackLiveMaree, marineActive.latitude, marineActive.longitude);
    };

    var callbackLiveMaree = function (result) {
        donneeMareeLive = result;
        meteoDAO.listerMeteos(callbackMeteo, marineActive.latitude, marineActive.longitude);
    };
    var callbackMeteo = function (result, img) {
        donneeMeteo = result;
        image = img;
        temperatureDAO.getTemperatureLive(callbackLiveTemperature, idMarina);
    };

    var callbackLiveTemperature = function (result) {
        donneeTempLive = result;
        var vueDetail = new VueDetail();
        vueDetail.afficher(donneeHumidite, donneeTemp, donneePression, donneeMaree, marineActive, latReelle, lngReelle, donneeTempLive, donneeHumiditeLive, donneePressionLive, donneeMareeLive, donneeMeteo,image);
    };


    var callbackMarina = function (result) {
        listeMarinas = JSON.parse(result).marina;
        var vueMap = new VueMap();
        vueMap.afficher(listeMarinas);
    };

    var chercherMarina = function (liste, id) {
        for (let i = 0; i < liste.length; i++) {
            if (liste[i].id == id) {
                return liste[i];
            }
        }
        return null;
    };

    var naviguerAccueil = function () {
        window.location.hash = "";
    };

})();