var MareeDAO = function () {

    //MAREES

    this.listerMarees = function lister(callback, lat, lng) {
        console.log("Envoi requete recuperation marees en HTTP en get a : " + API_MAREE);

        var url = API_MAREE + "key=c04e3386-a5d8-4f9e-82b9-0fb5a9ed9243\n" +
            "&lat="+lat+"&lon="+lng+"&extremes";

        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });

        xhr.open("GET", url,true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
    
};