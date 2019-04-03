var VueSettings = (function () {
    var pageSettings = document.getElementById("page-settings").innerHTML;
    var select;

    return function () {
        this.afficher = function(){
            document.getElementById("container").innerHTML = pageSettings;
            $("#navbarSupportedContent").collapse('hide');

            select = document.getElementById("zoom-select");
            select.addEventListener("change",actualiser);

            select.value = localStorage.getItem("zoom");
        };

        var actualiser = function(){
            var valueZoom = select.options[select.selectedIndex].value;
            localStorage.setItem("zoom",valueZoom)
        }



    }
})();