var VueDetail = (function () {
    var pageDetail = document.getElementById("page-detail").innerHTML;

    return function () {
        var chart;
        var humidites = [];
        var humiditesVal = [];
        this.afficher = function(donnees, id){
            console.log("ID : "+id)

            for (let i = 0; i < donnees.length; i++) {
                console.log(donnees[i].idmarina);
                if (donnees[i].idmarina == id){
                    humidites.push(donnees[i]);
                    humiditesVal.push([new Date(donnees[i].date),donnees[i].valeur])
                }
            }

            document.getElementById("container").innerHTML = pageDetail;
            //var ctx = document.getElementById('myChart').getContext('2d');

            google.charts.load('current', {packages: ['corechart', 'line']});
            google.charts.setOnLoadCallback(drawBasic);

            function drawBasic() {

                var data = new google.visualization.DataTable();
                data.addColumn('date', 'X');
                data.addColumn('number', 'degre celsus');

                data.addRows(humiditesVal);

                var options = {
                    hAxis: {
                        title: 'Time'
                    },
                    vAxis: {
                        title: 'Température'
                    }
                };

                var chart = new google.visualization.LineChart(document.getElementById('graph'));

                chart.draw(data, options);
            }
        }
    }
})();