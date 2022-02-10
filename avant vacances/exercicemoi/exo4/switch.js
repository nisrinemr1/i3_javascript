//explication de l'ecriture switch permet de tester des valeurs fixes (123) exemple
const number = Number.parseInt(prompt('Entrer un nombre'));

//d'abord avec des if dans un premier temps

if (number === 1) {
    console.log('Vous avez entrer UN');
}

eslse if (number === 2) {
    console.log('Vous avez entrer DEUX');
}
eslse if (number === 3) {
    console.log('Vous avez entrer TROIS');
}
else {
    console.log('Vous avez entré autre chose! :O');
} 
//c'est plus simple



//avec switch
switch (number) {
    case 1:
        console.log('Vous avez entrer UN');
        break;
        case 2:
        console.log('Vous avez entrer DEUX');
        break;
        case 3:
        console.log('Vous avez entrer TROIS');
        break;
    default:
        console.log('Vous avez entré autre chose! :O');
        break;
}