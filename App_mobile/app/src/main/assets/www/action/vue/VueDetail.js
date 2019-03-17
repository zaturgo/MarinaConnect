var VueDetail = (function () {
    var pageDetail = document.getElementById("page-detail").innerHTML;

    this.humiditesDAO = new HumiditesDAO();
    this.pressionDAO = new PressionDAO();
    this.temperatureDAO = new TemperatureDAO();

    var checkBoxTemp = true;
    var checkBoxPression = true;
    var checkBoxHumidite = true;
    var periode = 'annee';

    /*var notCheckedTemp = true;
    var notCheckedHumidite = true;
    var notCheckedPression = true;*/

    var firstUpdate = true;

    var humidites = [];
    var humiditesVal = [];

    var temp = [];
    var tempVal = [];

    var pression = [];
    var pressionVal = [];

    var getDonneeCheckBox = function () {
        checkBoxPression = document.getElementById("checkBoxPression").checked;
        checkBoxTemp = document.getElementById("checkBoxTemp").checked;
        checkBoxHumidite = document.getElementById("checkBoxHumidite").checked;
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
        document.getElementById("grapheTemperature").innerHTML = "";
        document.getElementById("graphePression").innerHTML = "";
        document.getElementById("grapheHumidite").innerHTML = "";
    };
    var displayGraphTemp = function (donnees) {

    };
    var displayGraphHumidite = function (donnees) {

    };
    var displayGraphPression = function (donnees) {

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


        if (periode == "annee") {
            if (checkBoxHumidite) {
                console.log("hello");


            }
            if (checkBoxPression) {

            }
            if (checkBoxTemp) {

            }
        } else if (periode == "mois") {
            if (checkBoxHumidite) {

            }
            if (checkBoxPression) {

            }
            if (checkBoxTemp) {

            }
        } else if (periode == "semaine") {
            if (checkBoxHumidite) {

            }
            if (checkBoxPression) {

            }
            if (checkBoxTemp) {

            }
        } else if (periode == "jours") {
            if (checkBoxHumidite) {

            }
            if (checkBoxPression) {

            }
            if (checkBoxTemp) {

            }
        }
    };

    return function () {



        this.afficher = function (donneesHumidites, donneesTemp, donneesPression, id) {

            document.getElementById("container").innerHTML = pageDetail;

            document.getElementById("custom-select").addEventListener("change", actualiserGraph);
            document.getElementById("checkBoxHumidite").addEventListener("change", actualiserGraph);
            document.getElementById("checkBoxTemp").addEventListener("change", actualiserGraph);
            document.getElementById("checkBoxPression").addEventListener("change", actualiserGraph);

            console.log("Statistic de la marina ID : " + id);

            donneesTemp = checkEmpty(donneesTemp);
            donneesPression = checkEmpty(donneesPression);
            donneesHumidites = checkEmpty(donneesHumidites);

            for (let i = 0; i < donneesHumidites.length; i++) {
                    humidites.push(donneesHumidites[i]);
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
            console.log(tempVal)
            google.charts.load('current', {packages: ['corechart', 'line']});
            google.charts.setOnLoadCallback(drawBasic);

            function drawBasic() {
                // TEMPERATURE

                var dataTemperature = new google.visualization.DataTable();
                dataTemperature.addColumn('date', 'X');
                dataTemperature.addColumn('number', 'celsius');

                dataTemperature.addRows(tempVal);

                var optionsTemperature = {
                    hAxis: {
                        title: 'Temps'
                    },
                    vAxis: {
                        title: 'Température'
                    }
                };

                var chartTemp = new google.visualization.LineChart(document.getElementById('graphTemperature'));
                chartTemp.draw(dataTemperature, optionsTemperature);

                // HUMIDITES

                var dataHumidites = new google.visualization.DataTable();
                dataHumidites.addColumn('date', 'X');
                dataHumidites.addColumn('number', '%');

                dataHumidites.addRows(humiditesVal);

                var optionsHumidites = {
                    hAxis: {
                        title: 'Temps'
                    },
                    vAxis: {
                        title: 'Humidités'
                    }
                };

                var charthumidites = new google.visualization.LineChart(document.getElementById('graphHumidites'));
                charthumidites.draw(dataHumidites, optionsHumidites);


                // PRESSION

                var dataPression = new google.visualization.DataTable();
                dataPression.addColumn('date', 'X');
                dataPression.addColumn('number', 'bar');

                dataPression.addRows(pressionVal);

                var optionsPression = {
                    hAxis: {
                        title: 'Temps'
                    },
                    vAxis: {
                        title: 'Pression'
                    }
                };

                var chartPression = new google.visualization.LineChart(document.getElementById('graphPression'));
                chartPression.draw(dataPression, optionsPression);
            }
        }
    }
})();