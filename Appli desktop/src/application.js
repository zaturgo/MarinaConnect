(function () {
    this.listeHumidite = [];
    this.listePression = [];
    this.listeTemperature = [];
    this.date = "annee";

    window.API_URL = "http://54.39.145.59:8085";

    var initialiser = function () {
        this.humiditeDAO = new HumiditeDAO();
        this.pressionDAO = new PressionDAO();
        this.temperatureDAO = new TemperatureDAO();
        this.humiditeDAO.lister(callBackHumidite);

    }

    var callBackHumidite = function (reponse) {
        this.listeHumidite = reponse;
        this.pressionDAO.lister(callBackPression);
    }

    var callBackPression = function (reponse) {
        this.listePression = reponse;
        this.temperatureDAO.lister(callBackTemperature);


    }
    var callBackTemperature = function (reponse){
        this.listeTemperature = reponse;
        window.addEventListener("hashchange", naviguer);
        naviguer();


    }


    var naviguer = function () {
        var global = new VuePrincipale();
            global.afficher(this.listeHumidite, this.listeTemperature, this.listePression, this.date);

    }
    initialiser();
})();
