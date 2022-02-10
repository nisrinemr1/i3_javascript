'use strict';

const nb1 = document.getElementById('nb1');
const nb2 = document.getElementById('nb2');
const btnCheck = document.getElementById('btnCheck');
const result = document.getElementById('result');

/* ajouter le btn et sa reaction! */
btnCheck.addEventListener('click', function () {
    /* Recup les valeurs */
    const valNb1 = parseInt(nb1.value);
    const valNb2 = parseInt(nb2.value);

    /* Test si le nombre est divisible  */
    const res = Math.floor(valNb1 / valNb2);
    console.log(res);
    const check = valNb2 * res;

    /* const result = nb1 === btnCheck; on va faire avec if */
    if (valNb1 === check) {
        result.innerHTML = `Le nombre ${valNb1} est divisible par ${valNb2}`;
    }
    else {
        result.innerHTML = `Le nombre ${valNb1} n'est pas divisible par ${valNb2}`;
    }
});