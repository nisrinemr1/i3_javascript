'use strict';
//while: Elle teste une condition
//       si le resultat est "vrai", elle execute le code.
//       ensuite, elle recommence le test
console.log(' - Boucle While');

let nb = 1; 
 
while (nb <= 5){
    console.log(nb);
    nb = nb + 1;
}
//Deffensible 

/**************************************/

// DO ... While => elle execute le code 
//                  Teste la condition 
//                  Si le resultat est vrai, elle recommence. 
// Code est toujours executer au moins une fois 
// pour demander a utilisateur un nombre et redemander si pas reponse


console.log(' - Boucle Do...While');
let nb2 = 1;

do{
    console.log(nb2);
    nb2 += 1;
} while(nb2 <= 5);


/**************************************/

//Structure de la boucle for : 
//boucle avec plusieurs bloc 
//for(Initialisation; Conditiion; Opération d'incrémentation) {... avec d'autre types d'opération dedans}
//si je veux afficher ma valeur de 1 à 5 
console.log(' - Boucle For');

for(let nb3 = 1; nb3<= 5; nb3++){
    console.log(nb3);
}
// fais la meme chose que le while, c'est son fonctionnement avec des opération intégrer dans la structure 
// c'est le fonctionnement d'une boucle while avec: 
//-une initialisation réaliser avec la boucle première
//-une opération qui s'execute après l'execution du code.
