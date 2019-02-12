var VueErreur = (function () {

    return function (pTitre, pMessage) {

        let boostrapClass="alert alert-danger";

        let page=`<div class='`+boostrapClass+`'>
                  <strong>`+pTitre+`</strong> 
                  `+pMessage+`
                </div>`;
        document.getElementById("corps").innerHTML = page;

    }
})();