'user strict';
//création de tableau: 2 manières
const tab = [];
/* const tab2 = new Array(); la deuxieme */

console.log('Valeur initial', tab);
//methoe push/ on peut deamdner au tableu un push d'une valeur (tab1.push(42), sur variable tableau 1 il va créer une nouvelle case et y mettra une valeur) si on ajoute tab1.push(12); il se placera en dessous du 42. push et pop (pour supprimer). Sinon y a pas de delete en js.

//ajouter des elements en fin de tableau. donc tab.push
tab.push(42);
tab.push(12, 5, 9);

console.log('Arpès le push',tab);

//suppression du dernier element 
const v1 = tab.pop();

console. log('Après le pop',tab);
console.log(`la valeur retiré est ${v1}`);

// ajout de deux element (en debut de tableau)
tab.unshift(5);
tab.unshift(7,9);
console. log('Après le unshift', tab);


//suppression du premier élément 
const v2 = tab.shift();

console.log('Après le shift', tab);
console.log(`La valeur retiré est ${v2}`);

// La modification du tableau avec le splice
//-ajout

tab.splice(3,0, 33);
//1 index, 0 est utiliser pour la suppression (on l'utilise pas pour cette fois) et le troisième le nombre à ajouter 
console.log('Après le splice (en ajout)', tab);


//-Supression 
tab.splice(1,1);
//lre premier est l'indexe et le deuxieme est le nombre de valeurs qu'on veut supprimer. 
console.log('Après le splice (en suppression', tab);
//l'indexe commence par 0. donc la première valeur est considérée dans l'indexe 0. 

//Suppression suivit d'un ajout d'element(plutot 3)
tab.splice(1,3, 100 , -5, 5);

console.log('Après le splice (en suppressionde 3 valeurs) et ajout de 3 elements', tab);

//*********************************************** */

//Opérateur d'acces (donc nom de tableau suivit de [])

  //Recup en lecture
  const v3 = tab[2];
  console.log(`Valeur à l'index 2 est ${v3}`);

  //Operation d'ecriture 
  tab[1] = 42; 
  console.log('Après la modif, le tableau sera', tab);
     // il donc on modifie le 100 pour qu'il mette le 42.
     //tab.lenght pour savoir combien il y a de valeur dans le tableau 


//si on met une valeur plus loin, a la 10 ieme. Js va mettre des cases vide et donne la permission d'ajouter des valuers en sautant des indexes il mettra <5empty slots>. pour lui le tableau vaut 11 mas  = CAS PARTICULIER, IL EST POSSIBLE D'AJOUT D'UN ELEMENT SANS SUIVRE LES INDEXES(creer des position vides)
tab[10] = 88;
console.log('Avec des emplacements vide', tab);

console.log()
//************************************************ */
//creation d'un new tableau
const ducks =['Riri','Donald', 'Zaza'];
console.log('les canards', ducks);

//taille d'un tableau 
const taille = ducks. lenght; 
console.log(`La taille du tableau est de ${taille}`);


//Convertir les valeurs en chaines de caractère
const text1 = ducks.toString();
console.log('text1', text1);

const text2 = ducks.join(' -> ');
console.log('text2', text2);

//fusionner plusieurs tableaux ensemble
const mouse = ['Mickey', 'Minnie'];

    //manieres de fusionner
const fusion1 = ducks.concat(mouse);
const fusion2 = [].concat(ducks, mouse);
const fusion3 = [...ducks, ...mouse]; //ça décompose le tableau et les mets ensemble. Elle est la manière la plus utilisée. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array


console.log(fusion1);
console.log(fusion2);


/********************************************** */

//indexOf, trouver l'index d'un element 

const v4 = fusion1.indexOf('Zaza');
console.log(`Index de 'Zaza' dans le tableau fusion1 -> ${v4}`);
//Renvois -1 si la valeur n'est pas trouvée. 

