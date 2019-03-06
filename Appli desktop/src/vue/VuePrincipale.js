var VuePrincipale = (function()
{

    var pageGlobal = document.getElementById("page-stat").innerHTML; //recuperation du javascript
    return function()
    {
        this.afficher = function(listeHumidite, listeTemp, listePression, date)
        {

            document.getElementById("corps").innerHTML = pageGlobal; //changement de la valeur de body


            var header = document.getElementById("header");
             header.innerHTML = '<h1>Statistiques</h1><h2>Graphique par '+date+'</h2>';



            var menuDeroulant = document.getElementById("menuDeroulant");
            var valTemp = [];
            var valHum = [];

            for (let i=0; i<listeTemp.length; i++){
                valTemp[i] = listeTemp[i].valeur;
            }
            for (let i=0; i<listeHumidite.length; i++){
                valHum[i] = listeHumidite[i].valeur;
            }
             switch (date) {
                 case "annee":
                     var variable = "<select name='menu_region' onchange='location = this.value;'>" +
                         "<option value='#annee' selected>Année</option>" +
                         "<option value='#mois'>Mois</option>" +
                         "<option value='#semaine'>Semaine</option>" +
                         "<option value='#jour'>Jour</option>" ;

                     var lineChartData = {
                         labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre','Octobre','Novembre','Decembre'],
                         datasets: [{
                             label: 'Température (°C)',
                             borderColor: "rgb(205,92,92)",
                             backgroundColor: "rgb(219,112,147)",
                             fill: false,
                             yAxisID: 'y-axis-1',
                             data: valTemp
                         }, {
                             label: 'Humidité (%)',
                             borderColor: "rgb(176,196,222)",
                             backgroundColor: "rgb(135,206,250)",
                             fill: false,
                             yAxisID: 'y-axis-2',
                             data: valHum

                         }]
                     };
                     var ctx = document.getElementById("myChart").getContext('2d');
                     var myChart = new Chart(ctx, {
                         type: 'line',
                         data: lineChartData,
                         options: {
                             responsive: true,
                             hoverMode: 'index',
                             stacked: false,
                             scales: {
                                 xAxes: [{
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Mois'
                                     }
                                 }],
                                 yAxes: [{
                                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                     display: true,
                                     position: 'left',
                                     id: 'y-axis-1',
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Températures'
                                     },
                                     ticks: {
                                         fontColor: "rgb(205,92,92)", // this here
                                         fontSize:18,

                                     },
                                 }, {
                                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                     display: true,
                                     position: 'right',
                                     id: 'y-axis-2',
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Humidités'
                                     },
                                     ticks: {
                                         fontColor: "rgb(176,196,222)", // this here
                                         fontSize:18,
                                     },

                                     // grid line settings
                                     gridLines: {
                                         drawOnChartArea: false, // only want the grid lines for one axis to show up
                                     },
                                 }],
                             }
                         }
                     });

                     break;
                 case "mois":
                     var variable = "<select name='menu_region' onchange='location = this.value;'>" +
                         "<option value='#annee' >Année</option>" +
                         "<option value='#mois' selected>Mois</option>" +
                         "<option value='#semaine'>Semaine</option>" +
                         "<option value='#jour'>Jour</option>" ;
                     var lineChartData = {
                         labels: [1,5,10,15,20,25,30],
                         datasets: [{
                             label: 'Température (°C)',
                             borderColor: "rgb(205,92,92)",
                             backgroundColor: "rgb(219,112,147)",
                             fill: false,
                             yAxisID: 'y-axis-1',
                             data: valTemp
                         }, {
                             label: 'Humidité (%)',
                             borderColor: "rgb(176,196,222)",
                             backgroundColor: "rgb(135,206,250)",
                             fill: false,
                             yAxisID: 'y-axis-2',
                             data: valHum

                         }]
                     };
                     var ctx = document.getElementById("myChart").getContext('2d');
                     var myChart = new Chart(ctx, {
                         type: 'line',
                         data: lineChartData,
                         options: {
                             responsive: true,
                             hoverMode: 'index',
                             stacked: false,
                             scales: {
                                 xAxes: [{
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Jour'
                                     }
                                 }],
                                 yAxes: [{
                                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                     display: true,
                                     position: 'left',
                                     id: 'y-axis-1',
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Températures'
                                     },
                                     ticks: {
                                         fontColor: "rgb(205,92,92)", // this here
                                         fontSize:18,

                                     },
                                 }, {
                                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                     display: true,
                                     position: 'right',
                                     id: 'y-axis-2',
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Humidités'
                                     },
                                     ticks: {
                                         fontColor: "rgb(176,196,222)", // this here
                                         fontSize:18,
                                     },

                                     // grid line settings
                                     gridLines: {
                                         drawOnChartArea: false, // only want the grid lines for one axis to show up
                                     },
                                 }],
                             }
                         }
                     });
                     break;
                 case "semaine":
                     var variable = "<select name='menu_region' onchange='location = this.value;'>" +
                         "<option value='#annee'>Année</option>" +
                         "<option value='#mois'>Mois</option>" +
                         "<option value='#semaine' selected>Semaine</option>" +
                         "<option value='#jour'>Jour</option>" ;
                     var lineChartData = {
                         labels: ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
                         datasets: [{
                             label: 'Température (°C)',
                             borderColor: "rgb(205,92,92)",
                             backgroundColor: "rgb(219,112,147)",
                             fill: false,
                             yAxisID: 'y-axis-1',
                             data: valTemp
                         }, {
                             label: 'Humidité (%)',
                             borderColor: "rgb(176,196,222)",
                             backgroundColor: "rgb(135,206,250)",
                             fill: false,
                             yAxisID: 'y-axis-2',
                             data: valHum

                         }]
                     };
                     var ctx = document.getElementById("myChart").getContext('2d');
                     var myChart = new Chart(ctx, {
                         type: 'line',
                         data: lineChartData,
                         options: {
                             responsive: true,
                             hoverMode: 'index',
                             stacked: false,
                             scales: {
                                 xAxes: [{
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Jour'
                                     }
                                 }],
                                 yAxes: [{
                                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                     display: true,
                                     position: 'left',
                                     id: 'y-axis-1',
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Températures'
                                     },
                                     ticks: {
                                         fontColor: "rgb(205,92,92)", // this here
                                         fontSize:18,

                                     },
                                 }, {
                                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                     display: true,
                                     position: 'right',
                                     id: 'y-axis-2',
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Humidités'
                                     },
                                     ticks: {
                                         fontColor: "rgb(176,196,222)", // this here
                                         fontSize:18,
                                     },

                                     // grid line settings
                                     gridLines: {
                                         drawOnChartArea: false, // only want the grid lines for one axis to show up
                                     },
                                 }],
                             }
                         }
                     });
                     break;
                 case "jour":
                     var variable = "<select name='menu_region' onchange='location = this.value;'>" +
                         "<option value='#annee' >Année</option>" +
                         "<option value='#mois'>Mois</option>" +
                         "<option value='#semaine'>Semaine</option>" +
                         "<option value='#jour' selected>Jour</option>" ;
                     var lineChartData = {
                         labels: [0,2,4,6,8,10,12,14,16,18,20,22],
                         datasets: [{
                             label: 'Température (°C)',
                             borderColor: "rgb(205,92,92)",
                             backgroundColor: "rgb(219,112,147)",
                             fill: false,
                             yAxisID: 'y-axis-1',
                             data: valTemp
                         }, {
                             label: 'Humidité (%)',
                             borderColor: "rgb(176,196,222)",
                             backgroundColor: "rgb(135,206,250)",
                             fill: false,
                             yAxisID: 'y-axis-2',
                             data: valHum

                         }]
                     };
                     var ctx = document.getElementById("myChart").getContext('2d');
                     var myChart = new Chart(ctx, {
                         type: 'line',
                         data: lineChartData,
                         options: {
                             responsive: true,
                             hoverMode: 'index',
                             stacked: false,
                             scales: {
                                 xAxes: [{
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Heure'
                                     }
                                 }],
                                 yAxes: [{
                                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                     display: true,
                                     position: 'left',
                                     id: 'y-axis-1',
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Températures'
                                     },
                                     ticks: {
                                         fontColor: "rgb(205,92,92)", // this here
                                         fontSize:18,

                                     },
                                 }, {
                                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                     display: true,
                                     position: 'right',
                                     id: 'y-axis-2',
                                     scaleLabel: {
                                         display: true,
                                         labelString: 'Humidités'
                                     },
                                     ticks: {
                                         fontColor: "rgb(176,196,222)", // this here
                                         fontSize:18,
                                     },

                                     // grid line settings
                                     gridLines: {
                                         drawOnChartArea: false, // only want the grid lines for one axis to show up
                                     },
                                 }],
                             }
                         }
                     });
                     break;
             }
            variable+= "</select>";
            menuDeroulant.innerHTML = variable;



        }
    }

})();

