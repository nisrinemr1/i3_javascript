//### Chaine de caractere

const text="Ma formation JavaScript à Interface 3 !"
//a l'aid du js et de la chaine de caractere: 


// Obtenir la psition de la premiere lettre "i"

const res01= text.indexOf('i');
const exo01= document.getElementById('exo01');
exo01.innerHTML = `La position vaut ${res01}`;


// Obtenir la lettre à l'index 28 
const res02= text.charAt(28); //alternativ text[28]

const exo02= document.getElementById ('exo02');
exo02.innerHTML= `La lettre est "${res02}`;

// Remplacer "JavaScript" par "PHP"
const res03 = text.replace('JavaScript', 'PHP')

const exo03= document.getElementById ('exo03');
exo03.innerHTML= res03;


//Obtenir l'index de la dernere lettre "a"

const res04 = text.lastIndexOf('a');

const exo04 = document.getElementById('exo04');
exo04.innerHTML= `La position vaut ${res04}`;

//Bonus inverser la chaine de caractere ;)

//soit utiliser la boucle soit les diff methode de java -> changer la chaine de caractere en tableau

//changer en tableau avec split (qui est un séparateur) text.split(''); fera le split entre la jointure entre les lettres! 

const textTab= text.split('');

//Inverser le tableau
const inverseTab= textTab.reverse();

//console on peut mettre texTab.reverse() et mettra le text à l'envers!

// fusionner le tableau en chaine de caractère 
const textInverse= inverseTab.join('')
//dans join, si on retire les simpl quote il met le texte avec les virgules 

// Affichage de la reponse dans le DOM
const exo05= document.getElementById('exo05');
exo05.innerHTML= textInverse;


/************************************************* */

//### Les numériques 

// Ecrire un algo qui permet l'utilisateur d'encoder 
const saisieNb1 =prompt("Veuillez encoder le 1er nombre",0);
//si on ajoute ,0 il affichera directement 0 comme valeur par défaut.
const saisieNb2 =prompt("Veuillez encoer le 2e nombre");
//input toujours saisir en format text
// Il faut d'abord convertir! car sinon il concatène les deux ! 
const nb1= Number.parseFloat(saisieNb1);
const nb2= Number.parseFloat(saisieNb2);


// 2 nombres (via le promt). Afficher sur la page
const elemNb1= document.getElementById('nb1');
const elemNb2= document.getElementById('nb2');
elemNb1.innerHTML = nb1;
elemNb2.innerHTML = nb2;



// Les résultats suivants: 


// - L'addition
const res06= nb1 + nb2;

const exo06 = document.getElementById ('exo06');
exo06.innerHTML = `Le resultat vaut ${res06}`;

// - La soustraction
const res07= nb1 - nb2;

const exo07 = document.getElementById ('exo07');
exo07.innerHTML = `Le resultat vaut ${res07}`;

// - La division reel
const res08 = nb1 / nb2;

const exo08 = document.getElementById ('exo08');
exo08.innerHTML = `Le resultat vaut ${res08}`;

// - La division entiere
//const res09 = Number.parseInt(nb1 / nb2);
const res09= Math.floor(nb1 / nb2);

const exo09 = document.getElementById ('exo09');
exo09.innerHTML = `Le resultat vaut ${res09}`;

// - Le reste de la division entiere
const res10= nb1 % nb2;

const exo10 = document.getElementById ('exo10');
exo10.innerHTML = `Le resultat vaut ${res10}`;

// - (Bonus) si la somme des nombres est paire
const temp = nb1+nb2; 
//const re11= Math.floor(nb1 / nb2) * nb2 == nb1;
const res11= temp % 2 == 0;
//true ne fonctionne pas c'est soit 1 ou 0 pour true or false

const exo11 = document.getElementById ('exo11');
exo11.innerHTML = `Le resultat vaut ${res11}`;

