(function () {
    this.listeHumidite = [];
    this.listePression = [];
    this.listeTemperature = [];
    window.API_URL = "http://54.39.145.59:8085";

    var initialiser = function () {
        this.humiditeDAO = new HumiditeDAO();
        this.pressionDAO = new PressionDAO();
        this.temperatureDAO = new TemperatureDAO();
        window.addEventListener("hashchange", naviguer);
        naviguer();

    }
    var naviguer = function () {
        var hash = window.location.hash;
        var regex = /%20/gi;
        var string = hash.replace(regex, ' ');
        this.date = string.substr(1);
        if (string === ''){
            this.date="annee"
        }
        this.humiditeDAO.lister(callBackHumidite, date);

    }

    var callBackHumidite = function (reponse) {
        this.listeHumidite = reponse;
        this.pressionDAO.lister(callBackPression, date);
    }

    var callBackPression = function (reponse) {
        this.listePression = reponse;
        this.temperatureDAO.lister(callBackTemperature, date);


    }
    var callBackTemperature = function (reponse){
        this.listeTemperature = reponse;
        var global = new VuePrincipale();
        global.afficher(this.listeHumidite, this.listeTemperature, this.listePression, this.date);
    }



    initialiser();
})();
