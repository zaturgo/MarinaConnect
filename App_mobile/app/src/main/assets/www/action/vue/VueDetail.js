var VueDetail = (function () {
    var pageDetail = document.getElementById("page-detail").innerHTML;

    this.humiditesDAO = new HumiditesDAO();
    this.pressionDAO = new PressionDAO();
    this.temperatureDAO = new TemperatureDAO();
    this.mareeDAO = new MareeDAO();

    var marinaID;

    var checkBoxTemp = true;
    var checkBoxPression = true;
    var checkBoxHumidite = true;
    var checkBoxMaree = true;
    var periode = 'jours';

    var latReel;
    var lngReel;

    var donneeHumiditeLive;
    var donneeTempLive;
    var donneePressionLive;
    var donneeMareeLive;

    var getDonneeCheckBox = function () {
        checkBoxPression = document.getElementById("checkBoxPression").checked;
        checkBoxTemp = document.getElementById("checkBoxTemp").checked;
        checkBoxHumidite = document.getElementById("checkBoxHumidite").checked;
        checkBoxMaree = document.getElementById("checkBoxMaree").checked;
    };

    var getDonneeSelect = function () {
        var select = document.getElementById("custom-select");
        periode = select.options[select.selectedIndex].value;
    };

    var checkEmpty = function (donnee) {
        if (!donnee) {
            var donneeFictive = JSON.parse("{\n" +
                "            \"valeur\": 1,\n" +
                "            \"date\": \"2018-12-01T05:00:00.000Z\"\n" +
                "        }");
            return donneeFictive;
        } else return donnee;
    };

    var clearGraph = function () {
        $('#graphe-container').empty();
    };

    var actualiserGraph = function () {
        clearGraph();

        getDonneeSelect();
        getDonneeCheckBox();

        console.log("update..");

        var compteur = 0;
        if (checkBoxHumidite) {
            compteur++;
        }
        if (checkBoxTemp) {
            compteur++;
        }
        if (checkBoxPression) {
            compteur++;
        }
        if (checkBoxMaree) {
            compteur++;
        }
        if (compteur > 2) {
            $("#graphe-container").append("<div id='row1' class = 'row'></div><div id='row2' class = 'row'></div>");
            if (checkBoxTemp) {
                $("#row1").append("<div id=\"containerTemp\" class=\"col\">\n" +
                    "                    <canvas id=\"graphTemperature\" ></canvas>\n" +
                    "                </div>")
            }
            if (checkBoxHumidite) {
                $("#row1").append("<div id=\"containerHum\" class=\"col\">\n" +
                    "                    <canvas id=\"graphHumidites\" ></canvas>\n" +
                    "                </div>")
            }
            if (checkBoxPression) {
                $("#row2").append("<div  id=\"containerPress\" class=\"col\">\n" +
                    "                    <canvas id=\"graphPression\" ></canvas>\n" +
                    "                </div>")
            }
            if (checkBoxMaree) {
                $("#row2").append("<div  id=\"containerMaree\" class=\"col\">\n" +
                    "                    <canvas id=\"graphMaree\" ></canvas>\n" +
                    "                </div>")
            }
        } else {
            $("#graphe-container").append("<div id='row1' class = 'row'></div>")
            if (checkBoxTemp) {
                $("#row1").append("<div id=\"containerTemp\" class=\"col\">\n" +
                    "                    <canvas id=\"graphTemperature\" ></canvas>\n" +
                    "                </div>")
            }
            if (checkBoxHumidite) {
                $("#row1").append("<div id=\"containerHum\" class=\"col\">\n" +
                    "                    <canvas id=\"graphHumidites\" ></canvas>\n" +
                    "                </div>")
            }
            if (checkBoxPression) {
                $("#row1").append("<div  id=\"containerPress\" class=\"col\">\n" +
                    "                    <canvas id=\"graphPression\" ></canvas>\n" +
                    "                </div>")
            }
            if (checkBoxMaree) {
                $("#row1").append("<div  id=\"containerMaree\" class=\"col\">\n" +
                    "                    <canvas id=\"graphMaree\" ></canvas>\n" +
                    "                </div>")
            }
        }

        if (periode === "annee") {
            document.getElementById("historique-titre").innerText = "Historique annuel";
            if (checkBoxHumidite) {
                humiditesDAO.listerHumiditesAnneeUtil(afficheGrapheHumidite, marinaID)
            }
            if (checkBoxPression) {
                pressionDAO.listerPressionAnneeUtil(afficheGraphePression, marinaID)
            }
            if (checkBoxTemp) {
                temperatureDAO.listerTemperatureAnneeUtil(afficheGrapheTemperature, marinaID)
            }
        } else if (periode === "mois") {
            document.getElementById("historique-titre").innerText = "Historique mensuel";
            if (checkBoxHumidite) {
                humiditesDAO.listerHumiditesMoisUtil(afficheGrapheHumidite, marinaID)
            }
            if (checkBoxPression) {
                pressionDAO.listerPressionMoisUtil(afficheGraphePression, marinaID)
            }
            if (checkBoxTemp) {
                temperatureDAO.listerTemperatureMoisUtil(afficheGrapheTemperature, marinaID)
            }
        } else if (periode === "semaine") {
            document.getElementById("historique-titre").innerText = "Historique hebdomadaire";
            if (checkBoxHumidite) {
                humiditesDAO.listerHumiditesSemaineUtil(afficheGrapheHumidite, marinaID)
            }
            if (checkBoxPression) {
                pressionDAO.listerPressionSemaineUtil(afficheGraphePression, marinaID)
            }
            if (checkBoxTemp) {
                temperatureDAO.listerTemperatureSemaineUtil(afficheGrapheTemperature, marinaID)
            }
        } else if (periode === "jours") {
            document.getElementById("historique-titre").innerText = "Historique journalier";
            if (checkBoxHumidite) {
                humiditesDAO.listerHumiditesJoursUtil(afficheGrapheHumidite, marinaID)
            }
            if (checkBoxPression) {
                pressionDAO.listerPressionJoursUtil(afficheGraphePression, marinaID)
            }
            if (checkBoxTemp) {
                temperatureDAO.listerTemperatureJoursUtil(afficheGrapheTemperature, marinaID)
            }
        }
        if (checkBoxMaree) {
            mareeDAO.listerMarees(callbackMareeUtil, marina.latitude, marina.longitude)
        }
    };


    return function () {

        this.afficher = function (donneesHumidites, donneesTemp, donneesPression, donneesMaree, marina, latAPI, lngAPI, tempLive, humiLive, pressionLive, mareeLive) {
            document.getElementById("container").innerHTML = pageDetail;
            document.getElementById("nom-marina").innerHTML = "Marina de " + marina.nom + " :";
            $("#navbarSupportedContent").collapse('hide');

            marinaID = marina.id;
            latReel = latAPI;
            lngReel = lngAPI;


            // GESTION DU LIVE

            donneePressionLive = pressionLive;
            donneeHumiditeLive = humiLive;
            donneeTempLive = tempLive;
            donneeMareeLive = mareeLive;

            document.getElementById("valeur-temperature-live").innerHTML = "<span style='font-size: 0.82em'>Température: </span><b>" + donneeTempLive.valeur + "°C</b>";
            document.getElementById("valeur-humidite-live").innerHTML = "<span style='font-size: 0.82em'>Humidité: </span> <b>" + donneeHumiditeLive.valeur + "%</b>";
            document.getElementById("valeur-pression-live").innerHTML = "<span style='font-size: 0.82em'>Préssion: </span><b>" + donneePressionLive.valeur + "hPa</b>";
            document.getElementById("valeur-maree-live").innerHTML = "<span style='font-size: 0.82em'>Marée: </span> <b>" + donneeMareeLive + "m</b>";
            var dateLive = new Date(donneeTempLive.date);
            document.getElementById("date-live").innerHTML = "Donnée Live captés le " + dateLive.toLocaleString();

            document.getElementById("custom-select").addEventListener("change", actualiserGraph);
            document.getElementById("checkBoxHumidite").addEventListener("change", actualiserGraph);
            document.getElementById("checkBoxTemp").addEventListener("change", actualiserGraph);
            document.getElementById("checkBoxPression").addEventListener("change", actualiserGraph);

            document.getElementById("checkBoxMaree").addEventListener("change", actualiserGraph);


            // GESTION  DES GRAPHES

            console.log("Statistic de la marina ID : " + marinaID);

            donneesTemp = checkEmpty(donneesTemp);
            donneesPression = checkEmpty(donneesPression);
            donneesHumidites = checkEmpty(donneesHumidites);
            donneesMaree = checkEmpty(donneesMaree);

            afficheGrapheTemperature(donneesTemp);
            afficheGrapheHumidite(donneesHumidites);
            afficheGraphePression(donneesPression);
            afficheGrapheMaree(donneesMaree);
            console.log("FIN afficher")

        }
    };

    function afficheGrapheTemperature(data) {
        var x = [];
        var y = [];
        for (let i = 0; i < data.length; i++) {
            var date = new Date(data[i].date)
            x[i] = "" + date.getHours() + "h" + date.getMinutes() + " " + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
            y[i] = data[i].valeur;
        }

        if (data !== undefined) {
            new Chart(document.getElementById("graphTemperature").getContext('2d'), {
                type: 'line',
                data: {
                    labels: x,
                    datasets: [{
                        data: y,
                        label: "Température en °C",
                        borderColor: "#FF5733",
                        fill: false
                    }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true
                }
            });
        }
    }

    function afficheGrapheHumidite(data) {

        var x = [];
        var y = [];
        for (let i = 0; i < data.length; i++) {
            var date = new Date(data[i].date);
            x[i] = "" + date.getHours() + "h" + date.getMinutes() + " " + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
            y[i] = data[i].valeur;
        }

        if (data !== undefined) {
            new Chart(document.getElementById("graphHumidites").getContext('2d'), {
                type: 'line',
                data: {
                    labels: x,
                    datasets: [{
                        data: y,
                        label: "Humidité en %",
                        borderColor: "#00B9FF",
                        fill: false
                    }
                    ]
                },
                options: {
                    maintainAspectRatio: true,
                    responsive: true
                }
            });
        }
    }

    function afficheGraphePression(data) {
        var x = [];
        var y = [];
        for (let i = 0; i < data.length; i++) {
            var date = new Date(data[i].date)
            x[i] = "" + date.getHours() + "h" + date.getMinutes() + " " + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
            y[i] = data[i].valeur;
        }

        if (data !== undefined) {
            new Chart(document.getElementById("graphPression").getContext('2d'), {
                type: 'line',
                data: {
                    labels: x,
                    datasets: [{
                        data: y,
                        label: "Pression en hPa",
                        borderColor: "#008940",
                        fill: false
                    }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true
                }
            });
        }
    }

    function afficheGrapheMaree(data) {

        var x = [];
        var y = [];
        for (let i = 0; i < data.length; i++) {
            x[i] = "" + data[i].x.getHours() + "h" + data[i].x.getMinutes() + " " + data[i].x.getDay() + "/" + data[i].x.getMonth() + "/" + data[i].x.getFullYear();
            y[i] = data[i].y;
        }

        if (data !== undefined) {
            new Chart(document.getElementById("graphMaree").getContext('2d'), {
                type: 'line',
                data: {
                    labels: x,
                    datasets: [{
                        data: y,
                        label: "Marée en mètres",
                        borderColor: "#0032FF",
                        fill: false
                    }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true
                }
            });
        }
    }

    function callbackMareeUtil(data, lat, lng) {
        latReel = lat;
        lngReel = lng;
        afficheGrapheMaree(data);
    }


    function calculDistanceEntreCoord(lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = toRad(lat2 - lat1);
        var dLon = toRad(lon2 - lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d.toFixed(1);
    }

    // Converts numeric degrees to radians
    function toRad(Value) {
        return Value * Math.PI / 180;
    }
})();