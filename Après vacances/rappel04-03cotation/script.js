'user strict';

//recup des elements

const prenom = document.getElementById('elevePrenom');
const nom = document.getElementById('eleveNom');
const eleveResult = document.getElementById('eleveResultat');

const btnResult = document.getElementById('btnResult');
const msgResult = document.getElementById('msgResult');


btnResult.addEventListener('click', function () {


    //Traitement du grade
    const cotationEleve = parseFloat(eleveResult.value);

    if (!isNaN(cotationEleve) && cotationEleve >= 0 && cotationEleve <= 20) {

        let grade;
        //c'est ok:
        if (cotationEleve === 20) {
            grade = 'Excelent'
        }
        else if (cotationEleve >= 17) {
            grade = 'Très bien'
        }
        else if (cotationEleve >= 13) {
            grade = 'Bien';
        }
        else if (cotationEleve >= 10) {
            grade = 'Suffisant';
        }

        else if (cotationEleve >= 8) {
            grade = 'Insuffisant';
        }
        else {
            grade = 'Echec';
        }

        msgResult.innerHTML = `Lélève ${prenom.value} ${nom.value} a comme grade "${grade}"`;
    }
    else {
        msgResult.innerHTML = 'Mauvaise saisie :(';
    }
    //Pour effacer les champs!!
    prenom.value = '';
    nom.value = '';
    eleveResult.value = '';
});

//pour le enter, il faut faire avec un formulaire. 