var VueDetail = (function () {
    var pageDetail = document.getElementById("page-detail").innerHTML;

    return function () {

        var humidites = [];
        var humiditesVal = [];

        var temp = [];
        var tempVal = [];

        var pression = [];
        var pressionVal = [];

        this.afficher = function(donneesHumidites, donneesTemp, donneesPression, id){
            console.log("ID marina : "+id)

            for (let i = 0; i < donneesHumidites.length; i++) {
                console.log(donneesHumidites[i].idmarina);
                if (donneesHumidites[i].idmarina == id){
                    humidites.push(donneesHumidites[i]);
                    humiditesVal.push([new Date(donneesHumidites[i].date),donneesHumidites[i].valeur])
                }
            }
            for (let i = 0; i < donneesTemp.length; i++) {
                console.log(donneesTemp[i].idmarina);
                if (donneesTemp[i].idmarina == id){
                    temp.push(donneesTemp[i]);
                    tempVal.push([new Date(donneesTemp[i].date),donneesTemp[i].valeur])
                }
            }
            for (let i = 0; i < donneesPression.length; i++) {
                console.log(donneesPression[i].idmarina);
                if (donneesPression[i].idmarina == id){
                    pression.push(donneesPression[i]);
                    pressionVal.push([new Date(donneesPression[i].date),donneesPression[i].valeur])
                }
            }

            document.getElementById("container").innerHTML = pageDetail;
            //var ctx = document.getElementById('myChart').getContext('2d');

            google.charts.load('current', {packages: ['corechart', 'line']});
            google.charts.setOnLoadCallback(drawBasic);

            function drawBasic() {
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
            }
        }
    }
})();