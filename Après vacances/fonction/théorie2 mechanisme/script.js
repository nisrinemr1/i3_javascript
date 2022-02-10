'use strict';

/* console.log('Start');
setTimeout(()=>{

    console.log('Coucou'); //commence le start,puis le end après seulement le setTimeout

}, 1000);
console.log('End'); */

// Le parametre "callback" (un parametre)qui contient une fonction qui a pour but d'être executer durant le traitement de la fonction principal.

const multi2 = function(nombre, callback){
    //simulation d'une chose qui met du temps(asynchrone)
    setTimeout(()=> {
        console.log('Multi2');
        
        const resultat = nombre * 2;
        /* return resultat; PAS POSSIBLE */
        callback(resultat);//il va declancher la fonction retour
    }, 200);

}

const fct = function(res){
    console.log(`Le resultat est ${res}`);
}
multi2(5,fct);

multi2(2, function(res){
    console.log(`Le resultat est ${res}`);
})

