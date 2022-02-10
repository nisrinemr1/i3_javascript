'user strict';

// récupération du dom

const form = document.forms['formFibonacci'];
const resultFibonacci = document.getElementById('resultFibonacci');

//Interaction avec le formulaire (avec l'event submit)
form.addEventListener('submit', function(cookie){
    //désactivation de l'actualisation de la page (event submit du formulaire)
    cookie.preventDefault();


    //La target de l'evenement permet de recup le formulaire
    console.log(form,cookie.target);

    //recup la valeur de l'input 'inputNumber'
    const number = parseInt(form['inputNumber'].value)
    console.log(number);
    //si on met pas le point value il mettra NaN!

    //TODO faire le calcule de la suite de finonacci 
    /* const result = 1337; */
    let result; 

    if(number <2){
        result = number;
    }

    else {
        let valA = 0;
        let valB = 1;
        
        for(let i = 2 ; i <= number ; i++){
            result = valB + valA;

            valA = valB;
            valB = result;

        }
    
    }

    //afficher le resultat 
    const elemLI= document.createElement('li');
    elemLI.innerHTML = `f(${number}) = ${result}`;

    resultFibonacci.appendChild(elemLI);

    //Reset du formulaire 
    form.reset();
    

})
