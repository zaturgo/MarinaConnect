var VuePrincipale = (function()
{

    var pageGlobal = document.getElementById("page-stat").innerHTML; //recuperation du javascript
    return function()
    {
        this.afficher = function(listeCategorie, listeMois, listeProduits, pays, listePays, listeStats)
        {
            console.log(listeCategorie);
            console.log(listeMois);
            console.log(listeProduits);
            console.log(listePays);
            console.log(listeStats);
            document.getElementById("corps").innerHTML = pageGlobal; //changement de la valeur de body

            var tableauMois = document.getElementById("tableauMois");
            var tableauTemp = '<h3>Tableau mois</h3>' +
                '<table class="table">' +
                '<tr>' +
                '<thead class="thead-dark">' +
                '<th scope="row">Mois</th>' +
                '<th scope="row">Minimum</th>' +
                '<th scope="row">Maximum</th>' +
                '<th scope="row">Benefice</th>' +
                '<th scope="row">Moyenne</th>' +
                '<th scope="row">Nombre de ventes</th>' +
                '</tr>'+
                '</thead>'+
                '<tbody>';

            for (i = 0; i< listeMois.length; i++){
                tableauTemp +=
                    '<tr>' +
                    '<td>'+listeMois[i].id+'</td>' +
                    '<td>'+listeMois[i].min+'</td>' +
                    '<td>'+listeMois[i].max+'</td>' +
                    '<td>'+listeMois[i].benefice+'</td>' +
                    '<td>'+listeMois[i].moyenne+'</td>' +
                    '<td>'+listeMois[i].nombre+'</td>' +
                    '</tr>';
            }
            tableauTemp+= '</tbody></table>';
            tableauMois.innerHTML = tableauTemp;


            var tableauProduits = document.getElementById("tableauProduits");
            var tableauTemp = '<h3>Tableau Produits</h3>' +
                '<table class="table">' +
                '<tr>' +
                '<thead class="thead-dark">' +
                '<th scope="row">10 meilleurs produits</th>' +
                '<th scope="row">Nb de produits vendus</th>' +
                '<th scope="row">Total</th>' +
                '</tr>'+
                '</thead>'+
                '<tbody>';

            for (i = 0; i< listeProduits.length; i++){
                tableauTemp +=
                    '<tr>' +
                    '<td>'+listeProduits[i].nom+'</td>' +
                    '<td>'+listeProduits[i].nbVente+'</td>' +
                    '<td>'+listeProduits[i].total+'</td>' +
                    '</tr>';
            }
            tableauTemp+= '</tbody></table>';
            tableauProduits.innerHTML = tableauTemp;




            var tableauCategories = document.getElementById("tableauCategories");
            var tableauTemp = '<h3>Tableau Catégories</h3>' +
                '<table class="table">' +
                '<thead class="thead-dark">'+
                '<tr>' +
                '<th scope="row">Catégorie</th>' +
                '<th scope="row">Moyenne</th>' +
                '<th scope="row">Minimum</th>' +
                '<th scope="row">Maximum</th>' +
                '<th scope="row">Total des ventes</th>' +
                '<th scope="row">Nb de produits vendus</th>' +
                '<th scope="row">Nb de produits de la catégorie</th>' +
                 '<th scope="row">Meilleur produit</th>' +
                 '<th scope="row">Meilleurs produits vendus</th>' +
                '</tr>'+
                '</thead>'+
                '<tbody>';

            for (i = 0; i< listeCategorie.length; i++){
                tableauTemp +=
                    '<tr>' +
                    '<td>'+listeCategorie[i].nom+'</td>' +
                    '<td>'+listeCategorie[i].moyenne+'</td>' +
                    '<td>'+listeCategorie[i].min+'</td>' +
                    '<td>'+listeCategorie[i].max+'</td>' +
                    '<td>'+listeCategorie[i].totalVente+'</td>' +
                    '<td>'+listeCategorie[i].produitsVendus+'</td>' +
                    '<td>'+listeCategorie[i].totalProduits+'</td>' +
                     '<td>'+listeCategorie[i].meilleur+'</td>' +
                     '<td>'+listeCategorie[i].nbMeilleur+'</td>' +
                    '</tr>';
            }
            tableauTemp+= '</tbody></table>';
            tableauCategories.innerHTML = tableauTemp;

            var header = document.getElementById("header");
             header.innerHTML = '<h1>Statistiques '+pays+'</h1><h2>'+listeStats[1].nb_categorie+' catégories, '+listeStats[2].nb_produit+' produits</h2>';

            var resume = document.getElementById("blocResume");
            resume.innerHTML = '<h3>'+listeStats[0].benef+' $ de benefices</h3>';

            var menuDeroulant = document.getElementById("menuDeroulant");
           var variable = "<select name='menu_region' onchange='location = this.value;'>" +
                "<option value='#'>Partout</option>" ;
            for (i = 0; i< listePays.length; i++){
                variable +=  "<option value='#"+listePays[i].region+"'" ;
                    if (listePays[i].region === pays){
                        variable+= " selected ";
                    }
                    variable += ">"+listePays[i].region+"</option>"
            }
            variable+= "</select>";
            menuDeroulant.innerHTML = variable;

        }
    }

})();

