
//intro au fonction 
// - Déclaration d'une fonction
function demoFonctionIntro(firstname, lastname /* argument */){
    console.log(`Bonjour ${firstname} ${lastname}!`);
}

// - Utilisation d'une fonction 

demoFonctionIntro('Riri', 'Duck');

/* *********************************** */

//créer une variable et y mettre une fonction pour éviter qu'un code écrase un autre

// - Déclaration de fonction sous forme de variable

const demoFonctionVariable = function(firstname, lastname){
    console.log(`Salut ${firstname} ${lastname}`);
}

demoFonctionVariable('Zaza', 'Vanderquack');


/* ************************* */


// 2 type de "méthode" : Procedure VS Fonction 
// - Comportement 'Procedure ; executer un block de code sans devoir obtenir un resultat

const demoProcedure = function(){
    //block de code
    console.log('Ceci est une procédure');
}

// - Comportement 'Fonction': Execution de code dans l'attente de retour de resultat
const demoFonction = function(nombre1, nombre2){
    //addition entre deux nombres 
    console.log('Ceci est une fonction')
    const resultat = nombre1 + nombre2;

    //la fonction doit obligatoirement renvoyer un resultat 
    return resultat;
}

// - Utilisation de celles-ci
demoProcedure();
const res = demoFonction(22, 20);
console.log(`Le resultat obtenu via la fonction est ${res}`);


/* 
En JS on parle toujours de fonction peu importe le comportement réalisé (donc fonction qui ne renvoie rien est une procédure)
*/