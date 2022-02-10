console.log("Hello");
//  ### LES OPERATIONS ###


//### - Opérateurs d'Egalité! 


// Operateur double-egale VS triple-egale
//-> La double-egalitétste le contenu (sans prendre en compte le type de donné)
// Le JS effectue des conversion pour pouvoir réaliser ses l'égalité

//RISQUE DE "SUPRISE"

const t1= (0 == "0"); //true
const t2= (0 == []);  //true
const t3= ([] == "0");  //false :O car chaine de caractère 
//double egalité: tout ça pas bien!!!!!

// Note: l'utilistion d'une double-égalité est à éviter.


//-> triple-égalité teste en premier le type de donnée, puis tester la val si c'est du même type ! ce qui évite tous les soucis du dessus et donc mettra false!

const t4 = (0=== "0") //false
const t5 = ("42"=== (20+22)) //false car parenthèse est en string
const t6= (42 === (20+22)) // true (-> car même donnée);

//les conpères des égalité: les différences. 

// Les opérateur de différence permet de voir si les contenues sont diff

//ce qui est à EVITER!: 
//const t7= (42 != (20+22));
const t7= (42 !== (20+22));
//car 3 caractères! le premier caractère meme si c'est pas =, c'est !
const t8 = !(42=== (20+22));
//c'est aussi bien 

//-> Test de grandeur! 
//se base sur les operateur ascii 

// -> Les operateurs de comparaison sont: > , < , >= , <=
//fonctionnent sur nb et sur ls chaîns de caractère



// ### Comparaison
const c1= 42 > 20; //true 

// -> y aura une conversion implicite string vers "number" mais s'en sort. 
const c2= 20 < "13"; //false ps: pas une bonne pratique.
const c3= 20 > "13"// true 

// -> Si conversion échoue,  il envoie NaN, donc donne false car NaN est toujours false. 
const c4= 20>"Six"; // false
//pour pouvoir la tester c'est uniquement avec le isNaN!

// -> Comparaison de 2 chaînes de caractères 
const c5 = "Riri" > "Zaza"; //false
const c6 = "Riri" < "Zaza"; // true 
// enfaite Z est supérieur que R dans l'ordre de l'alphabétisation


//BONUS
const c7 = "riri" > "Zaza"; //true à cause de la cass! 
//regarder le ascii!
//Les maj sont plus petit que la minuscules dans l'ascii!!!
//"toUpperCase()" et "toLowerCase()" pour tout grandir les lettres ou ratrécir. 

// ascii est donc dans l'ordre alphabétique. 

//Exemple
const text1 = "Zaza" //via un prompt (par exemple);

const c8 = "riri"> text1.toLocaleLowerCase();

//ordonner le nom via l'ordre alphabetique, permet de faire des filtres pour trouver les éléments

// les trois sont totalement liés



//### OPERATEUR DE LOGIQUE ###

//Permet de combiner des resultats boolean donc permet de comparer ce que l'utilisateur nous donne. Il y en a déjà un de fait.

// -> Négation (EN JS : !) : Inverser le resultat
// Tester si la val n'est pas sup à 10
const valeut = 42; 

const 11 = !(valeur > 10); //false 
//pour avoir l'Equivalent à "valeut <= 10" le mieux est e 
//tant que la comparaison n'est pas supérieur à 10 vrai en gros! 


// -> ET (EN JS : &&) 
// Si les 2 valeurs boolean sont vrai, le resultat est vrai! 

//exemple : encoder une valeur entre 10 ET 20
const valeur2 = 13;

const 12= (valeur2 >= 10) && (valeur2 <=20); //true 

const valeur3 = 23;

const 13= (valeur3 >= 10) && (valeur3 <=20); //false


// -> OU (EN JS: ||) [OU  inclusif]
// Si au moins une des valeurs est vrai, le résultat est vrai! 

//Exemple : encoer une valeur égale à 13 ou 42 
const valeur4 = 22;

const 14= (valeur4 === 13) || (valeur4 > 42); 
//const 14= (valeur4 === 13) || (valeur4 > 42);  donnera toujours false peut importe ce que le client met. Donc sera toujours false 

//PAS DE XOR EN JS! Sinon le faire sois-même avec des || ou &&
// Ou inclusif (OU ||) on peut prendre les deu 
// Ou exclusif (aka 하라버지 XOR!), c'est soit l'un soit l'autre mais jamais les deux ! Si une condition est vrai et que l'autre est faux, xor met vrai 
// mais si la valeur est vrai dans les deux cas, xor mettra false

// exemple : encoder une valeur qui est soit multiple de 2 ou de 3
const valeur5= 42;

const = (valeur5 %2 === 0) || (valeur4 %3===0); //true car 42 multiple de 2 mais pas de 3 ! ps: reflechis un peu plus !! 
