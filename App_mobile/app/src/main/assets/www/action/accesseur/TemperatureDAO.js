var TemperatureDAO = function () {

    //TEMPERATURE

    this.listerTemperatureAnnee = function lister(callback, id) {
        console.log("Envoi requete recuperation temperature en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "temperature/annee";

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
    this.listerTemperatureMois = function lister(callback, id) {
        console.log("Envoi requete recuperation temperature en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "temperature/mois";

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                callback(this.responseText);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    this.listerTemperatureSemaine = function lister(callback, id) {
        console.log("Envoi requete recuperation temperature en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "temperature/semaine";

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                callback(this.responseText);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    this.listerTemperatureJours = function lister(callback, id) {
        console.log("Envoi requete recuperation temperature en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "temperature/jours";

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                callback(this.responseText);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

};