'use strict';

const carre = (nb) => nb * nb;

const r1 = carre(5);
console.log(r1);


/* ***************************************************************** */

/**
 * Permet de calculer l'exposant d'un nombre
 * @param {number} nb1 la valeur du nombre
 * @param {number} nb2 la valeur de l'exposant 
 * @returns {number} Le resultat
 */

const exposant = function(nb1,nb2){
    let resultat = 1;
    for(let i = 0 ; i < nb2 ; i++){

        resultat = resultat * nb1;

    }
    console.log('coucou');
    return resultat;
}

const nombre1 = 5;
const nombre2 = 4;
const r2 = exposant(nombre1, nombre2);
console.log(r2);



/* ************************************************************ */

//Une fonction recurcive => C'est une fonction qui s'appelle elle-même. Du coup 
//Fibonacci
//0 1 1 2 3 5 8 13 21 ...
// Si on cherche la cinqième valeur : F(5)

const calcFibonacci = function(nombre){
    console.log(`fib(${nombre})`);
    if(nombre <2){
        return nombre;//si f est plus petit que 2 il envoie 0 ou 1!
        
    }

    return calcFibonacci(nombre -1)+ calcFibonacci(nombre-2);
}

const fib = 5;
const res3 = calcFibonacci(fib);
console.log(`La valeur de fibonacci de ${fib} est ${res3}`)
