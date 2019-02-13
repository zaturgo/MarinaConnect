var DonneeDAO = (function () {

    this.lister = function lister (callback) {
        var url = API_URL + "/AZERTY";

        var request = new XMLHttpRequest();
        request.withCredentials = true;

        request.addEventListener("readystatechange", function () {
            if (request.readyState == 4 && request.status == 200) {
                callback(request.responseText);
            }
        });

        request.open("GET", url);
        request.setRequestHeader("authentification", "paul");
        request.setRequestHeader("Content-Type", "application/json");

        request.send(null);
    };
})();