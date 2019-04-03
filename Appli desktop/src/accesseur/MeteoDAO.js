var MeteoDAO = function () {

    //MAREES

    this.listerMeteos = function lister(callback, lat, lng) {
        console.log("Envoi requete recuperation meteos en HTTP en get a : " + API_METEO);

        var url = API_METEO + "appid=eb3c0c25824adc50c4db73393ba57365\n" +
            "&lat="+lat+"&lon="+lng+"&lang=fr";

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).weather;
                var description = JSON.parse(donnees).description;
                var icon = JSON.parse(donnees).icon;

                callback(description, icon);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

};