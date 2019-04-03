var MareeDAO = function () {

    //MAREES

    this.listerMarees = function lister(callback, lat, lng) {

        var url = API_MAREE + "key=c04e3386-a5d8-4f9e-82b9-0fb5a9ed9243\n" +
            "&lat="+lat+"&lon="+lng+"&extremes";

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donneesTab = [];
                var donnees = JSON.parse(this.responseText).extremes;
                var lat = JSON.parse(this.responseText).responseLat;
                var lng = JSON.parse(this.responseText).responseLon;
                if (donnees !== undefined) {
                    for (let i = 0; i < donnees.length; i++) {
                        donneesTab.push({x: new Date(donnees[i].date), y: donnees[i].height})
                    }
                }
                callback(donneesTab, lat, lng);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    this.niveauActuel = function lister(callback, lat, lng) {

        var url = API_MAREE + "key=c04e3386-a5d8-4f9e-82b9-0fb5a9ed9243" +
            "&lat="+lat+"&lon="+lng+"&heights&start="+new Date().getTime() / 1000+"&length=1";

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var donnees = JSON.parse(this.responseText).heights;
                var height = donnees[0].height;
                callback(height, lat, lng);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

};