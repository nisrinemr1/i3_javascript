//Une fonction recurcive => C'est une fonction qui s'appelle elle-même. Du coup 
//Fibonacci
//0 1 1 2 3 5 8 13 21 ...
// Si on cherche la cinqième valeur : F(5)


let countOpti = 0;

const getFibonacci = function(nombre){
    console.log(`fib(${nombre})`);
    const memoire = new Map();
    memoire.set(0, 0);
    memoire.set(1, 1);

    return processFib(memoire, nombre);
}
    
    
const processFib = function(memoire, nombre){
    countOpti++;
    if(memoire.has(nombre)){
        return memoire.get(nombre);//si f est plus petit que 2 il envoie 0 ou 1!
    }

    const result = processFib(memoire, nombre -1) + processFib(memoire, nombre-2); 
    memoire.set(nombre,result);
    return result;
}

const val= 26;
const resFib = getFibonacci(val);
console.log(`La valeur de fibonacci de ${val} est ${resFib}`);
console.log(`Compteur opti -> ${countOpti}`);