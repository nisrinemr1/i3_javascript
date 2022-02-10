// Recup des elements du DOM
const baliseNb = document.getElementById('nb');
const baliseResult = document.getElementById('result');

// Saisie utilisateur
const saisieUser = prompt('Veuillez entrer un nombre entier');
const nb = Number.parseFloat(saisieUser);

// On test si le nombre est valide 
if(!isNaN(nb)) { // -> Notre condition : Ce n'est pas un nombre invalide

    // Modifier le DOM pour afficher le nombre de l'utilisateur
    baliseNb.innerHTML = nb;

    // Traitement -> Trouver si le nombre est paire ?
    const estPaire = nb % 2 === 0;

    if(nb === 0) {
        // Si la condition est OK, on fait :
        baliseResult.innerHTML = 'Le nombre vaut zero !';
    }
    else if(estPaire) {
        // Sinon, si la 2e condition est OK, on fait :
        baliseResult.innerHTML = 'Le nombre est paire';
    }
    else {
        // Sinon, on fait :
        baliseResult.innerHTML = 'Le nombre est impaire';
    }  
    
}
else {      // -> Si le nombre est invalide
    baliseResult.innerHTML = 'La valeur saisie n\'est pas valide';
}
