var VueSite = (function () {
    var pageSite = document.getElementById("page-site").innerHTML;
    var header = document.getElementById("header-site").innerHTML;

    return function () {
        this.afficher = function(){
            document.getElementById("header").innerHTML = header;
            document.getElementById("container").innerHTML = pageSite;
        }
    };
})();