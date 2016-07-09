// Code du TPF02
var liste;

function nouvelleTransaction(){
    liste = [];
}

function commanderCafe(nom){
    liste.push(nom);
}

function lecturePremierCafe(){
    var premierCafe = liste.shift();
    return premierCafe;
}

function terminerTransaction() {
    liste = undefined;
}


// fonction constructeur qui sert à crèer des objets café avec ses propriètées.
function cafe(nom, nbLait, nbSucre, prix, nomConsomateur){
	this.nom= nom;
	this.nbLait = nbLait;
	this.nbSucre = nbSucre;
	this.prix = prix;
	this.nomConsomateur = nomConsomateur;
	this.afficherCafe = function(){
		console.log(this.nomConsomateur + " a commander café :" 
		+ this.nom + " " + this.nbLait +" et " + this.nbSucre 
		+"sucre(s), son prix est " + this.prix+"$.");
	}
}


var cafe1 = new cafe("laté", 2, 3, 2.5, "Badreddine");

