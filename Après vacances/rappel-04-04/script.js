'user strict';

//recup element du dom
const inputTemperature = document.getElementById('inputTemperature');
const btnRecherche = document.getElementById('btnRecherche');
const msgResultat = document.getElementById('msgResultat');

btnRecherche.addEventListener('click',function(){

    const temp = parseFloat(inputTemperature.value);

    let msg;

    switch (true) {
        case isNaN(temp):
            msg = 'La valeur est incorrect :(';
            break;
        case (temp > 0 && temp < 100):
            msg = `Etat liquide à ${temp} °C`;
            break;
        case (temp >= 100):
            msg = `Etat gazeu à ${temp} °C`;
            break;
        default:
            msg=`Etat solide à ${temp} °C`;
            break;
    }

    msgResultat.innerHTML= 'Le resultat est : '+msg;

    inputTemperature.value='';
    inputTemperature.focus();
    //pour remettre le curseur sur l'input
});