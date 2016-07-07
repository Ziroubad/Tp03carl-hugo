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

// premeier partie de tp03: création de 5 objet;
var   cafe ={
	nom: "Noir",
	lit :0,
	sucre: 2,
	}
moncons: function(){
	var nom ="laté";
	console.info(this.nom);
	}
};

//
console.info(café.moncons);
