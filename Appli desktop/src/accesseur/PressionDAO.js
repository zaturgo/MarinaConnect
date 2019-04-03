var PressionDAO = function () {

    this.listerPressionAnnee = function lister(callback, id) {
        console.log("Envoi requete recuperation pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_PRESSION + "/" + STRING_ANNEE+ "/"+ id;

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
                callback(this.responseText);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };


    this.listerPressionAnneeUtil = function (callback, id) {
        console.log("Envoi requete recuperation pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_PRESSION + "/" + STRING_ANNEE + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).pression;

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

    this.listerPressionMoisUtil = function (callback, id) {
        console.log("Envoi requete recuperation Pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_PRESSION + "/" + STRING_MOIS + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).pression;
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

    this.listerPressionSemaineUtil = function (callback, id) {
        console.log("Envoi requete recuperation Pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_PRESSION + "/" + STRING_SEMAINE + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).pression;

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

    this.listerPressionJoursUtil = function (callback, id) {
        console.log("Envoi requete recuperation Pression en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + STRING_PRESSION + "/" + STRING_JOURS + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).pression;

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
};