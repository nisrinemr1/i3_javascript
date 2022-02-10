const saisieUser = prompt('Veuillez encoder le niveau de la cuve (0 -> 50)');
//recuperer la balise depuis html
const niveauCuve = Number.parseFloat(saisieUser);
//pour que ce qu'on récupere soit uniquement en chiffre

//recupration des elements du DOM en JS
const msgAlert= document.getElementById('msgAlert');
const nvCuve = document.getElementById('nvCuve');

//Verifier si la donée est valide
if (!isNaN(niveauCuve) && (niveauCuve >=0) &&(niveauCuve <=50)) {
    nvCuve.innerHTML = niveauCuve;
}

if (niveauCuve === 0) {
    msgAlert.innerHTML= 'La cuve est vide !';
}
else if (niveauCuve <= 10) {
    msgAlert.innerHTML= 'La cuve est presque vide';
}
else if (niveauCuve === 50) {
    msgAlert.innerHTML= 'La cuve est pleine';
}

else {
    //la valeur du niveau est incorrecte
    msgAlert.innerHTML= 'La valeur encorée est érroné !';
}