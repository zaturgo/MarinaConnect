var TemperatureDAO = function () {

    //TEMPERATURE

    this.listerTemperatureAnnee = function lister(callback) {

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_ANNEE;

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText)
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    this.listerTemperatureMois = function lister(callback) {

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_MOIS;

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

    this.listerTemperatureSemaine = function lister(callback) {

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_SEMAINE;

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

    this.listerTemperatureJours = function lister(callback, id) {

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_JOURS+"/"+id;

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


    this.listerTemperatureAnneeUtil = function (callback, id) {

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_ANNEE + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).temperature;

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

    this.listerTemperatureMoisUtil = function (callback, id) {

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_MOIS + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).temperature;
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

    this.listerTemperatureSemaineUtil = function (callback, id) {

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_SEMAINE + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).temperature;
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

    this.listerTemperatureJoursUtil = function (callback, id) {

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_JOURS + "/" + id;
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).temperature;
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

    this.getTemperatureLive = function (callback, id) {

        var url = API_MOBILE_URL + STRING_TEMPERATURE + "/" + STRING_LIVE + "/" + id;

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneeLive = JSON.parse(this.responseText).temperature[0];
                callback(donneeLive);
            }
        });

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

};