const people = ['Cake', 'Cacahuète', 'Tiramisu', 'Cookie', 'Cupcake'];

//fonction qui permet de recup les nom de minimum 5 caractère 
const filtre1 = function(tab){
    const resultat = [];

    for(const element of tab){
        if(element.length >= 5){
            resultat.push(element);
        }
    }

    return resultat;
}
const res1 = filtre1(people);
console.log(res1);

// Fonction qui permet de recup les nom qui contient la lettre A

const filter2 = function (tab){
    const resultat= [];

    for(const element of tab){
        if (element.toUpperCase().includes('A')){
            resultat.push(element);
        }
    }
    return resultat;
}

const res2 = filter2(people);
console.log(res2);


// Fonction qui permet de recup les nom qui ne contient pas la lettre O

const filter3 = function (tab){
    const resultat= [];

    for(const element of tab){
        if (!element.toUpperCase().includes('T')){
            resultat.push(element);
        }
    }
    return resultat;
}

const res3 = filter3(people);
console.log(res3);

console.log('----------------------------------');
/* ***************************************** */

//Fonction qui permet de recup les noms sur base d'une condition

const filter = function (tab, callbackFilter){
    const resultat= [];

    for(const element of tab){
        //callbackFilter <- condition du if recu via les parametres
        if (callbackFilter(element)){
            resultat.push(element);
        }
    }
    return resultat;
}
//- Appel pour les noms de 5 caractères au moins 
const res4 = filter(people, function(person){
    return person.length <= 5;
})
console.log(res4);


//- Appel pour les noms qui contient 'R'
const res5 = filter(people, function(person){
    return person.toUpperCase().includes('R');
})
console.log(res5);


//-Appel pour les nom de longueur pair
const res6 = filter(people,(person) => person.length % 2 ===0);
console.log(res6);


//c'est tjs le if qui est modifier ! comme en ligne 41 donc on va remplacer ça par un callback

console.log(people.sort((a, b)=> a < b));//tri croissant
console.log(people.sort((a, b)=> b < a));//tri décroiss



//exemple de cas pratique dans les méthodes existantes
console.log([5,5,6,2,1,0,87,100,78].sort());//tri du nom du caractère
//predicate = callback 
//quand le paramètre contient une fonction c'est donc un callback
console.log([5,5,6,2,1,0,87,100,78].sort((a, b) => a > b));