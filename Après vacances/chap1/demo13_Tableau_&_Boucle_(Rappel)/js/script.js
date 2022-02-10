const tabEntier = [42, 12, -6];


// - Méthode d'ajouter
tabEntier.push(5);          // A la fin
tabEntier.unshift(3);       // En premier
tabEntier.splice(2, 0, 33); // A un index

console.log(tabEntier);


// - Méthode de suppression
const last = tabEntier.pop();           // Le dernier
const first = tabEntier.shift();        // Le premier
const elem = tabEntier.splice(1, 1);    // Via un index

console.log(tabEntier);


// - L'opérateur d'access
const save = tabEntier[1];      // 12
tabEntier[1] = 22;
const val = tabEntier[1];       // 22

tabEntier[100] = 5;

console.log(tabEntier);


// - La méthode « .flat() » (Ne modifie pas le tableau)
// Permet supprimé les tableaux interne
const tabCoord = [[2, 3], [5, 6], [9, 1]];
console.log(tabCoord);

const tabSimplifier = tabCoord.flat();
console.log(tabSimplifier);

// Permet de retirer le vide d'un tableau
const tabVide = [5, , , 2];
tabVide[22] = 12;
tabVide[29] = 42;
console.log(tabVide, `Longeur : ${tabVide.length}`);

const tabClean = tabVide.flat();
console.log(tabClean, `Longeur : ${tabClean.length}`);


// - Exemple de la fonction map
const ducks = ['Riri', 'zaza', 'DoNaLd'];

// Utilisation avec une lamdba (Sera vu plus tard ;) )
const final = ducks.map(duck => duck.toUpperCase());
console.log(final);

// Equivalence avec la boucle for of
const demo = []
for (const duck of ducks) {
    demo.push(duck.toUpperCase());
}
console.log(demo);

/***************************************************/
const people = ['Meryame', 'Charlotte', 'Manon', 'Mounia', 'Barbara'];

console.log(people);
for (let k = 0; k < people.length - 1; k++) {
    for (let i = 0; i < people.length - 1; i++) {

        const personA = people[i].toUpperCase();
        const personB = people[i + 1].toUpperCase();

        // console.log(personA);
        // console.log(personA.charAt(0));  //person[0]

        const lettreA = personA.charAt(0);
        const lettreB = personB.charAt(0);

        if (personA > personB) {
            const temp = people[i];     // necessaire pour eviter une perte de donnée
            people[i] = people[i + 1];
            people[i + 1] = temp;
        }
    }
    console.log(people.join(' > '));
}

// La boucle « for »  -> for(let i = 0, ..., i++) utiliser avec
// l'operateur d'access (tab[]) permet de manipuler le contenu
// d'un tableau (et donc de le modifier)

// Par contre la « for of » -> for(const elem of collection)
// elle ne permet qu'une récuperation en lecture


// La méthode join, permet de transformer un tableau en chaine de
// caractere avec les éléments et un séparateur ;)