// Recuperation des éléments du DOM
const inputUser = document.getElementById('inputUser');
const btnValid = document.getElementById('btnValid');
const displayResult = document.getElementById('displayResult');

// Pour récuperer la valeur de l'input -> inputUser.value+

// Ecouté l'evenement "click" sur le bouton
btnValid.addEventListener('click', function() {
    console.log("Click !!!");

    // ↓ Lecture de l'input (ici, avec un parseInt)
    const valueUser = Number.parseInt(inputUser.value);

    // ↓ Votre traitement
    if(isNaN(valueUser)) {
        displayResult.innerHTML = 'Valeur érroné!';
    }
    else if(valueUser % 2 === 0) {
        displayResult.innerHTML = `La valeur ${valueUser} est paire`;
    }
    else {
        displayResult.innerHTML = `La valeur ${valueUser} est impaire`;
    }

    // ↓ Si on souhaite effacer une input (après son utilisation)
    inputUser.value = "";
});