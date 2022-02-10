const maValeur = Number.parseInt(prompt('Entrer un nombre'));

if(maValeur === 1) {
    console.log('Vous avez entré UN');
}
else if(maValeur === 2) {
    console.log('Vous avez entré DEUX');
}
else if(maValeur === 3) {
    console.log('Vous avez entré TROIS');
}
else {
    console.log('Vous avez entré autre chose :o');
}

switch(maValeur) {
    case 1:
        console.log('Vous avez entré UN');
        break;
    case 2:
        console.log('Vous avez entré DEUX');
        break;
    case 3:
        console.log('Vous avez entré TROIS');
        break;
    default: 
        console.log('Vous avez entré autre chose :o');
        break;
}