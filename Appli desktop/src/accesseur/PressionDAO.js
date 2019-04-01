var PressionDAO = function () {

    //Pression

    this.listerPressionAnnee = function lister(callback, id) {
        console.log("Envoi requete recuperation pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_PRESSION + "/" + STRING_ANNEE;

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
    this.listerPressionMois = function lister(callback) {
        console.log("Envoi requete recuperation pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_PRESSION + "/" + STRING_MOIS;

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

    this.listerPressionSemaine = function lister(callback) {
        console.log("Envoi requete recuperation pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_PRESSION + "/" + STRING_SEMAINE;

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

    this.listerPressionJours = function lister(callback) {
        console.log("Envoi requete recuperation pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_PRESSION + "/" + STRING_JOURS;

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