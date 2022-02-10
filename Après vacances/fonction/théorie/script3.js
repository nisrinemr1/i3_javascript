'use strict';
//troisieme façon d'ecrire les fonction : flechés 
// - Ecriture alternative (technique pour ecrire un peut moi de code et c'est une manière plus flemarde :) )
// - Ecriture fleché version lambda -> fonction qui renvoie directement la valeur
/* ************************************************************** */

// - Ecriture "simple"
const demoFctBase = function(nb1, nb2){
    return nb1 + nb2;
}

// - Ecriture fleché
const demoFctArrow = (nb1, nb2) =>{
    return nb1 + nb2; 
}

// - Ecriture Lambda 
const demoFctLambda = (nb1, nb2) => nb1 + nb2; 
            // pour les parametres .... cela conduit au resultat.


/* ************************************************************* */
/**  //pour la documentation js*/
 
/**
 * Fonction qui permet de diviser 2 nombre
 * @param {number} diviseur Le diviseur 
 * @param {number} dividende Le dividende
 * @returns {number} le resultat
 */


const divise = (diviseur, dividende) => {
    if(dividende === 0){
        throw new RangeError('Division par Zéro ! :O');
    }
    const resultat = diviseur / dividende; //il capte que c'est nombre
    return resultat;
}
const r1 = divise(5,6);
const r2 = divise(5,0);
//il va cesser le code étant donné qu'il va planter vu qu'on a mit 0
console.log(r1);
console.log(r2);
throw new Error ('BOUM!');