var TemperatureDAO = function () {

    //TEMPERATURE

    this.listerTemperatureAnnee = function lister(callback) {
        console.log("Envoi requete recuperation temperature en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_ANNEE;

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                callback(this.responseText)
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    this.listerTemperatureMois = function lister(callback) {
        console.log("Envoi requete recuperation temperature en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_MOIS;

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                callback(this.responseText);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    this.listerTemperatureSemaine = function lister(callback) {
        console.log("Envoi requete recuperation temperature en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_SEMAINE;

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                callback(this.responseText);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    this.listerTemperatureJours = function lister(callback) {
        console.log("Envoi requete recuperation temperature en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_JOURS;

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                callback(this.responseText);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

};