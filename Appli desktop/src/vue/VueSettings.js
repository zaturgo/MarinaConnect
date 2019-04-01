var VueSettings = (function () {
    var pageSettings = document.getElementById("page-settings").innerHTML;

    return function () {
        this.afficher = function(){
            document.getElementById("container").innerHTML = pageSettings;
        }
    }
})();