var VueMap = (function () {
    var pageMap = document.getElementById("page-map").innerHTML;

    return function () {
        this.afficher = function (marinas) {

            document.getElementById("container").innerHTML = pageMap;

            var map = initMap();

            console.log(JSON.stringify(marinas))

            for (let i = 0; i < marinas.length; i++) {
                console.log("Add marker : " + marinas[i].id)

                var contentString = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h1 id="firstHeading" class="firstHeading">'+marinas[i].nom+'</h1>' +
                    '<div id="bodyContent">' +
                    '<p><b>Tabernouche la pinouche</b> wouah</p>' +
                    '<p>Teste lien mon gars : <a href="#marina/'+marinas[i].id+'">' +
                    'Click ici</a></p>' +
                    '</div>' +
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(marinas[i].latitude, marinas[i].longitude),
                    map: map,
                    title: marinas[i].nom
                });
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });
            }
        }
    }
})();