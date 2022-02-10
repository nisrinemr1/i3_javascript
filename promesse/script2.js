'user strict';

const demandeUserPromise = function(msg){
    return new Promise((resolve, reject)=>{
        const reponse = prompt(msg);
    const result = parseFloat(response);

    if(!isNaN(result)){
        resolve(result);
    }
    else{
        reject();
    }
    });
};

//Utilisation promesse
const container = document.getElementsById('container');

demandeUserPromise('Entrez une année')
    .then((data)=>{
        container.innerHTML = `Le nombre est ${data}`;
    })
    .then(()=>{
        console.log('Coucou');
    })
    .catch(()=>{
        container.innerHTML = 'Le nombre est invalide'
    })