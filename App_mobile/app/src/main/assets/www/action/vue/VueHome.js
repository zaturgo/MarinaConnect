var VueHome = (function () {
    var mainNavbar = document.getElementById("main-navbar").innerHTML;
    var pageHome = document.getElementById("page-home").innerHTML;

    return function () {
        this.afficher = function(){
            document.getElementById("header").innerHTML = mainNavbar;
            document.getElementById("container").innerHTML = pageHome;
        }
    }
})();