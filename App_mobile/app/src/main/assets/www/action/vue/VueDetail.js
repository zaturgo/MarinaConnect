var VueDetail = (function () {
    var pageDetail = document.getElementById("page-detail").innerHTML;

    return function () {
        var chart;
        this.afficher = function(){

            document.getElementById("container").innerHTML = pageDetail;
            //var ctx = document.getElementById('myChart').getContext('2d');

            var lineChartData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Temperature',
                    borderColor: 'rgb(255, 50, 0)',
                    backgroundColor:  'rgb(255, 50, 50)',
                    fill: false,
                    data: [-5,0,5,10,15,20,25
                    ],
                    yAxisID: 'y-axis-1',
                }, {
                    label: 'Pression',
                    borderColor: 'rgb(50, 50, 255)',
                    backgroundColor: 'rgb(0, 255, 255)',
                    fill: false,
                    data: [88,22,33,66,99,77,44
                    ],
                    yAxisID: 'y-axis-2'
                }]
            };


            var ctx = document.getElementById('canva').getContext('2d');
                window.myLine = Chart.Line(ctx, {
                    data: lineChartData,
                    options: {
                        responsive: true,
                        hoverMode: 'index',
                        stacked: false,
                        title: {
                            display: true,
                            text: 'Station meteo de marseille'
                        },
                        scales: {
                            yAxes: [{
                                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                display: true,
                                position: 'left',
                                id: 'y-axis-1',
                            }, {
                                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                display: true,
                                position: 'right',
                                id: 'y-axis-2',
                                // grid line settings
                                gridLines: {
                                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                                },
                            }],
                        }
                    }
                });

        }
    }
})();