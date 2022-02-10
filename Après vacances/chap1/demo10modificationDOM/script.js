'user strict';
//Création d'un element
const baliseText = document.createElement('p');
baliseText.innerHTML = 'Hello World';
baliseText.id ='Demo';

// ajout de la balise p dans la page web
//recup container
const container = document.getElementById('container'); //il faudra utiliser l'appenchild
container.appendChild(baliseText);
//resultat:
/* div#container>p{Hello World} */

//Création d'un secon element 
const baliseDiv = document.createElement('div');
baliseDiv.innerHTML ='Saluuut :D';

//pour qu'elle s'affiche avant balise text: 
container.insertBefore(baliseDiv, baliseText);
//absolument que ce soit enfant! 
//resultat
/* div#container>div{Saluuuuut :D} + p>Hello World  */

/*************************************/

const baliseUL = document.createElement('ul');
container.appendChild(baliseUL);
//afficher un compteur de 1 à 5
for(let compteur = 1; compteur <= 5; compteur++){
    const baliseLI = document.createElement('li');
    baliseLI.innerHTML = `Element ${compteur}`;

    baliseUL.appendChild(baliseLI);

}

//manipuler les boucles ! faire une operation et la montrer uniquement ! 