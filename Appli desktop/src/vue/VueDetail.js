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

    /*var notCheckedTemp = true;
    var notCheckedHumidite = true;
    var notCheckedPression = true;*/

    var firstUpdate = true;

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

        /*if (firstUpdate) {
            getDonneeSelect();
            getDonneeCheckBox();

            //Loader();

            console.log("|| Actualisation graphs ||\nPeriode : " + periode + "\nTemperature : " + checkBoxTemp + " \tPression : " + checkBoxPression + "\tHumidite : " + checkBoxHumidite);
            firstUpdate = false;
        }*/

        //TODO : callbacks...

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
            mareeDAO.listerMarees(donneesMaree)
        }
    };


    return function () {

        this.afficher = function (donneesHumidites, donneesTemp, donneesPression,donneesMaree, lat, lng, id) {

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
            latReel = checkEmpty(latReel);
            lngReel = checkEmpty(lngReel);

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
                pressionVal.push([new Date(donneesPression[i].date), donneesPression[i].valeur])
            }for (let i = 0; i < donneesMaree.length; i++) {
                mareeVal.push([new Date(donneesMaree[i].date), donneesMaree[i].height])
                latReel = lat;
                lngReel = lng;
            }

            console.log(tempVal);

            afficheGrapheTemperature(temp, tempVal);
            afficheGrapheHumidite(humidites, humiditesVal);
            afficheGraphePression(pression, pressionVal);
            afficheGrapheMaree(mareeVal);
        }
    };


    function afficheGrapheTemperature(data) {
        var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var config = {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Température en °C',
                    backgroundColor: new Color(255, 0, 0),
                    borderColor: new Color(255, 0, 0),
                    data: data,
                    fill: false,
                },
                ]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Température'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Période'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Valeur (°C)'
                        }
                    }]
                }
            }
        };
        if (data !== undefined) {
            var ctx = document.getElementById('graphTemperature').getContext('2d');
            window.myLine = new Chart(ctx, config);
            $("#graphTemperature").css("height","33%")
        }
    }

    function afficheGrapheHumidite(data) {
        var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var config = {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Humiditée en %',
                    backgroundColor: new Color(255, 0, 0),
                    borderColor: new Color(255, 0, 0),
                    data: data,
                    fill: false,
                },
                ]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Humiditée'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Période'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Valeur (%)'
                        }
                    }]
                }
            }
        };
        if (data !== undefined) {
            var ctx = document.getElementById('graphHumidites').getContext('2d');
            window.myLine = new Chart(ctx, config);
            $("#graphHumidites").css("height","33%")
        }
    }

    function afficheGraphePression(data) {
        var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var config = {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Préssion en %',
                    backgroundColor: new Color(255, 0, 0),
                    borderColor: new Color(255, 0, 0),
                    data: data,
                    fill: false,
                },
                ]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Pression'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Période'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Valeur (%)'
                        }
                    }]
                }
            }
        };
        if (data !== undefined) {
            var ctx = document.getElementById('graphPression').getContext('2d');
            window.myLine = new Chart(ctx, config);
            $("#graphPression").css("height","33%")
        }
    }
    function afficheGrapheMaree(data) {
        console.log(data);
        var config = {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Marée en m',
                    backgroundColor: new Color(255, 0, 0),
                    borderColor: new Color(255, 0, 0),
                    data: data,
                    fill: false,
                },
                ]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Pression'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Période'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Hauteur (m)'
                        }
                    }]
                }
            }
        };
        if (data !== undefined) {
            var ctx = document.getElementById('graphMaree').getContext('2d');
            window.myLine = new Chart(ctx, config);
            $("#graphMaree").css("height","33%")
        }
    }
    function donneesMaree(data, lat, lng){
        latReel = lat;
        lngReel = lng;
        afficheGrapheMaree(data);
    }

})();