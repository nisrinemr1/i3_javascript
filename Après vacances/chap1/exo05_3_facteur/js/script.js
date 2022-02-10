'use strict';

//recup les noeuds HTML (a revoir avec la dif des childrend et nodChildren)
const inputNb = document.getElementById('inputNb');
const btnCalc = document.getElementById('btnCalc');
const conteneur = document.getElementById('conteneur');

//forcer le focus sur l'input
inputNb.focus(); 

//ajout d'un event sur le click du bouton 
btnCalc.addEventListener('click', function(){
    //recupération du numbre saisie par le user
    const nb = parseInt(inputNb.value);

    //Calculer la factorielle
        // 4=>24 = 1 * 2 * 3 * 4
        //avantage: en commançant par 1 restera toujours 1 
        //r => 1
        // 

        let resultat = 1;
        let compteur = 2;

        while(compteur <= nb){
            resultat = resultat * compteur;
            compteur++;
        }
        console.log(`La factorielle de ${nb} donne ${resultat}`);

        //ok for, ok while mais pas le do while 

        //afficher sur le site: 
        const elem = document.createElement('p');
        elem.innerHTML= `${nb}! = ${resultat}`; 

        // - Ajoute l'elem dans le DOM
        if(conteneur.firstElementChild !== null){
            //premier ajout : 
            conteneur.insertBefore(elem, conteneur.firstElementChild)
        }
        else{
            conteneur.appendChild(elem); 
            }
    
        

    //TODO Afficher sur le site



    //Effacement du contenu de l'input et demande le focus 
    inputNb.value='';
    inputNb.focus();

});