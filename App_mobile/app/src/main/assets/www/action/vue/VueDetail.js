var VueDetail = (function () {
    var pageDetail = document.getElementById("page-detail").innerHTML;

    this.humiditesDAO = new HumiditesDAO();
    this.pressionDAO = new PressionDAO();
    this.temperatureDAO = new TemperatureDAO();
    this.mareeDAO = new MareeDAO();

    var marinaID = 0;

    var checkBoxTemp = true;
    var checkBoxPression = true;
    var checkBoxHumidite = true;
    var checkBoxMaree = true;
    var periode = 'annee';

    var humidites = [];
    var humiditesData = [];
    var humiditesVal = [];

    var temp = [];
    var tempVal = [];

    var pression = [];
    var pressionVal = [];

    var mareeVal  = [];
    var latReel;
    var lngReel;

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
        $('#graphTemperature').remove();
        $('#graphe-container').append('<canvas id="graphTemperature"><canvas>');
        $('#graphTemperature').css("height", "0px");

        $('#graphHumidites').remove();
        $('#graphe-container').append('<canvas id="graphHumidites"><canvas>');
        $('#graphHumidites').css("height", "0px");

        $('#graphPression').remove();
        $('#graphe-container').append('<canvas id="graphPression"><canvas>');
        $('#graphHumidites').css("height", "0px");

        $('#graphMaree').remove();
        $('#graphe-container').append('<canvas id="graphMaree"><canvas>');
        $('#graphMaree').css("height", "0px");
    };

    var actualiserGraph = function () {
        clearGraph();

        getDonneeSelect();
        getDonneeCheckBox();

        console.log("update..");

        if (periode === "annee") {
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
        if (checkBoxMaree){
            mareeDAO.listerMarees(callbackMaree)
        }
    };


    return function () {

        this.afficher = function (donneesHumidites, donneesTemp, donneesPression, donneesMaree,lat,lng, id) {

            $("#navbarSupportedContent").collapse('hide')

            marinaID = id;

            document.getElementById("container").innerHTML = pageDetail;

            document.getElementById("custom-select").addEventListener("change", actualiserGraph);
            document.getElementById("checkBoxHumidite").addEventListener("change", actualiserGraph);
            document.getElementById("checkBoxTemp").addEventListener("change", actualiserGraph);
            document.getElementById("checkBoxPression").addEventListener("change", actualiserGraph);
            document.getElementById("checkBoxMaree").addEventListener("change", actualiserGraph);

            console.log("Statistic de la marina ID : " + id);

            donneesTemp = checkEmpty(donneesTemp);
            donneesPression = checkEmpty(donneesPression);
            donneesHumidites = checkEmpty(donneesHumidites);
            donneesMaree = checkEmpty(donneesMaree);

            for (let i = 0; i < donneesHumidites.length; i++) {
                humidites.push(donneesHumidites[i]);
                humiditesData.push({x: new Date(donneesHumidites[i].date), y: donneesHumidites[i].valeur});
                humiditesVal.push([new Date(donneesHumidites[i].date), donneesHumidites[i].valeur])
            }
            for (let i = 0; i < donneesTemp.length; i++) {
                temp.push(donneesTemp[i]);
                tempVal.push([new Date(donneesTemp[i].date), donneesTemp[i].valeur])
            }
            for (let i = 0; i < donneesPression.length; i++) {
                pression.push(donneesPression[i]);
                pressionVal.push({date:new Date(donneesPression[i].date), valeur:donneesPression[i].valeur})
            }
            latReel = lat;
            lngReel = lng;

            afficheGrapheTemperature(temp, tempVal);
            afficheGrapheHumidite(humidites, humiditesVal);
            afficheGraphePression(pressionVal);
            afficheGrapheMaree(donneesMaree);
        }
    };

    function afficheGrapheTemperature(data) {
        console.log(data)

        var x = [];
        var y = [];
        for (let i = 0; i < data.length; i++) {
            var date = new Date(data[i].date)
            x[i] = ""+date.getHours()+"h"+date.getMinutes()+" "+date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();
            y[i] = data[i].valeur;
        }

        if (data !== undefined) {
            new Chart(document.getElementById("graphTemperature").getContext('2d'), {
                type: 'line',
                data: {
                    labels: x,
                    datasets: [{
                        data: y,
                        label: "Température",
                        borderColor: "#3e95cd",
                        fill: false
                    }
                    ]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Température en °C'
                    }
                }
            });
            $("#graphTemperature").css("height","33%")
        }
    }

    function afficheGrapheHumidite(data) {
        console.log(data)

        var x = [];
        var y = [];
        for (let i = 0; i < data.length; i++) {
            var date = new Date(data[i].date)
            x[i] = ""+date.getHours()+"h"+date.getMinutes()+" "+date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();
            y[i] = data[i].valeur;
        }

        if (data !== undefined) {
            new Chart(document.getElementById("graphHumidites").getContext('2d'), {
                type: 'line',
                data: {
                    labels: x,
                    datasets: [{
                        data: y,
                        label: "Humidité",
                        borderColor: "#3e95cd",
                        fill: false
                    }
                    ]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Humidité en %'
                    }
                }
            });
            $("#graphHumidites").css("height","33%")
        }
    }

    function afficheGraphePression(data) {
        console.log(data)
        var x = [];
        var y = [];
        for (let i = 0; i < data.length; i++) {
            var date = new Date(data[i].date)
            x[i] = ""+date.getHours()+"h"+date.getMinutes()+" "+date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();
            y[i] = data[i].valeur;
        }

        if (data !== undefined) {
            new Chart(document.getElementById("graphPression").getContext('2d'), {
                type: 'line',
                data: {
                    labels: x,
                    datasets: [{
                        data: y,
                        label: "Pression",
                        borderColor: "#3e95cd",
                        fill: false
                    }
                    ]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Pression en hPa'
                    }
                }
            });
            $("#graphMaree").css("height","33%")
        }
    }
    function afficheGrapheMaree(data) {
        console.log(data)
        var x = [];
        var y = [];
        for (let i = 0; i < data.length; i++) {
            x[i] = ""+data[i].x.getHours()+"h"+data[i].x.getMinutes()+" "+data[i].x.getDay()+"/"+data[i].x.getMonth()+"/"+data[i].x.getFullYear();
            y[i] = data[i].y;
        }

        if (data !== undefined) {
            new Chart(document.getElementById("graphMaree").getContext('2d'), {
                type: 'line',
                data: {
                    labels: x,
                    datasets: [{
                        data: y,
                        label: "Marée",
                        borderColor: "#3e95cd",
                        fill: false
                    }
                    ]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Marée en mètres'
                    }
                }
            });
            $("#graphMaree").css("height","33%")
        }
    }

    function callbackMaree(data, lat, lng){
        latReel = lat;
        lngReel = lng;
        afficheGrapheMaree(data);
    }

})();