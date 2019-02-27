var DonneeDAO = function () {

    this.listerHumidites = function lister(callback) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "humidites";

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
    this.listerPression = function lister(callback) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "pression";

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
    this.listerTemperature = function lister(callback) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "temperatures";

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
    this.listerMarina = function lister(callback) {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "marina";

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                callback(this.responseText)
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

};