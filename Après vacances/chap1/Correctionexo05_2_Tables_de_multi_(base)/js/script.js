'use strict';

const inputMulti = document.getElementById('inputMulti');
const inputNbOp = document.getElementById('inputNbOp');
const btnAfficher = document.getElementById('btnAfficher');
const btnEffacer = document.getElementById('btnEffacer');
const conteneur = document.getElementById('conteneur');

//console.log(inputMulti, inputNbOp, btnAfficher, btnEffacer, conteneur);

btnAfficher.addEventListener('click', function() {
    //Recuperer les infos
    const multi = parseInt(inputMulti.value);
    const nbOp = parseInt(inputNbOp.value);

    //génération de l'element pour faire un titre
    const titreResultat = document.createElement('h3');
    titreResultat.innerHTML = `Table de ${multi}`;

    //génération de la liste 'ul&li' avec les resultats
    const ulResultat = document.createElement('ul');
    for(let compteur = 1; compteur <= nbOp; compteur++){
        const resultat = multi * compteur;

        const li = document.createElement('li');
        li.innerHTML= `${compteur} x ${multi} = ${resultat}`;
        ulResultat.appendChild(li);
    }

    //ajout des elements générer dans le conteneur 
    conteneur.appendChild(titreResultat);
    conteneur.appendChild(ulResultat);

    //Effacer
    inputMulti.value = '';
    inputNbOp.value= '';

});

btnEffacer.addEventListener('click', function(){
    
    while(conteneur.firstElementChild !== null){
        conteneur.removeChild(conteneur.firstElementChild);
    }
});