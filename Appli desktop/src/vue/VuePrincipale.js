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
             switch (date) {
                 case "annee":
                     var variable = "<select name='menu_region' onchange='location = this.value;'>" +
                         "<option value='#annee' selected>Année</option>" +
                         "<option value='#mois'>Mois</option>" +
                         "<option value='#semaine'>Semaine</option>" +
                         "<option value='#jour'>Jour</option>" ;
                     break;
                 case "mois":
                     var variable = "<select name='menu_region' onchange='location = this.value;'>" +
                         "<option value='#annee' >Année</option>" +
                         "<option value='#mois' selected>Mois</option>" +
                         "<option value='#semaine'>Semaine</option>" +
                         "<option value='#jour'>Jour</option>" ;
                     break;
                 case "semaine":
                     var variable = "<select name='menu_region' onchange='location = this.value;'>" +
                         "<option value='#annee'>Année</option>" +
                         "<option value='#mois'>Mois</option>" +
                         "<option value='#semaine' selected>Semaine</option>" +
                         "<option value='#jour'>Jour</option>" ;
                     break;
                 case "jour":
                     var variable = "<select name='menu_region' onchange='location = this.value;'>" +
                         "<option value='#annee' >Année</option>" +
                         "<option value='#mois'>Mois</option>" +
                         "<option value='#semaine'>Semaine</option>" +
                         "<option value='#jour' selected>Jour</option>" ;
                     break;
             }


            variable+= "</select>";
            menuDeroulant.innerHTML = variable;

        }
    }

})();

