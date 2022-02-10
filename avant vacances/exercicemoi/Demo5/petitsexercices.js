// objectif : faire des comparaisons. dire si c'est bon ou pas

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
const name3 =  "Zaza";
const name4 = "Loulou";


const res1  = a > b;
//13 > 22: false! 


const res2 = (a * c) < b;
//le mieux est de mettre des parenthèses
// (13 * 2) < 22 : false ... 13 * 2 est 26 


const res3 = !(b > e);
// !(13 >21): false du au ! 

const res4 = c > (b - e);
//2 > (22 - 21): true

const res5 = (a * 2) >= g;
// (13*2) >= 26: true 

const res6 = f && (a <= b) && (d/2 === e);
// true && (13 <= 22)true && (42 <= 22)true: true && true && true : true étant donné que 2 sont true parmis les 3 

const res7 = (h * 2) > 6; 
//(3.14 * 2)>6: true pcq 6,28


const res8 = Math.floor(e / 2) >(g / a)
//math.floor c'est pour coco division
//( 21 / 2 )(10,6) > (26/13): 10 > 2: true 
//math.floor qui arrondi! 


const res9 = (name1 > name2) && (name3 > name4);
//(Riri > Fifi) && (Zaza > Loulou) : 
//table d'encodage des caractère acii
// true && True: true!

const res10 = (name1 > "Donald") || (name4 > "Balthazar");
//Riri > Donald || Loulou > Balthazar : true || true: true 
//il test d'abord par les premières lettres

const res11 = (a > c) && !(e > g) && (a % 2 === 0) && !f;
//(13 > 2) && !(21 > 26) && (13 % 2(1) === 0) && !true : 
//faslse && !false (devient vrai)  && false && !true aka false : FALSE
//correction: true && true && false && false 
//                  true 
//                                  false
//                                          false
// = false

const res12 = ((d === (e * 2)) || (e > g)) && (d === i);
//(42 === (21 * 2)) || (21 > 26) && (42==="42"):
//true number OU false number ET  false car string 
// true || false donne true 
// true ET false = false

const res13 = ((a * 2) > (g / 2)) || f || ((g + b + c) > (d * h);
//(26 > 13) OU  true boolean OU  ((26 + 22 + 2) 42 * 3.14 (131.88): true OU true boolean OU TRUE number

//true          true        false 
//         true 
//                      true carOU! PC PREND PAS EN COMPTE LA TROISIÈME
// TRUE 



const res14 = k > 5;
//"Six" > 5 : NaN ! car erreur de conversion! il va vouloir faire une conversion en nombre. ça ira mal donc si on le met dans la console 




// 15) Tester si une valeur est comprise entre 0 et 10
const val15 = 8;

const res15 = (saisie >= 0) && (saisie <= 10);
// j'y était presque mdrrrr allahy bariik!


// 16) Tester si une valeur est positive mais différente de 42
const val16 = -5;

const res16 = (val16 > 0) && (val16 !==42);
//const res16 = (val16 > 0) && !(val16 ===42);


// 17) Tester si une valeur texte est egale à "Donald" ou "Daisy"
const val17 = "Zaza";

const res17 = (val17 .trim().toUpperCase()=== "Donald") || (val17.toUpperCase() === "Daisy"); // si on retire le deuxième val17, ce ne sera pas faux, mais fera une valeur par défaut. ||
// ".trim()" retire les espaces! 

//pour simplifier: 
const name17= val17.trim().toUpperCase();

const res17= (name17 === "DONALD") || (name17 === "DAISY");



// 18 Tester si une valeur est un multiple de 5 ou un mutiple de 3. Mais sans être un multiple des deux.
const val18= 21; 

const res18 = ((val18 % 5 === 0) || (val18 % 3=== 0) && !((val18 % 5=== 0)) && (val18 %3 === 0)); 
// il devient donc un xor
// pour raccourcir il faut mettre celles qui sont répétitive
const val18= 15;

const estUnMultipleDeTrois = (val18 %3 === 0);
const estUnMultipleDeCinq = (val18 % 5 === 0);



//19 Tester si une chane de charactere ne contient pas les mot: "Bonjour", "Hello", "Salut".
const msg1 = "Bonjour, je m'appel John Smith!";
const msg2 = "Je suis Riri Duck, et je vous dit bonjour <3";
const msg3 = "HELLO, JE SUIS A INTERFACE 3!!!"
const msg4 = "Yo! Tu vas bien ?";

const val19 = msg3.toLowerCase();

const aBonjour = val19.indexOf("bonjour") !== -1
// -1 quand je trouve pas
const aHello = val19.indexOf("hello") >=0;
//supp ou égale à 0 pour eviter le -1
//indeOf est bien ! mais il y a un autre moyens! 
const aSalut = val19.includes("salut");
// se trouve dans le routeur du site

const res19 = !(aBonjour || aHello || aSalut);
//mon message est à l'inverse de ceux là 
const res19 = !aBonjour && !aHello && !aSalut;
//deux méthodes pour le faire! ou est un && avec point ! en varible avec un  ou et parenthese



//20 L'utilisateur encode une valeur (type String). Verifier si celle-ci  est un numérique valide et si c'est le cas, verrifier ensuite que c'est un multiple de 2.