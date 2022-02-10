'use strict';
/* Pour que le navigateur affiche plus d'erreur. Ce qui rendra le langage plus strict */

/* mistypeVariable=17; 
dans le software, il affichera l'erreur!*/

//interaction
console.log('Hello World');
console.warn('Message d\'attention');
console.error('Message d\'erreur');

//Les variables
//-Types de variable (var et let)

// Il faut éviter les variable global 
var maVariableGlobal = 42;

//variable Local permet de pouvoir rester dans la boucle et n'ira pas ailleur. Limité au scope actuel.
let maVariableLocal = 42;
const maConstante = 'Salut';

// - Le type de donnée d'un variable

/* Les caractère et les chaines de caractères  */ 
const nom= 'Duck';
const prenom = 'Riri';
const lettre = 'a';

/* La concaténation en JS soit avec le + */  

const person1 = 'La personne s\'appel ' +' '+ nom + ' ! ';
const person2 = `La personne s'appel ${prenom} ${nom}!`;


/* Les nombres (entier et reel) */
const nombreEntier = 42;
const nombreReel = 3.14; 

const v1 = 5;
const v2 = 2; 

const resAddition = v1 + v2;
const resSoustraction = v1 - v2; 
const resMultiplication = v1 * v2; 
const resDivisionReel = v1 / v2;
const resDivisionEntiere =  Math.floor(v1 / v2); 
const resResteDivision = v1 % v2;
const resPuissance = v1 ** v2;

console.log('Add', resAddition);
console.log('Sous', resSoustraction);
console.log('Multi', resMultiplication);
console.log('Div Reel', resDivisionReel);
console.log('Div Entiere', resDivisionEntiere);
console.log('Reste', resResteDivision);
console.log('Puissance', resPuissance);


/**********************************/
// L'interaction entre la page web(DOM) et le JS
/* on va recup depuis le dom (html) */
const inputNb1 =  document.getElementById('inputNb1');
const inputNb2 = document.getElementById('inputNb2');
const btnCalcul = document.getElementById('btnCalcul');
const result = document.getElementById('resultat');

/* Ajout d'un event sur le click d'un bouton */
/* console.log(inputNb1.value); */

btnCalcul.addEventListener('click',function(){
    //code executer lors de l'event
    console.log(inputNb1.value);

    const nb1 = parseFloat(inputNb1.value);
    const nb2 = parseFloat(inputNb2.value);
    const res = nb1 + nb2; 
    /* ce serait mieux de mettre le calcul ici que dans l'innerhtml  */

    result.innerHTML = `Le resultat de l'addition de ${nb1} et ${nb2} vaut ${res}`;
    /* permet d'interagir avec l'HTML!!! */
});

inputNb1.addEventListener('keyup', function(){
    const valNb1 = inputNb1.value;
    const valCorrige = valNb1.replace(',' , '.');
    /* lire la valuer */
    inputNb1.value= valCorrige;
    /* remplacer la valeur */
});
/* keyup les plus utiliser lors de la pression sur le clavier. Mais il faut .voir dans la doc. Keypress est devenu obselette */

inputNb2.addEventListener('keyup', function(){
    inputNb2.value = inputNb2.value. replace(',','.');
    /* manière plus courte pour l'écrire */
});
