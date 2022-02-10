const dico = new Map();
console.log(dico);

//Ajouter et/ou modifier un element 
dico.set('Manon', 'Hello World'); //tirroir Manon qui a HelloWorld une clef, une valeur
dico.set('Lison', 'Salut :O');
dico.set('Charlotte', 'Kikouuu');
console.log(dico);

dico.set('Lison', 'Mise a jours');//ajout et modifier le set! 
console.log(dico);

//Teste si le dico possède une clef
const possedeElementLison = dico.has('Lison');
console.log(possedeElementLison);//il renvoie true

//recup un element via sa clef 
const elementRecup = dico.get('Charlotte');//il renvoie undefined si on met robert
console.log(elementRecup); 

//supprimer un eleme via sa clef
const testSiOk= dico.delete('Manon'); //renvoie un boolean  true si on supp manon par contre si on met robert il met false
console.log(testSiOk);
console.log(dico);

//parcourir les elements 
// avec for of 

for (const element of dico){
    console.log(element);//pas ultra aventageux Il casse le tableau
}

dico.forEach(function(valeur,clef){
    console.log(clef + ' -> '+valeur);
})

//pas supporter partout le dico!!!!! Il est récent meme s'il est de l'annee 2015