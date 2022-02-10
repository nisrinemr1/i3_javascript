
const a = 13;
const b = 22;
const c = 2;
const d = 42;
const e = 21;
const f = true;
const g = 26;
const h = 3.14;
const i = "42";
const k = "Six";
const name1 = "Riri";
const name2 = "Fifi";
const name3 = "Zaza";
const name4 = "Loulou";
//**************************/








// 1)
const res01 = a > b;
// -> Faux

// 2)
const res02 = (a * c) < b;
// -> Faux

// 3)
const res03 = !(b > e);  
// -> Faux

// 4)
const res04 = c > (b - e);
// -> Vrai

// 5)
const res05 = (a * 2) >= g;
// -> Vrai

// 6)
const res06 = f && (a <= b) && (d/2 === e);
// -> Vrai

// 7)
const res07 = (h * 2) > 6;
// -> Vrai

// 8)
const res08 = Math.floor(e / 2) > (g / a);
// -> Vrai

// 9)
const res09 = (name1 > name2) && (name3 > name4);
// -> Vrai

// 10)
const res10 = (name1 > "Donald") || (name4 > "Balthazar");
// -> Vrai

// 11)
const res11 = (a > c) && !(e > g) && (a % 2 === 0) && !f;
//             true        true         false         false
//              **************
//                    true
//                    *************************
//                             false
//                             ****************************
//                                          false
// -> Faux

// 12)
const res12 = ((d === (e * 2)) || (e > g)) && (d === i);
//                  true           false        false
//                  ********************
//                          true
//                          **************************
//                                      false
// -> Faux

// 13)
const res13 = ((a * 2) > (g / 2)) || f || ((g + b + c) > (d * h));
//               26        13                 50           131.88
//                    true          true            false
//                    ******************
//                          true
//                          *******************************
//                                      true
// -> Vrai

// 14)
const res14 = k > 5;
// Erreur de conversion -> NaN
// -> Faux


// 15) Tester si une valeur est comprise entre 0 et 10
const val15 = 8;

const res15 = (val15 >= 0) && (val15 <= 10);


// 16) Tester si une valeur est positive (1+) mais différente de 42
const val16 = -5;

const res16_1 = (val16 > 0) && (val16 !== 42);
const res16_2 = (val16 > 0) && !(val16 === 42);


// 17) Tester si une valeur texte vaut "Donald" ou "Daisy"
const val17 = "Donald";

const name17 = val17.trim().toUpperCase(); //Supprime les espaces et ca met le texte en majuscule
const res17 = (name17 === "DONALD") || (name17 === "DAISY");


// 18) Tester si une valeur est un multiple de 5 ou 
// un mutiple de 3. Mais sans être un multiple des deux.
const val18 = 15;

// -> XOR
const res18 = ( (val18 % 5 === 0) || (val18 % 3 === 0) ) && !( (val18 % 5 === 0) && (val18 % 3 === 0) );
//                   true                true                      true                 true
//                   *************************                      *************************
//                                true                                        true
//                                                            ***************************************
//                                                                              false
//                                ***************************************************
//                                                     false !


// Alternative pour savoir si un nombre est multiple d'un autre : 
//  Math.floor(val18 / 5) * 5 === val18
//  Math.floor(val18 / 5) === val18 / 5



// 19) Tester si une chaine de charactere ne contient pas les mots : "Bonjour", "Hello", "Salut".
const msg1 = "Bonjour, je m'appel John Smith !";
const msg2 = "Je suis Riri Duck, et je vous dit bonjour <3";
const msg3 = "HELLO, JE SUIS A INTERFACE 3 !!!!"
const msg4 = "Yo! Tu vas bien ?";

const val19 = msg1.toLowerCase();

const aBonjour = val19.indexOf("bonjour") !== -1;
const aHello   = val19.indexOf("hello") >= 0;
const aSalut   = val19.includes("salut");

// On test (en parenthese) si ca contient les mots, et ensuite on inverse le resultat
const res19_1 = !(aBonjour || aHello || aSalut);

// On test la présence (false) de chaque element, les un après les autres
const res19_2 = !aBonjour && !aHello && !aSalut;



// 20) L'utilisateur encode une valeur (type String).
// Verifier si celle-ci est un numerique valide et 
// si c'est le cas, verrifier ensuite que c'est un multiple de 2.

