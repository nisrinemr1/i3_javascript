'use strict';
const scoreJoueurs = new Map();
const nomJoueurs =[];

const formScore = document.forms['formScore'];
const btnCalcul = document.getElementById('btnCalcul');
const displayScore = document.getElementById('displayScore');

document.forms['formJoueur'].addEventListener('submit', function(e){
  e.preventDefault();

  for(let idJoueur = 1; idJoueur <= 4 ; idJoueur++){

    const nomJoueur = e.target[`nomJoueur${idJoueur}`].value;
    scoreJoueurs.set(nomJoueur, []);

    nomJoueurs.push(nomJoueur);

  }

  console.log('creation d\'un tab des noms', nomJoueurs);
  console.log('creation du dico des scores', scoreJoueurs);

  console.log(scoreJoueurs);
  document.getElementById('zoneNom').classList.add('not-visible');
  //pour faire disparaitre une fois les nom ajoutées!
  document.getElementById('zoneEncodage').classList.remove('not-visible');

  //mise à jours des noms des joueurs dans la zone d'encodage  Juste pour afficher le nom des joueurs
  for(let idJoueur = 1; idJoueur<=4; idJoueur++){
    console.log('coucou');
    const labelJoueur = formScore.querySelector(`#labelJoueur${idJoueur}`);
    labelJoueur.innerHTML = nomJoueurs[idJoueur-1];
  }

});

//ajout des scores des inputs

formScore.addEventListener('submit', function(e){
  e.preventDefault();

  for(let idJoueur = 1; idJoueur <= 4; idJoueur++){
    const score = parseInt(formScore['scoreJoueur' + idJoueur].value);//maniere deux de [`nomJoueur${idJoueur}`]
    const nomJoueur = nomJoueurs[idJoueur-1];

    const tableauScoreJoueur = scoreJoueurs.get(nomJoueur);
    tableauScoreJoueur.push(score);
  }
  console.log('Ajout des scores', scoreJoueurs);
  formScore.reset();//pour vider le champ

});

//affichage du tableau
btnCalcul.addEventListener('click', function(e){
  //pour faire disparaitre une fois les nom ajoutées!
  document.getElementById('zoneEncodage').classList.add('not-visible');
  document.getElementById('zoneScore').classList.remove('not-visible');
  
  for(const nomJoueur of nomJoueurs){
    //ajouter le score d'un joueur
    const ligneJoueur = document.createElement('tr');
    displayScore.appendChild(ligneJoueur);
  
    //nom du joueur
    const cellNom = document.createElement('td');
    cellNom.innerHTML= nomJoueur;
    cellNom.className = 'nom-joueur';
    ligneJoueur.appendChild(cellNom);
  
    // score
    const tableauScoreJoueur = scoreJoueurs.get(nomJoueur);
    let scoreTotal=0;
    for(const score of tableauScoreJoueur){
      const cellScore = document.createElement('td');
      cellScore.innerHTML = score;
      ligneJoueur.appendChild(cellScore);
  
      scoreTotal += score;
    }
    const cellScoreTotal = document.createElement('td');
    cellScoreTotal.innerHTML = scoreTotal;
    cellScoreTotal.className = 'score-joueur';
    ligneJoueur.appendChild(cellScoreTotal);
  }
});