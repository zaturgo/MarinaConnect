var VueMap = (function () {
    var pageMap = document.getElementById("page-map").innerHTML;

    return function () {
        this.afficher = function(){

            document.getElementById("container").innerHTML = pageMap;

            initMap();
        }
    }
})();