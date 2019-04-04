var MeteoDAO = function () {

    //MAREES

    this.listerMeteos = function lister(callback, lat, lng) {

        var url = "https://api.openweathermap.org/data/2.5/weather?" + "appid=eb3c0c25824adc50c4db73393ba57365\n" +
            "&lat="+lat+"&lon="+lng+"&lang=fr";

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donnees = JSON.parse(this.responseText).weather[0];
                var description = donnees.description;
                var icon = donnees.icon;

                callback(description, icon);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "text/plain");

        xhr.send(data);
    };

};