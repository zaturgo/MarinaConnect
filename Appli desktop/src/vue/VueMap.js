var VueMap = (function () {
    var pageMap = document.getElementById("page-map").innerHTML;

    return function () {
        this.afficher = function (marinas) {
            console.log(marinas[0]);
            console.log(marinas[1]);
            console.log("AllO")

            document.getElementById("container").innerHTML = pageMap;

            var map = initMap();
            var i;
            var infowindowCustom;

            for (i = 0; i < marinas.length; i++) {
                console.log("Add marker : " + marinas[i].id);

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(marinas[i].latitude, marinas[i].longitude),
                    map: map,
                    title: marinas[i].nom
                });

                infowindowCustom = new google.maps.InfoWindow();

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        var contentString = '<div id="content">' +
                            '<div id="siteNotice">' +
                            '</div>' +
                            '<h1 id="firstHeading" class="firstHeading">' + marinas[i].nom + '</h1>' +
                            '<div id="bodyContent">' +
                            '<p>Clickez sur le bouton pour accédder au données de la marina de ' + marinas[i].nom + '.</p>' +
                            '<div class="mx-auto text-center"><a href="#marina/' + marinas[i].id + '" class="btn btn-sm btn-primary">' +
                            'Statistiques</a></div>' +
                            '</div>' +
                            '</div>';

                        infowindowCustom.setContent(contentString);
                        infowindowCustom.open(map, marker);
                    }
                })(marker, i));
            }
        }
    }
})();