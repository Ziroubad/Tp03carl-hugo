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
var   café1 ={
	nom: "Noir", lit :0,sucre: 2,
};
var   café2 ={nom: "capotchino", lit : 3,sucre:3,
};
var   café3 ={nom: "espresso", lit : 0 ,sucre:1,
};
var   café4 ={nom: "laté", lit : 2,sucre:2,
};
var   café5 ={nom: "vanille francais", lit :2,sucre:3,
};

console.info(café1);


