var VueHome = (function () {
    var mainNavbar = document.getElementById("main-navbar").innerHTML;
    var pageHome = document.getElementById("page-home").innerHTML;

    return function () {
        this.afficher = function(){
            document.getElementById("header").innerHTML = mainNavbar;
            document.getElementById("container").innerHTML = pageHome;
            if (!localStorage.getItem("zoom")) {
                localStorage.setItem("zoom", "france")
            }
            if (!localStorage.getItem("alert-temperature-max")) {
                localStorage.setItem("alert-temperature-max", 30)
            }
            if (!localStorage.getItem("alert-temperature-min")) {
                localStorage.setItem("alert-temperature-min", 0)
            }
            if (!localStorage.getItem("alert-pression")) {
                localStorage.setItem("alert-pression", 950)
            }
            if (!localStorage.getItem("alert-humidite-max")) {
                localStorage.setItem("alert-humidite-max", 90)
            }
            if (!localStorage.getItem("alert-humidite-min")) {
                localStorage.setItem("alert-humidite-min", 20)
            }
        }
    }
})();