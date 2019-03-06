var MarinaDAO = function () {

    //MARINA

    this.listerMarina = function lister(callback) {
        var url = API_MOBILE_URL + STRING_MARINA;

        console.log("Envoi requete recuperation MARINAS en HTTP en get a : " + url);

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