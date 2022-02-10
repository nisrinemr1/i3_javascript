const saisieUser = prompt('Veuillez encoder votre cotation (20 <- 0');
//pour afficher un pop up qui demandera de saisir la valeur

const encode = Number.parseFloat(saisieUser);
//pour récup la valeur

const point = document.getElementById('point');
const resultat = document.getElementById('resultat'); 


point.innerHTML = encode;
/* switch (encode) {
    case 20 :
        resultat.innerHTML=('Excellent');
        break;
    case 19 :
    case 18 :
    case 17 :
        resultat.innerHTML ='Très bien';
        //innerHTML pas besoin de () tandis que consol.log en a besoin pour le modifier dans le dom 
        break;
    case 16 :
    case 15 :
    case 14 :
    case 13 :
        resultat.innerHTML ='Bien';
        break;
    case 12 :
    case 11 :
    case 10 :
        resultat.innerHTML ='Suffisant';
        break;
    case 9 :
    case 8 :
        resultat.innerHTML ='Insuffisant';
        break;
    default:
        resultat.innerHTML= 'Echec';
        //a garder pour de 0 à 7 pas à l'ajouter il me remplace 8 lignes
        break;
} */


