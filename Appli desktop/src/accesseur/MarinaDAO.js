var MarinaDAO = function () {

    //MARINA

    this.listerMarina = function lister(callback) {
        var url = API_MOBILE_URL + STRING_MARINA;

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