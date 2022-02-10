'use strict';

//recup les inputs et le bouton de la page
const inputJour = document.getElementById('inputJour');
const inputMois = document.getElementById('inputMois');
const inputAnnee = document.getElementById('inputAnnee');
const btnVerif = document.getElementById('btnVerif');

//recup des balises p pour afficher les resultat 
const reponseMsg = document.getElementById('reponseMsg');
const reponseLendemain = document.getElementById('reponseLendemain');

console.log(inputJour, inputMois, inputAnnee, btnVerif);
console.log(reponseMsg, reponseLendemain);


//Ajout d'un "listener" sur le clique du bouton 
btnVerif.addEventListener('click', function () {
    //Recup des valeurs
    const jour = parseInt(inputJour.value);
    const mois = parseInt(inputMois.value);
    const annee = parseInt(inputAnnee.value);
    //permet de recup la valeur et l'afficher dans la console
    console.log('Date', jour, mois, annee);
    //verification si juste

    //check si les inputs sont des nombres
    const isSaisiOK = !isNaN(jour) && !isNaN(mois) && !isNaN(annee);
    console.log(isSaisiOK);



    //Verification des dates

    //check si le jour encodé est valide
    let isDateValide = false;
    let lendemain = null;
    if (isSaisiOK && mois >= 1 && mois <= 12) {
        //regarder quel mois ont 31 jours: 1,3,5,7,8, 10,12 (changement au solsice d'été donc aout est 31)
        //30 jours: 4 6 9 11
        //28 ou 29 : 2
        //On va stocker la limite de jour

        let limitJourDuMois = 31;
        //en let permet de modifier
        if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
            limitJourDuMois = 30;
        }
        else if (mois === 2) {
            //une annee est bissextile si elle est divisible par 4, mais elle n'est pas divisible par 100. A l'exeption des années qui sont divisible par 400.
            if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
                //correction exo année bissextile
                limitJourDuMois = 29;
            }
            else {
                limitJourDuMois = 28;
            }
        }
        //permet de tester si la date est valide
        isDateValide = (jour >= 1 && jour <= limitJourDuMois);
        console.log('Date valide', isDateValide);

        //calcul de la date du lendemain, si la date est valide
        if (isDateValide) {
            //jour:30/mois : 10/année :2020
            //limitJourDuMois => 31
            let jourLendemain = jour;
            let moisLendemain = mois;
            let anneeLendemain = annee;
            //scope?


            if (jour < limitJourDuMois) {
                jourLendemain = jour + 1;
            }
            else {
                jourLendemain = 1;
                if (mois === 12) {
                    moisLendemain = 1;
                    anneeLendemain += 1;
                    //comme si on ecrit anneeLendemain = anneeLendemain+1
                }
                else {
                    moisLendemain++;
                    //encore plus flemard de dire +1
                }
            }
            lendemain = `La date du lendemain est ${jourLendemain} / ${moisLendemain} / ${anneeLendemain}`

        }


    }
    //affichage du resultat via les 2 balises "p"
    if (isDateValide) {
        reponseMsg.innerHTML = 'La date est bien valide :D'
        reponseLendemain.innerHTML = lendemain;
    }
    else if (isSaisiOK) {
        reponseMsg.innerHTML = 'La date encoder est invalide :(';
    }
    else {
        reponseMsg.innerHTML = 'Votre saisie n\' est pas une date valide!';
    }
    console.log('Date valide', isDateValide);
    //parseint garde uniquement le chiffre et le reste il ne le prendra pas en compte.
});

//BONUS - Désactivé le bouton tant que l'utilisateur n'a pas saisie 3 valeurs
btnVerif.disabled = true;
// pour qu'il ne soit pas valide

const activationBouton = function(){
    console.log('Test pour le bouton');

    if((inputMois.value !== '' && inputMois.value !== '' && inputAnnee.value !== ''&& inputAnnee.value.length === 4)) {
    //buton on 
    btnVerif.disabled = false;
}
    else {
    //Buton off
    btnVerif.disabled = true;
}
    //keyup keydown, change, focus et blur onblur
};



inputJour.addEventListener('keyup', activationBouton);
inputMois.addEventListener('keyup', activationBouton);
inputAnnee.addEventListener('keyup', activationBouton);

activationBouton(); //pour eviter le bug lorsque l'utilisateur actualise l'écran avec des données
