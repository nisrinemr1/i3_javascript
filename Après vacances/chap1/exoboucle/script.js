'user strict';
//théorie sur la manipulation des formulaires
/*
const f1 = document.forms["formFibonacci"]
const f2 = document.formFibonacci

const i1 = f1["inputNumber"]
const i2 = fi.inputNumber

-- Via l'Id 
const f3 = document.getElementById('formId')
const i3 = document.getElementById('inputNumberId)

--Action possible 
const form = document.forms["formFibonacci"];
form.submit();
form.reset();

--Interaction avec l'event "submit"
form.addEventListener("submit", function(event) {
    // Déactivation du comportement par defaut    
    event.preventDefault();    
    console.log('Submit !!!');
})
en gros ça permettra d'annuler le reset et le submit. ça permettra que le submit sera avec le enter ou le click!! 
\*