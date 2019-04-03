var HumiditesDAO = function () {

    this.listerHumiditesAnnee = function lister(callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "humidites/annee/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
    this.listerHumiditesMois = function lister(callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "humidites/mois/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
    this.listerHumiditesSemaine = function lister(callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "humidites/semaine/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
    this.listerHumiditesJours = function lister(callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "humidites/jour/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };


    this.listerHumiditesAnneeUtil = function (callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_HUMIDITES + "/" + STRING_ANNEE + "/" + id;
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).humidites;
                if (donnees !== undefined) {
                    for (let i = 0; i < donnees.length; i++) {
                        donneesTab.push({date: new Date(donnees[i].date), valeur: donnees[i].valeur})
                    }
                }
                callback(donneesTab);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };


    this.listerHumiditesMoisUtil = function (callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_HUMIDITES + "/" + STRING_MOIS + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).humidites;
                if (donnees !== undefined) {
                for (let i = 0; i < donnees.length; i++) {
                    donneesTab.push({date: new Date(donnees[i].date), valeur: donnees[i].valeur})
                }}

                callback(donneesTab);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    this.listerHumiditesSemaineUtil = function (callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_HUMIDITES + "/" + STRING_SEMAINE + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).humidites;
                if (donnees !== undefined) {
                    for (let i = 0; i < donnees.length; i++) {
                        donneesTab.push({date: new Date(donnees[i].date), valeur: donnees[i].valeur})
                    }
                }

                callback(donneesTab);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    this.listerHumiditesJoursUtil = function (callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_HUMIDITES + "/" + STRING_JOURS + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).humidites;
                if (donnees !== undefined) {
                    for (let i = 0; i < donnees.length; i++) {
                        donneesTab.push({date: new Date(donnees[i].date), valeur: donnees[i].valeur})
                    }
                }
                callback(donneesTab);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    this.getHumiditesLive = function (callback, id) {
        console.log("Envoi requete recuperation de l'humiditées live en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_HUMIDITES + "/" + STRING_LIVE + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneeLive = JSON.parse(this.responseText).humidites[0];
                callback(donneeLive);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
};