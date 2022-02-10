'use strict';

// Recup des inputs et le bouton de la page
const inputJour = document.getElementById('inputJour');
const inputMois = document.getElementById('inputMois');
const inputAnnee = document.getElementById('inputAnnee');
const btnVerif = document.getElementById('btnVerif');

// Recup des balises "p" pour afficher le resultat
const reponseMsg = document.getElementById('reponseMsg');
const reponseLendemain = document.getElementById('reponseLendemain');

console.log(inputJour, inputMois, inputAnnee, btnVerif);
console.log(reponseMsg, reponseLendemain);

// Ajout d'un "listener" sur le clique du bouton
btnVerif.addEventListener('click', function () {
    // Recup des valeurs
    const jour = parseInt(inputJour.value);
    const mois = parseInt(inputMois.value);
    const annee = parseInt(inputAnnee.value);
    console.log('Date', jour, mois, annee);

    // Check si les inputs sont des nombres
    const isSaisieOK = !isNaN(jour) && !isNaN(mois) && !isNaN(annee);
    console.log('isSaisieOK', isSaisieOK);

    // Check si la date encodée est valide
    let isDateValide = false;
    let lendemain = null;
    if (isSaisieOK && mois >= 1 && mois <= 12) {
        // 31 -> 1 3 5 7 8 10 12 |    30 -> 4 6 9 11 |    28 ou 29 -> 2

        let limitJourDuMois = 31;
        if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
            limitJourDuMois = 30;
        }
        else if (mois === 2) {
            // Une année est bissextile si elle est divisible par 4, mais elle n'est pas
            // divisible par 100. A l'exception des années qui sont divisibles par 400.
            if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
                limitJourDuMois = 29;
            }
            else {
                limitJourDuMois = 28;
            }
        }

        // Test pour savoir si la date est valide.
        isDateValide = (jour >= 1 && jour <= limitJourDuMois);

        // Calcul de la date du lendemain, si la date est valide
        if (isDateValide) {
            // jour : 30  / mois : 10 / année : 2020    (limitJourDuMois => 31)
            let jourLendemain = jour;
            let moisLendemain = mois;
            let anneeLendemain = annee;

            if (jour < limitJourDuMois) {
                jourLendemain = jourLendemain + 1;
            }
            else {
                jourLendemain = 1;

                if (mois === 12) {
                    moisLendemain = 1;
                    anneeLendemain += 1;  // Equivalent : anneeLendemain = anneeLendemain + 1
                }
                else {
                    moisLendemain++;      // Equivalent : moisLendemain = moisLendemain + 1
                }
            }
            lendemain = `La date du lendemain est ${jourLendemain} / ${moisLendemain} / ${anneeLendemain}`;
        }

    }
    console.log('Indice ♥', isDateValide);

    // Affichage du resultat via les 2 balises "p"
    console.log('isSaisieOK', isSaisieOK);
    reponseLendemain.innerHTML = '';
    if (isDateValide) {
        reponseMsg.innerHTML = 'La date est bien valide :)';
        reponseLendemain.innerHTML = lendemain;
    }
    else if (isSaisieOK) {      // 31 / 02 / 2021
        reponseMsg.innerHTML = 'La date encodée est invalide :(';
    }
    else {                      // Six / Janvier / 2021
        reponseMsg.innerHTML = 'Votre saisie n\'est pas une date valide!';
    }
});

// BONUS - Déactivé le bouton tant que l'utilisateur n'a pas saisie 3 valeurs
btnVerif.disabled = true;

const activationBouton = function () {
    console.log('Test pour le bouton');

    if ((inputJour.value !== '' && inputMois.value !== '' 
            && inputAnnee.value !== '' && inputAnnee.value.length === 4)) {
        // Activation du bouton
        btnVerif.disabled = false;
    }
    else {
        // Déactivation du bouton
        btnVerif.disabled = true;
    }
};

inputJour.addEventListener('keyup', activationBouton);
inputMois.addEventListener('keyup', activationBouton);
inputAnnee.addEventListener('keyup', activationBouton);

activationBouton();  // Pour evité le bug lorsque l'utilisateur actualise l'ecran avec des données