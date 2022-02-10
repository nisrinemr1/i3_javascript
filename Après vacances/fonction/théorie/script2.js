'use strict';

// Les parametre des fonctions 
const demoParam1 = function(nb1,nb2){
    //La parametre sont des variables local à la fonction
    
    //Les variables créer sont également locale. donc nb1 et nb2 ne s'affichera pas! : Uncaught ReferenceError: nb1 is not defined
    /* <anonymous> file:///Users/bintmhamed/Documents/i3/GitHub/javascript/Après vacances/fonction/théorie/script2.js:10 */

    const resultat = nb1 + nb2; 
    return resultat;
}

// - Envois des parametres par copie de valeur (dans le demoParam1)
const nombre1 = 13;
const nombre2 = 35;
const resultat1 = demoParam1(nombre1, nombre2);
const resultat2 = demoParam1(5,20);

console.log(resultat1);
console.log(resultat2);
/* ************************************************************** */

//Les parametres optionnels
const demoParam2 = function(nb1, nb2, nb3 = 1){//permet de faire en sorte que la troisième valeur, si elle n'est pas donné elle vaudra 1

    return nb1 * nb2 * nb3;
    //possible d'écrire afin de renvoyer directement le resultat 
}
        //Notes: les paramètre optionnels doivent se trouver apèrs les obligatoires

const nombre3 = 5;
const nombre4 = 4;
const resultat3 = demoParam2(nombre3, nombre4);
const resultat4 = demoParam2(nombre3, 2);
console.log(resultat1);

console.log(`Resultat 3 -> ${resultat3}`);//donne un NaN
console.log(`Resultat 4 -> ${resultat4}`);

/* ************************************************************** */
//Le parametre "Rest"
// - Permet de créer un indéterminé de paramètre
// - Ceux-ci sont stocké sous forme de tableau 
// - Le nom du parametre est précédé de "..."

const demoParam3 = function(nb1, nb2, ...nbs){

    //exploitation du contenu 
    let resultat = nb1; 
    for(const nb of nbs){
        resultat = resultat * nb;
    }
    return resultat;
}
const resultat5 = demoParam3(5,2,5,9,3,2); //après les deux premier nb, ils seront dans le nbs
console.log(`Resultat 5 -> ${resultat5}`);


//fonction pour presenter les gens
const demoParam4 = function(msg, ...people){
    //Il ne peut avoir qu'un seul parametre "rest" et celui-ci doit toujours etre  LE DERNIER!
    const peopleText = people.join(', ');

    console.log(`Bonzour ${peopleText}. \n`+
                `Vous avez un message : ${msg}`);

}

demoParam4('Hello', 'Cookie', 'Lili', 'Nini');