'use strict';

/**
 * Demo d'une fonction avec un callback
 * @param {string} message Le texte à afficher 
 * @param {(string) => void} callback Le callback qui traite le message 
 */

/* const demoCallback = function(message, callback){
    //Test de garde 
    if(!callback || typeof(callback) !== 'function'){
        throw new TypeError('Un callback est nécessaire!');
    }
    //prompt pour lui demander un message
    const reponse = prompt(message);
    //modal? 

    //déclanchement un callback pour manipuler la réponse
    callback(reponse);

}

demoCallback('Vueillez entrer un message', function(text){
    const displayText = text.toUpperCase();
    console.log(displayText);
});

demoCallback('Vueillez entrer un nombre', function(number){
    //traitement 
    const displayValue = parseInt(number);
    if(isNaN(displayValue)){
        console.log('La valeur n\'est pas valide!');
    }
    else{
        console.log(`La valeur est ${displayValue}`);
    }
}); */