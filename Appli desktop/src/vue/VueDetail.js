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
        $('#graphe-container').empty();
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
        var compteur = 0;
        if (checkBoxHumidite){
            compteur++;
        }if (checkBoxTemp){
            compteur++;
        }if (checkBoxPression){
            compteur++;
        }if (checkBoxMaree){
            compteur++;
        }
        if (compteur >2){
            $("#graphe-container").append("<div id='row1' class = 'row'></div><div id='row2' class = 'row'></div>");
            if (checkBoxTemp){
                $("#row1").append("<div id=\"containerTemp\" class=\"col\">\n" +
                    "                    <canvas id=\"graphTemperature\" ></canvas>\n" +
                    "                </div>")
            }if (checkBoxHumidite){
                $("#row1").append("<div id=\"containerHum\" class=\"col\">\n" +
                    "                    <canvas id=\"graphHumidites\" ></canvas>\n" +
                    "                </div>")
            }if (checkBoxPression){
                $("#row2").append("<div  id=\"containerPress\" class=\"col\">\n" +
                    "                    <canvas id=\"graphPression\" ></canvas>\n" +
                    "                </div>")
            }if (checkBoxMaree){
                $("#row2").append("<div  id=\"containerMaree\" class=\"col\">\n" +
                    "                    <canvas id=\"graphMaree\" ></canvas>\n" +
                    "                </div>")
            }
        }else{
            $("#graphe-container").append("<div id='row1' class = 'row'></div>")
            if (checkBoxTemp){
                $("#row1").append("<div id=\"containerTemp\" class=\"col\">\n" +
                    "                    <canvas id=\"graphTemperature\" ></canvas>\n" +
                    "                </div>")
            }if (checkBoxHumidite){
                $("#row1").append("<div id=\"containerHum\" class=\"col\">\n" +
                    "                    <canvas id=\"graphHumidites\" ></canvas>\n" +
                    "                </div>")
            }if (checkBoxPression){
                $("#row1").append("<div  id=\"containerPress\" class=\"col\">\n" +
                    "                    <canvas id=\"graphPression\" ></canvas>\n" +
                    "                </div>")
            }if (checkBoxMaree){
                $("#row1").append("<div  id=\"containerMaree\" class=\"col\">\n" +
                    "                    <canvas id=\"graphMaree\" ></canvas>\n" +
                    "                </div>")
            }
        }


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
            }
                latReel = lat;
                lngReel = lng;

            afficheGrapheTemperature(temp, tempVal);
            afficheGrapheHumidite(humidites, humiditesVal);
            afficheGraphePression(pression, pressionVal);
            afficheGrapheMaree(donneesMaree);
        }
    };


    function afficheGrapheTemperature(data) {
        var x = [];
        var y = [];
        for (let i = 0; i < data.length; i++) {
            var date = new Date(data[i].date);
            x[i] = ""+date.getHours()+"h"+date.getMinutes()+" "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
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
            x[i] = ""+date.getHours()+"h"+date.getMinutes()+" "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
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
            var date = new Date(data[i].date);
            x[i] = ""+date.getHours()+"h"+date.getMinutes()+" "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
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
            x[i] = ""+data[i].x.getHours()+"h"+data[i].x.getMinutes()+" "+data[i].x.getDate()+"/"+(data[i].x.getMonth()+1)+"/"+data[i].x.getFullYear();
            y[i] = data[i].y;
        }

        if (data !== undefined) {
            new Chart(document.getElementById("graphMaree").getContext('2d'), {
                type: 'line',
                data: {
                    labels: x,
                    datasets: [{
                        data: y,
                        label: "Prévision marée en mètres",
                        borderColor: "#7b5cff",
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
    function donneesMaree(data, lat, lng){
        latReel = lat;
        lngReel = lng;
        afficheGrapheMaree(data);
    }

})();