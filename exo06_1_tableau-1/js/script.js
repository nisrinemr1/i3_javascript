'use strict';

// Stockage des valeurs sous forme de tableau (stockage en JS)
const tableau = [];
const maxTableau = 10;

// Récup des elements du DOM
const formEncoder = document.forms['encoder'];
const btnClearTab = document.querySelector('#btnClearTab');
const displayTab = document.querySelector('#displayTab');

// Le querySelector offre plus d'option, car il utilise un selecteur CSS
document.querySelector('.test p')  // => Le premier element correspondant
document.querySelectorAll('.toto') // => Tout les elements

// Réaction à l'event 'submit' du formulaire
formEncoder.addEventListener('submit', function(event) {
    // Déactivation du comportement du formulaire
    event.preventDefault();

    // Récup de la valeur à ajouter
    const nb = parseInt(formEncoder['inputNumber'].value);

    if(!isNaN(nb)) {
        // Ajout dans le tableau JS (Stockage interne)
        tableau.push(nb);
        console.log(tableau);
        
        // Ajout de la valeur sur la page (Affichage pour l'utilisateur)
        const cell = document.createElement('td');
        cell.innerHTML = nb;
        displayTab.appendChild(cell);
        
        // Vérouillage du submit si on atteint la limite de nombre
        if(tableau.length >= maxTableau) {
            document.querySelector('#btnSubmit').disabled = true;
        }
    }

    formEncoder['inputNumber'].value = '';
    formEncoder['inputNumber'].focus();
});

// Réaction à l'event du "click" sur le btnClearTab
btnClearTab.addEventListener('click', function(e) {
    // Effacer le contenu du tableau JS (Stockage interne)
    tableau.splice(0, tableau.length);
    console.log(tableau);

    // Effacer les valeurs sur la page (Affichage pour l'utilisateur)
    while(displayTab.firstElementChild) {
        displayTab.removeChild(displayTab.firstElementChild);
    }

    // Déactivation du vérouillage du bouton
    document.querySelector('#btnSubmit').disabled = false;
});


// ↓ A vous de faire le reste :)
const displayResult = document.querySelector('#displayResult');
const btnSomme = document.querySelector('#btnSomme');
const btnMoy = document.querySelector('#btnMoy');
const btnMin = document.querySelector('#btnMin');
const btnMax = document.querySelector('#btnMax');
const btnTrie1 = document.querySelector('#btnTrie1');
const btnTrie2 = document.querySelector('#btnTrie2');
const btnTrie3 = document.querySelector('#btnTrie3');
const btnDoublon = document.querySelector('#btnDoublon');
const btnLong = document.querySelector('#btnLong');
const btnLongDoublon = document.querySelector('#btnLongDoublon');

btnSomme.addEventListener('click', function() {
    let somme = 0;
    for (const nb of tableau) {    
        somme += nb;
    }
    console.log(somme);

    // const s2 = tableau.reduce((acc, current) => acc + current, 0);

    displayResult.innerHTML = `La somme des élements du tabeau vaut ${somme}.`;
})

btnMoy.addEventListener('click', function (e) {
    let somme = 0;
    for (const nb of tableau) {    
        somme += nb;
    }
    const avg = somme / tableau.length;
    console.log(avg);

    displayResult.innerHTML = `La moyenne des élements du tabeau vaut ${avg}.`;
})

btnMin.addEventListener('click', function() {
    let min = tableau[0];

    for(let i = 1; i < tableau.length; i++) {
        if(min > tableau[i]) {
            min = tableau[i];
        }
    }
    
    displayResult.innerHTML = `La valeur minimum est ${min}.`;
})

btnMax.addEventListener('click', function() {
    let max = tableau[0];

    for(let i = 1; i < tableau.length; i++) {
        if(max < tableau[i]) {
            max = tableau[i];
        }
    }
    
    displayResult.innerHTML = `La valeur maximum est ${max}.`;
})

btnDoublon.addEventListener('click', function() {
    const tableauSansDoublon = [];                      // 5 6 4 9

    for(const nb of tableau) {                          // 5 6 5 4 5 9
        if(!tableauSansDoublon.includes(nb)){
            tableauSansDoublon.push(nb);
        }
    }
                                                        // 5, 6, 4, 9
    displayResult.innerHTML = `Les valeurs sans doublon sont ${tableauSansDoublon.join(', ')}.`;
});

btnLong.addEventListener('click', function (){

    const nbElement = tableau.length;
    displayResult.innerHTML = `Le nombre d'element est ${nbElement}.`;

});

btnLongDoublon.addEventListener('click', function() {

    // Un ensemble (Set) permet de stocker des valeurs uniques.
    // Contrairement à un tableau, le Set n'est pas indexé.

    const setDoublon = new Set(tableau);
    displayResult.innerHTML = `Le nombre d'element sans doublon est ${setDoublon.size}.`;

});


btnTrie1.addEventListener('click', function() {
    // Copie du tableau
    const tabSort = [...tableau];

    // Trie à bulle
    let nbOperation = 0; 
    let inversion = true;
    console.log(tabSort);

    for(let i = 0; inversion && i < tabSort.length - 1; i++) {

        console.log('-----------');
        inversion = false;
        for(let k = 0; k < (tabSort.length -1 -i); k++) {
            
            if(tabSort[k] > tabSort[k+1]) {
                const temp = tabSort[k];
                tabSort[k] = tabSort[k+1];
                tabSort[k+1] = temp;
                inversion = true;
            }
            
            nbOperation++;
            console.log(tabSort);
        }
    }

    displayResult.innerHTML = `Trie à bulle ${tabSort.join(' > ')} en ${nbOperation} opérations.`;
});

btnTrie3.addEventListener('click', function() {

    const tabSort = [...tableau];

    tabSort.sort(function(a, b) {
        return a > b;
    });

    displayResult.innerHTML = `Trie via le sort ${tabSort.join(' > ')}`;
})
//coucou