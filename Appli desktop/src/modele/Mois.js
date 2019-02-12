var Mois = function (id, min, max, benefice, moyenne, nombre) {
    switch (id) {
        case 1:
            this.id = "Janvier";
            break;
        case 2:
            this.id = "Février";
            break;
        case 3:
            this.id = "Mars";
            break;
        case 4:
            this.id = "Avril";
            break;
        case 5:
            this.id = "Mai";
            break;
        case 6:
            this.id = "Juin";
            break;
        case 7:
            this.id = "Juillet";
            break;
        case 8:
            this.id = "Août";
            break;
        case 9:
            this.id = "Septembre";
            break;
        case 10:
            this.id = "Octobre";
            break;
        case 11:
            this.id = "Novembre";
            break;
        case 12:
            this.id = "Décembre";
            break;
    }
    this.min = min;
    this.max = max;
    this.benefice = benefice;
    this.moyenne = moyenne;
    this.nombre = nombre;


}