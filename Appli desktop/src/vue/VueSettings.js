var VueSettings = (function () {
    var pageSettings = document.getElementById("page-settings").innerHTML;
    var select;
    var alertTempMin;
    var alertTempMax;
    var alertPression;
    var alertHumiditeMax;
    var alertHumiditeMin;

    return function () {
        this.afficher = function(){
            document.getElementById("container").innerHTML = pageSettings;
            $("#navbarSupportedContent").collapse('hide');

            select = document.getElementById("zoom-select");
            alertHumiditeMin = document.getElementById("alert-humidite-min");
            alertHumiditeMax = document.getElementById("alert-humidite-max");
            alertPression = document.getElementById("alert-pression");
            alertTempMax = document.getElementById("alert-temperature-max");
            alertTempMin = document.getElementById("alert-temperature-min");

            select.addEventListener("change",actualiser);
            alertTempMin.addEventListener("change",actualiser);
            alertTempMax.addEventListener("change",actualiser);
            alertPression.addEventListener("change",actualiser);
            alertHumiditeMin.addEventListener("change",actualiser);
            alertHumiditeMax.addEventListener("change",actualiser);


            select.value = localStorage.getItem("zoom");
            alertTempMin.value = localStorage.getItem("alert-temperature-min");
            alertTempMax.value = localStorage.getItem("alert-temperature-max");
            alertPression.value = localStorage.getItem("alert-pression");
            alertHumiditeMin.value = localStorage.getItem("alert-humidite-min");
            alertHumiditeMax.value = localStorage.getItem("alert-humidite-max");
        };

        var actualiser = function(){
            var valueZoom = select.options[select.selectedIndex].value;
            localStorage.setItem("zoom",valueZoom);
            localStorage.setItem("alert-temperature-min",alertTempMin.value);
            localStorage.setItem("alert-temperature-max",alertTempMax.value);
            localStorage.setItem("alert-pression",alertPression.value);
            localStorage.setItem("alert-humidite-min",alertHumiditeMin.value);
            localStorage.setItem("alert-humidite-max",alertHumiditeMax.value);
        }



    }
})();