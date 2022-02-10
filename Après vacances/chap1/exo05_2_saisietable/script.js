'user strict';

const nb1 = document.getElementById('saisieTable');
const nb2 = document.getElementById('saisieOperation');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){

    const nb1 = parseInt(nb1.value);
    const nb2 = parseInt(nb2.value);

    console.log('Saisie', nb1,nb2);
    //verification si juste

    //check si les inputs sont des nombres
    const isSaisiOK = !isNaN(nb1) && !isNaN(nb2);
    console.log(isSaisiOK);

    for(let i = nb1; i<=10 ; i++){
        //si on met le 0 il calculera la 0 et ça on ne veut pas. Donc i=1
        const resultat = i * multiplicateur;
        console.log(resultat);
        //ce qu'on a fait c'est calculer les resultats. Maintenant on doit créer des elements "li"
    
        const li = document.createElement('li');
        li.innerHTML = `${nb1} x ${multiplicateur} = ${resultat}`;
    
        //Ajouter l'element 'li' dans le 'ul' (->table2)
        table2.appendChild(li);
        //pour que le li soit le child de ul et qu'il soit mit dedaaaans
    }

})
