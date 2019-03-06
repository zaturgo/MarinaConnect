var VueContact = (function () {
    var pageContact = document.getElementById("page-contact").innerHTML;

    return function () {
        this.afficher = function(){
            document.getElementById("container").innerHTML = pageContact;
        }
    };
})();