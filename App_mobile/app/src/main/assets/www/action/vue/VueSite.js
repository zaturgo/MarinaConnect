var VueSite = (function () {
    var pageContact = document.getElementById("page-contact").innerHTML;
    var header = document.getElementById("header-site").innerHTML;

    return function () {
        this.afficher = function(){
            document.getElementById("header").innerHTML = header;
            document.getElementById("container").innerHTML = pageContact;
        }
    };
})();