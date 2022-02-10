'user strict';

const ducks = ['Donald', 'Della', 'Zaza', 'Riri', 'Loulou', 'Gontran'];

const result = document.getElementById('result');

for(let i = 0 ; i < ducks.length ; i++){
    //recuperation d'un element via l'index
    const duck = ducks[i];
                 //tableau

    //on creer notre balise 'li'
    const elemLI = document.createElement('li');
    elemLI.innerHTML = ducks[i];

    result.appendChild(elemLI);
}
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

console.log('Boucle while');
let j = 0;
while(j < ducks.length){
    const elem = ducks[j];
    console.log(`Index ${j} -> ${elem}`);
    
    j++;
}

//*************************************** */
//Les boucles

//reaction du DOM (console): Boucle while script.js:23:9
/* Index 0 -> Donald script.js:27:13
Index 1 -> Della script.js:27:13
Index 2 -> Zaza script.js:27:13
Index 3 -> Riri script.js:27:13
Index 4 -> Loulou script.js:27:13
Index 5 -> Gontran script.js:27:13 */

/* for(const index in ducks){console.log(typeof (index)); console.log(`${index} => ${ducks[index]}`)}
string debugger eval code:1:35
0 => Donald debugger eval code:1:64
string debugger eval code:1:35
1 => Della debugger eval code:1:64
string debugger eval code:1:35
2 => Zaza debugger eval code:1:64
string debugger eval code:1:35
3 => Riri debugger eval code:1:64
string debugger eval code:1:35
4 => Loulou debugger eval code:1:64
string debugger eval code:1:35
5 => Gontran debugger eval code:1:64
undefined *///ancienne boucle. mais on va utiliser : for(const element of)


for(const element of ducks){
    console.log(element);
}

/* for(const element of ducks){console.log(element);}
Donald debugger eval code:1:37
Della debugger eval code:1:37
Zaza debugger eval code:1:37
Riri debugger eval code:1:37
Loulou debugger eval code:1:37
Gontran debugger eval code:1:37
undefined
 */

duck.forEach(function(element,index){
    console.log (`${index} -> ${element}`)
})