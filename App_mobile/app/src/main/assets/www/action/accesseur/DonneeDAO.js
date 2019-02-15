var DonneeDAO = function () {

    this.listerHumidites = function lister() {
        console.log("Envoi requete recuperation humiditées en HTTP en get a : " + API_MOBILE_URL);

        var url = API_MOBILE_URL + "humidites";

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

};