const demandeUserCallback = function (msg, cbSuccess, cbError){
    const response = prompt(msg);
    const result = parseFloat(response);

    if(!isNaN(result)){
        cbSuccess(result);

    }
    else{
        cbError();
    }
}
//utilisation 
const container = document.getElementById('container')

demandeUserCallback('Entrer une année', 
function(data){
    container.innerHTML = `Le nombre est ${data}`;
},
function(){
    container.innerHTML = `Le nombre est érronée!`
}
);