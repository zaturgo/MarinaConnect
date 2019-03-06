var PressionDAO = function () {

    //Pression

    this.listerPressionAnnee = function lister(callback, id) {
        console.log("Envoi requete recuperation pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "pression/annee";

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
    this.listerPressionMois = function lister(callback, id) {
        console.log("Envoi requete recuperation pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "pression/mois";

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

    this.listerPressionSemaine = function lister(callback, id) {
        console.log("Envoi requete recuperation pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "pression/semaine";

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

    this.listerPressionJours = function lister(callback, id) {
        console.log("Envoi requete recuperation pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "pression/jours";

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