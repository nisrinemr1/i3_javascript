'use strict';
//pas utiliser le min et le max!

//pour stocker les valeurs sous forme de tableau :(stockage en js) 
const tableau = [];
const maxTableau = 10;
let somme = 0; //vu qu'on va le modif, let!!!!!
let moyenne = 0;
let plusGrand = [0];
let plusPetit = [0];

const formEncoder = document.forms['encoder'];
//meilleur!!!
/* const btnClearTab = document.getElementById('btnClearTab') : autre moyen = querySelector! */
const btnClearTab = document.querySelector('#btnClearTab'); //pour supprimer ce qu'il y a dans l'input
const displayTab = document.querySelector('#displayTab');
//Le querySelector offre plus d'option, car il utilise un selecteur css (on peut mettre dans les parenthèses comme on ecrit dans css!)
document.querySelector('.test p'); // -> le premier element correspondant 
document.querySelector('.toto'); // -> tout les elements qui ont la classe toto
const btnTrier = document.getElementById('btnTrier');
const btnSomme = document.getElementById('btnSomme');
const btnMoyenne = document.getElementById('btnMoyenne');
const btnMin = document.getElementById('btnMin');
const btnMax = document.getElementById('btnMax');
const btnLongueur = document.getElementById('btnLongueur');
const btnTrier2 = document.getElementById('btnTrier2');
const btnTrier3 = document.getElementById('btnTrier3');
const btnDoublon = document.getElementById('btnDoublon');
const btnLong = document.getElementById('btnLong');
const btnLongDoublon = document.getElementById('btnLongDoublon');


const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');
const message3 = document.querySelector('#message3');
const message4 = document.querySelector('#message4');
const message5 = document.querySelector('#message5');
const message6 = document.querySelector('#message6');
const message7 = document.querySelector('#message7');
const message8 = document.querySelector('#message8');
const message9 = document.querySelector('#message9');
const message10 = document.querySelector('#message10');


//reaction à l'event 'submit' 
formEncoder.addEventListener('submit', function (event) {
  //desactivation du comportement du form
  event.preventDefault();

  //Recup de la valeur à ajouter 
  const nb = parseInt(formEncoder['inputNumber'].value);

  if (!isNaN(nb)) {
    //Ajout dans le tableau js (stockage interne
    tableau.push(nb);
    console.log(tableau);

    //ajout de la valeur sur la page (affichage pour utilisateur)
    const cell = document.createElement('td');
    cell.innerHTML = nb;
    displayTab.appendChild(cell);

    //Verrouillage du submit si
    if (tableau.length >= maxTableau) {
      document.querySelector('#btnSubmit').disabled = true;
    }
  }
  formEncoder['inputNumber'].value = '';
  formEncoder['inputNumber'].focus();
})

//reaction à l'event du "click" sur le btnClearTab
btnClearTab.addEventListener('click', function (e) {
  //Effacer le contenu du tableau JS (stockage interne)
  tableau.splice(0, tableau.length); //pour touuuut supprimer
  console.log(tableau);
  //effacer le contenu visuel (affichage utilisateur) -> effacer le contenu du tr
  //displayTab.innerHTML = "";//pas boooon parce que html doit réintepreter. Le mieux serait de faire une boucle
  while (displayTab.firstElementChild) {
    displayTab.removeChild(displayTab.firstElementChild);
  }
  //le probleme, c'est que après avoir mit les dix et que je supprime, il bloque
  document.querySelector('#btnSubmit').disabled = false;//comme ça désactive le verouillage du bouton. si je met true, il sera activ!!!!!!! :/
})


btnSomme.addEventListener('click', function () {
  console.log("panda");
  for (let i = 0; i < tableau.length; i++) {
    console.log("yay");
    somme = somme + tableau[i];
    console.log("something");
  }
  message1.innerHTML = `La somme du tableau vaut: ${somme}`;
  console.log(somme);
});

btnMoyenne.addEventListener('click', function () {
  console.log("moyen");
  for (let i = 0; i < tableau.length; i++) {
    somme = somme + tableau[i];
    moyenne = somme / tableau.length;
    console.log(moyenne);
  }
  message2.innerHTML = `La moyenne est : ${moyenne}`;
});

btnMin.addEventListener('click', function(){
  for (let i = 0; i < tableau.length; i++){
    if(tableau[i]< plusPetit){
      plusPetit = tableau[i];
      console.log("I am petit");
    }
    message3.innerHTML = `Le min est : ${plusPetit}`;
  }
});

btnMax.addEventListener('click', function () {
  for (let i = 0; i < tableau.length; i++) {
    console.log("coucou");
    if (tableau[i] > plusGrand) {
      plusGrand=tableau[i];
    }
    message4.innerHTML = `Le max est: ${plusGrand}`;
  }
});

//tri à bulle
btnTrier.addEventListener('click', function () {
  const tabSort = [...tableau]; //Copie du tableau!
  let nbOperation = 0;
  let inversion = true;  //pour montrer qu'il y a eu inversion 
  console.log(this.tabSort);

  for (let i = 0; inversion && i < tabSort.length-1 ; i++) {
    for (let j = 0; j < (tabSort.length-1 -i); j++) {

      if (tabSort[j] > tabSort[j+1]) {
        const temp = tabSort[j];
        tabSort[j] = tabSort[j + 1];
        tabSort[j + 1] = temp;
        inversion = true;
      }
      nbOperation++;
    }
    message5.innerHTML = `Le tableau est: ${tabSort.join(' > ')}, nombre d'opération: ${nbOperation}`;
  }
});

//trie par insertion
btnTrier2.addEventListener('click',function(){
  //copie du tableau 
  let tabSort = [...tableau];

  //Trie par insertion 

  //Parcourir le tableau 
  // -> Pour chaque valeur, on va comparrer au valeur précédente: 
  //   * 1er element : pas toucher (donc i=1 pas 0 vu qu'on touche pas au premier)
  //   * En cas de plus petit que l'elem précedent, on le met à la bonne position
  //      > ce qui veut dire qu'il faudra le stocker dans une variable temporaire
  //      > rechercher la position de l'elem (il faudra faire une autre boucle)
  //      > on retire la valeur (avec le splice)
  //      > on l'insert à la bonne position
  //   * Si elem plus grand, pas toucher 

  let nbOperation = 0;
  // -> Pour chaque valeur, on va comparrer au valeur précédente:
  console.log('--------');
  for(let i = 1; i < tabSort.length; i++){


    //   * En cas de plus petit que l'elem précedent, on le met à la bonne position
    if(tabSort[i]< tabSort[i-1]){
      //  > ce qui veut dire qu'il faudra le stocker dans une variable temporaire
      const target = tabSort[i];
      
      //   > rechercher la position de l'elem
      let position = i-1; 
      // si elem ciblé est toujours plus petit :
      while(position > 0 && target < tabSort[position -1]){
        position--;

        nbOperation++;
        
      }
      
      console.log(`position ${position}`);//ça c'est pour débuger!!!!
      
      //      > on retire la plus petite valeur (avec le splice)
      tabSort.splice(i,1);

      //      > on l'insert à la bonne position
      tabSort.splice(position,0,target);
          //on va ajouter dans tab sort, on retrouve la bonne position, on surpprime rien et on ajoute valeur dans le target

          nbOperation++;

    }
    console.log(tabSort);
  }
  message6.innerHTML = `Le tri par insertion est: ${tabSort.join(' > ')}, nombre d'opération: ${nbOperation}`;
})



//tri insert message9
btnTrier3.addEventListener('click', function(){
  const tabSort = [...tableau];

  tabSort.sort(function(a,b){
    return
  });

  message9.innerHTML = `Tri à bulle avec le sort ${tabSort.join(' > ')}`;

});


//tri Array.sort message10


//doublon
btnDoublon.addEventListener('click',function(){
  //collection de valeurs sans doublons
  const tableauSansDoublon =[];

  //for of permet de parcourrir toutes les valeurs!
  for(const nb of tableau){
    if(!tableauSansDoublon.includes(nb)){//si val dans tableau n'est pas dedans
      tableauSansDoublon.push(nb); //on l'inclut! 
    }
  }
  message6.innerHTML = `Les valeurs sans doublon sont : ${tableauSansDoublon.join(', ')}`;
});

btnLong.addEventListener('click', function(){
  const nbElement = tableau.length;

  message7.innerHTML = `Le nombre d'element est ${tableau.length}.`;
});

btnLongDoublon.addEventListener('click', function(){
  //collection des set c'est un ensembl. l'objectif est de stocker des val unique au fur et a mesur. Il y a plusieurs methode: mdn 
  const setDoublon = new Set(tableau);

  message8.innerHTML = `Le nombre d'element sans doublon est ${setDoublon.size}.`
});



/* const inputNumber =document.getElementById('inputNumber');
const btnAjouter= document.getElementById('btnAjoute');
const textAjout= document.getElementById('textAjout');


const btnTableau = document.getElementById('btnTableau');
const btnTrier = document.getElementById('btnTrier');
const btnSomme = document.getElementById('btnSomme');
const btnMoyenne = document.getElementById('btnMoyenne');
const btnMin = document.getElementById('btnMin');
const btnMax = document.getElementById('btnMax');
const btnLongueur = document.getElementById('btnLongueur');
const message1 = document.getElementById('message1');

const tableau = [];

btnAjouter.addEventListener('click', function(){
    //permet de récuperer les valeurs dans input
    const number = parseInt(inputNumber.value);
    console.log(number);

    //Verifier si ce qui est encodé est valide:
    const isSaisiOk = !isNaN(number);
    if (isSaisiOk) {
        textAjout.innerHTML = `Vous avez ajouter ${number}`;
        //.value pcq c'est un element html
        tableau.push(number);
    }
    else{
        textAjout.innerHTML = `Votre saisie est incorrecte! 😡`;
    }
    btnTableau.addEventListener('click', function(){
        message1.innerHTML = `Votre tableau contient ${tableau}`;
      });

    btnTrier.addEventListener('click', function() {
      for(i=0; i<tableau.length-1; i++){
        if(tableau[i]>tableau[i+1]){
          var temp = tableau[i];
          tableau[i] = tableau[i+1];
          tableau[i+1] = temp;
        }
        message2.innerHTML= `Le tableau est: ${tableau}`;
      }
    });



}); */



