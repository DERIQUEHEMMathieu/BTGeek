let aujourdhui = new Date();
let showDate = document.getElementById("date");
let showTime = document.getElementById("time");

// Affichage de la date du jour
showDate.innerHTML = "Nous sommes le : "+(aujourdhui.getDate()+"/"+(aujourdhui.getMonth()+1)+"/"+aujourdhui.getFullYear());

// Affichage de l'heure actuelle
function affichZero(nombre) {

    // Cette fonction prend en paramètre un nombre si ce nombre est inférieur à 10, on affiche 0 + ce nombre (07h00)
    return nombre < 10 ? '0' + nombre : nombre;
}

function dateEtHeure() {
    // On rcupère la variable let aujourd'hui avec l'objet Date() pour renvoyer année, mois, jour, heure, minutes, seconde, millisecondes.
    // On génére l'affichage avec innerHTML et on concatene pour pouvoir afficher l'heure actuelle sous forme de 07:00.

        showTime.innerHTML = 'Il est :' + ' ' + affichZero(aujourdhui.getHours()) + ':' + affichZero(aujourdhui.getMinutes());
}

// Pour actualiser l'heure chaque minutes, on rappelle la fonction dateEtHeure() toutes les 100 millisecondes avec la méthode JS setInterval
window.onload = function() {
    setInterval("dateEtHeure()", 100);
};