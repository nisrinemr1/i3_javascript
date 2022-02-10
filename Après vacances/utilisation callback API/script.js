'use strict';

//en js on va juste afficher un message d'erreur avec la div. Tandis qu'avec PHP on peut afficher la page d'erreur de l'api 


//Méthode pour créer une requete AJAX (INTRO)
const requestAJAX = function(url,cbSuccess, cbError){
    //c'est asynchrone!!!! doit communiquer avec le serveur avant de pouvoir l'utiliser

    //Créer l'objet XHR 
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        //"xhr.readyState" -> 4 On utilise la valuer de xhr ready state quand celle-ci vaut 4 donc elle sera terminer
        
        if(xhr.readyState === 4){
            // On utilise le xhr.status pour savoir si la requete c'est bien passée.

            if(xhr.status === 200){// 200 est une status code. 
                //cf https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP

                //la requete a fonctionné :D
                const data = JSON.parse(xhr.responseText);//convertir pour qu'il soit utilisablea
                cbSuccess(data);
            }      
            else{
                //la requete  échoué => ERROR 404 (page non trouvé :) )
                cbError();
            }
        }
    }

    //parametrer et envoyer la requete de l'objet XHR
    xhr.open('GET', url, true); //true pour que l'asynchrone soit true et que l'interraction sera plus fluide ! 

    xhr.send();
}


/* ************************************************** */



//Récupération des elements du DOM
const formPokemon = document.forms['formPokemon'];
const resultPokemon = document.querySelector('#resultPokemon');

//Interaction avec l'event 'submit' du formulaire
formPokemon.addEventListener('submit', function(event){
    //Désactivé le comportement du submit 
    event.preventDefault();

    //Récuperer le numéro du polemon demander
    const numero = parseInt(formPokemon['noPokemon'].value);

    //TODO Traitement
    searchPokemon(numero);

    //Remise à zéro du formulaire
    formPokemon['noPokemon'].value = '';
    formPokemon['noPokemon'].focus();
    
    //découper son code en petite fonction! 
});

const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/__PokemonID__';


const searchPokemon = function(numero){
    const url = URL_POKEMON.replace('__PokemonID__', numero);

    requestAJAX(url, function(result){
        //callback success :3
        console.log(result);
        const data = {
            name: result.name,
            id: result.id,
            urlImage: result.sprites.front_default,
            weight: result.weight,
            types: result.types.map(t=> t.type.name)
        }//comme le JSON! objet :3
        console.log(data);

        printPokemon(data);

    }, function(){
        //callback error ><
        console.log('ERROR!!!!!!!!!!!!!!!!!!!!');
    })
}

const clearPokemonResult = function(){
    resultPokemon.innerHTML = '';
}//pour supprimer le précédent

const printPokemon = function(data){
    clearPokemonResult();

    const title = document.createElement('h3');
    title.innerText = data.name;//n'autorise pas de mettre une balise html. Donc uniquement du text
    resultPokemon.appendChild(title);
    
    const spanTitle = document.createElement('span');
    spanTitle.innerText = '(' + data.id + ')';
    title.appendChild(spanTitle);

    const imgPokemon= document.createElement('img');
    imgPokemon.src = data.urlImage;
    imgPokemon.alt = data.name;
    resultPokemon.appendChild(imgPokemon);

    const typePokemon = document.createElement('p');
    typePokemon.innerText = 'Type : '+ data.types.join(', ');
    resultPokemon.appendChild(typePokemon);

    const weightPokemon = document.createElement('p');
    weightPokemon.innerText = 'weight : '+ data.weight;
    resultPokemon.appendChild(weightPokemon);
}
