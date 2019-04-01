var HumiditesDAO = function () {

    //HUMIDITES

    this.listerHumiditesAnnee = function lister(callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "humidites/annee";

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
    this.listerHumiditesMois = function lister(callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "humidites/mois";

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
    this.listerHumiditesSemaine = function lister(callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "humidites/semaine";

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
    this.listerHumiditesJours = function lister(callback, id) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "humidites/jour";

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
};