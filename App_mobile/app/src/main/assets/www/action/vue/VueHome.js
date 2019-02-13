var VueHome = (function () {
    var pageHome = document.getElementById("page-home").innerHTML;

    return function () {
        this.afficher = function(){

            document.getElementById("container").innerHTML = pageHome;
        }
    }
})();