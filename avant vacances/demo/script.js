console.log("Le fichier javascripte est présent^^");

const demo = document.getElementById("demo");
const btn = document.getElementById("btn");

//On recup les elements de a page web via leurs ID
console.log("Le Js a récuperer depuis la page :");
console.log(demo);
console.log(btn);

/*On joute un comportement quand on clique sur le bouton*/
btn.addEventListener("click", function(){
    //Le code ici se déclanche quand l'utlisateur clique
    console.log("L'utilisateur a cliqué!!!");

    //On modifie le text contenu dans la balise "<h1>Hello World<h1>"
    demo.innerText = "Hello Japan!";

});