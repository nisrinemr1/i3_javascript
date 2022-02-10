'use strict';

const table2=document.getElementById('table2');
//pour recuprer et l'inserer dans l'html! 

const multiplicateur = 2; 
//car on pourra changer ! si on veut mettre 3 on le remplace à la place du 2



//Solution 1: avec une boucle 'for'
for(let i = 1; i<=10 ; i++){
    //si on met le 0 il calculera la 0 et ça on ne veut pas. Donc i=1
    const resultat = i * multiplicateur;
    console.log(resultat);
    //ce qu'on a fait c'est calculer les resultats. Maintenant on doit créer des elements "li"

    const li = document.createElement('li');
    li.innerHTML = `${i} x ${multiplicateur} = ${resultat}`;

    //Ajouter l'element 'li' dans le 'ul' (->table2)
    table2.appendChild(li);
    //pour que le li soit le child de ul et qu'il soit mit dedaaaans
}


//Solution 2: avec une boucle 'while'
/* let count = 1;
while(count <=10){
    //si on met le 0 il calculera la 0 et ça on ne veut pas. Donc i=1
    const resultat = count * multiplicateur;
    console.log(resultat);
    //ce qu'on a fait c'est  calculer les resultats. Maintenant on doit créer des elements "li"

    const li = document.createElement('li');
    li.innerHTML = `${count} x ${multiplicateur} = ${resultat}`;

    //Ajouter l'element 'li' dans le 'ul' (->table2)
    table2.appendChild(li);
    //pour que le li soit le child de ul et qu'il soit mit dedaaaans
    
    //Incrementation de la valeur du compteur
    count++;
}*/