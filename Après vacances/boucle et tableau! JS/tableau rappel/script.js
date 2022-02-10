const tabEntier = [42, 12, -6];
//comme en php. Les crochets sont plus utilisé

//ajout des elements dans tableau: plusieurs manières:

    //pour les entiers
tabEntier.push(5);//a la fin 
tabEntier.unshift(3); //en premier
tabEntier.splice(2,0,33); //splice(start: numberadd, deleteCount?: the number) avec l'index

console.log(tabEntier);

//Méthode de suppression
tabEntier.pop();  //le dernier supprimer automatique
tabEntier.shift();  //le premier supprimer automatique. pas besoin de mettre quoi que ce soit
tabEntier.splice(1,1); //Via l'index

console.log(tabEntier);

//L'opérateur d'acces (si on modifie le deux: index1)
const save = tabEntier[1]; //12
tabEntier[1] = 22;
//recup la meme valeur: 
const val = tabEntier[1]; //22  //permet de faire une modification fine
tabEntier[100] = 5; //sera undifine

console.log(tabEntier);


//- La methode ".flat()"
// Méthode qui permet de supprimé les tableaux interne 
const tabCoord = [[2,3], [5,6], [9,1]];
console.log(tabCoord);
const tabSimplifier = tabCoord.flat();
console.log(tabSimplifier);

//permet de retirer le vide d'un tableau permet de nettoyer
const tabVide =[5, 2];
tabVide [22]= 12;
tabVide[29] = 42;//y en a 30 et a 4 valeurs
console.log(tabVide, `Longueure de la table est ${tabVide.length}`);

const tabClean = tabVide.flat();
console.log(tabClean, `Longeur : ${tabClean.length}`);
//but du tableau permet de stocker des données et de pouvoir les récuperer